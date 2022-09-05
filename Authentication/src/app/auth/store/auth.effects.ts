import { HttpClient } from '@angular/common/http';
import { Actions , ofType} from '@ngrx/effects';
import { catchError, map, of, switchMap, tap, throwError } from 'rxjs';
import * as AuthActions from '../store/auth.actions' 
import { Effect } from '@ngrx/effects'
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface AuthResponseData{
    idToken : string,
    email : string ,
    refreshToken : string ,
    expiresIn : string ,
    localId : string,
    registered? : boolean
}


@Injectable()
export class AuthEffects {
    @Effect()
    autoLogin = this.actions$.pipe(
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
                    map(resData => {
                        const expirationDate = new Date( new Date().getTime() + +resData.expiresIn * 1000)
                        return new AuthActions.login({
                            email: resData.email,
                         userId:resData.localId,
                         token: resData.idToken,
                         expirationDate:expirationDate
                        });          // creates new Observable
                    }),
                    catchError(
                        errorRes => {
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
                    ) 
                )
        } )
    )

    @Effect({ dispatch :false})
    authSuccess = this.actions$.pipe( ofType(AuthActions.LOGIN) , tap( () => {
       this.router.navigate(['/']);
    }))

    constructor( private actions$ : Actions , private http : HttpClient , private router: Router){}
}