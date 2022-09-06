import { HttpClient } from '@angular/common/http';
import { Actions , ofType} from '@ngrx/effects';
import { catchError, map, of, switchMap, tap, throwError } from 'rxjs';
import * as AuthActions from '../store/auth.actions' 
import { Effect } from '@ngrx/effects'
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { AuthService } from '../auth.service';

export interface AuthResponseData{
    idToken : string,
    email : string ,
    refreshToken : string ,
    expiresIn : string ,
    localId : string,
    registered? : boolean
}

const handleAuthentication = (email : string , userId : string , token :string , expiresIn : number) => {
    const expirationDate = new Date( new Date().getTime() + expiresIn * 1000);
    const user = new User( email , userId ,token , expirationDate )
    localStorage.setItem( 'userData' , JSON.stringify(user)  )          // Store the user in local storage to implement auto-login
    console.log("Setitm worked");
    console.log(user);
    
    
    return new AuthActions.AuthenticateSuccess({
        email: email,
     userId: userId,
     token: token,
     expirationDate: expirationDate,
     redirect:false
    });          // creates new Observable
}

const handleError =  (errorRes : any) => {
        console.log(errorRes);
        let errorMessage = " An unknown error occured ! "
        if( !errorRes.error || !errorRes.error.error){
            return of(new AuthActions.LoginFail(errorMessage))
        }
        switch(errorRes.error.error.message){

            case 'EMAIL_EXISTS' :
            errorMessage = ' The email already exists ! '
            break;

            case 'EMAIL_NOT_FOUND' :
            errorMessage = ' The email does not exists ! '
            break;

            case 'INVALID_PASSWORD' :
            errorMessage = ' The Paaword is wrong ! '
            break;


          }
        return of(new AuthActions.LoginFail(errorMessage))   // Creates new Observable without an error 
    }


@Injectable()
export class AuthEffects {

    @Effect()
    authSignup = this.actions$.pipe(
        ofType( AuthActions.SIGNUP_START),
    switchMap( (signupAction: AuthActions.SignupStart) => {
        
       return this.http.post<AuthResponseData>( 
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBP02M32UK1J-7S5k81wJ47eitIwYFltzQ',      // complete url
        {
            email : signupAction.payload.email,
            password : signupAction.payload.password,
            returnSecureToken : true
        }
     )
     .pipe(
        tap( resData => {
            this.authService.setLogoutTimer(+resData.expiresIn * 1000)
        } ),
        map(resData => {
           return handleAuthentication(resData.email,resData.localId ,resData.idToken,+resData.expiresIn)
        }),
        catchError(
            errorRes => { return  handleError(errorRes) }
        )
     )
    } )
     
    )


    @Effect()
    Login = this.actions$.pipe(
        ofType( AuthActions.LOGIN_START),
        switchMap( (authData : AuthActions.LoginStart) => {
            return this.http.post<AuthResponseData>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBP02M32UK1J-7S5k81wJ47eitIwYFltzQ',
                {
                    email :authData.payload.email,
                    password : authData.payload.password,
                    returnSecureToken : true
                }
                )
                .pipe(
                    tap( resData => {
                        this.authService.setLogoutTimer(+resData.expiresIn * 1000)
                    } ),
                    map(resData => {
                     return handleAuthentication(resData.email,resData.localId ,resData.idToken,+resData.expiresIn)
                      
                    }),
                    catchError(
                    errorRes => { return handleError(errorRes) }
                    ) 
                )
        } )
    )

    @Effect()
    autoLogin = this.actions$.pipe( ofType( AuthActions.AUTO_LOGIN ) ,  
    map( () => {
        console.log("Auto LogIn");
        
         
        const userData : {
           email : string  ,
           id : string ,
           _token : string ,
           _tokenExpirationData : string 
       }  = JSON.parse(localStorage.getItem('userData') as string);



       if(!userData){
       return { type : 'Dummy ' } ;
       }   
    
       const loadedUser = new User(userData.email , userData.id , userData._token , new Date(userData._tokenExpirationData));

       console.log( "Loaded User :" + loadedUser);
       

       if(loadedUser.token){
           // this.user.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpirationData).getTime() -
           new Date().getTime();
        //    this.autoLogout(expirationDuration);

           this.authService.setLogoutTimer(expirationDuration)

           return new AuthActions.AuthenticateSuccess( {
               email : loadedUser.email,
               userId : loadedUser.id,
               token : loadedUser.token,
               expirationDate : new Date(userData._tokenExpirationData),
               redirect:false

           })
   
       }

       return { type : 'Dummy ' } ;
    } ) )

    autoLogout = this.actions$.pipe(
        ofType(AuthActions.AUTHENTICATE_FAIL) , 
        tap( () => {
            this.authService.clearLogoutTimer();
            localStorage.removeItem('userData')}
             ))

    @Effect({ dispatch :false})
    authREdirect = this.actions$.pipe( 
        ofType(AuthActions.AUTHENTICATE_SUCCESS , AuthActions.AUTHENTICATE_FAIL) , 
        tap( (authSectionAccess : AuthActions.AuthenticateSuccess)=> {
            // if(authSectionAccess.payload.redirect){
            //   this.router.navigate(['/']);
            // }
            this.router.navigate(['/'])
    }))

    constructor( private actions$ : Actions , private http : HttpClient , private router: Router , private authService : AuthService ){}
}


