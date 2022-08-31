import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable ,take } from "rxjs";
import { tap } from 'rxjs/operators';
import { AuthService } from "./auth.service";

@Injectable({providedIn:'root'})
export class AuthGauard implements CanActivate {

    constructor(
        private auth : AuthService ,
        private route : Router
        ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.auth.user.pipe(
            take(1),
            map( user => { 
                const isAuth =  !!user;
                if(isAuth){
                    return true;
                }
                return this.route.createUrlTree(['/auth'])
             }),
            // tap(isAuth => { 
            //     if(!isAuth){
            //         this.route.navigate(['/auth'])
            //     }
            // } )
        )
    }

}