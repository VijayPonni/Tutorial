import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, Subject, throwError } from "rxjs";
import { tap } from "rxjs/operators"
import { User } from "./user.model";


export interface AuthResponseData{
    idToken : string,
    email : string ,
    refreshToken : string ,
    expiresIn : string ,
    localId : string,
    registered? : boolean
}

@Injectable( {providedIn : 'root'} ) 
export class AuthService {

    constructor( 
        private http : HttpClient,
        private route : Router
        ){}

    // user = new Subject<User>();

    user = new BehaviorSubject<User | null >(null);         // use the BEhaviourSubject with initial value null


    signUp(email : string , password : string){

       return this.http.post<AuthResponseData>( 
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBP02M32UK1J-7S5k81wJ47eitIwYFltzQ',      // complete url
            {
                email : email,
                password : password,
                returnSecureToken : true
            }
         ).pipe( 
            catchError( this.errorHandler),
            tap( resData => {
                this.handleAuthentication(resData.email , resData.localId , resData.idToken ,+resData.expiresIn)
            })
             )
         
    }


    login(email : string , password : string ){
       return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBP02M32UK1J-7S5k81wJ47eitIwYFltzQ',
            {
                email : email,
                password : password,
                returnSecureToken : true
            }
            ).pipe( 
                catchError( this.errorHandler) ,
                tap (resData => {
                    this.handleAuthentication(resData.email , resData.localId , resData.idToken ,+resData.expiresIn );
                } ) 

                
                )

    }

    logOut(){
        this.user.next(null);
        // this.route.navigate(['/auth']);
    }

    private handleAuthentication( email : string ,  userId : string , token : string , expiresIn : number ){
        const expirationdate = new Date( new Date().getTime() + expiresIn * 1000);
        const user = new User(email , userId , token , expirationdate)  // Pass the values to the uder model
        this.user.next(user);       // emit the subject with user 
        localStorage.setItem( 'userData' , JSON.stringify(user)  )          // Store the user in local storage to implement auto-login
    }

    autoLogin(){

        const  userData : {
            email : string ,
            id : string ,
            _token : string ,
            _tokenExpirationData : string 
        } 
         = JSON.parse(localStorage.getItem('userData'));

        if(!userData){
            return ;
        }   
     

        const loadedUser = new User(userData.email , userData.id , userData._token , new Date(userData._tokenExpirationData))

        if(loadedUser.token){
            this.user.next(loadedUser)
        }
    }

    private errorHandler(errorRes : HttpErrorResponse){
            console.log(errorRes);
            let errorMessage = " An unknown error occured ! "
            if( !errorRes.error || !errorRes.error.error){
                return throwError(errorMessage)
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
              return throwError(errorMessage)
        }

}