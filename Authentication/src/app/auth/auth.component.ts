import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { Store } from '@ngrx/store';
import * as fromApp from '../Store/app-reducer';
import * as AuthActions from '../auth/store/auth.actions';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit ,OnDestroy{

  constructor(
    private auth : AuthService ,
    private route : Router,
    private componentFactoryResolver : ComponentFactoryResolver ,
    private store : Store<fromApp.AppState>
    ){}

    @ViewChild(PlaceholderDirective, { static: false }) alertHost!: PlaceholderDirective;

    private closeSub!: Subscription; 


  isLoggingMode = true ;
  isLoading = false ;
  error :any = '';
  
  
ngOnInit(){
  this.store.select('auth').subscribe( authState => {
    this.isLoading = authState.loading;
    this.error = authState.authError;
   if(this.error){
    this.showErrorAlert(this.error);
   }
  }
    )
}

  onSwitchMode(){
   this.isLoggingMode = ! this.isLoggingMode ;
  } 

  onHandleError(){
    this.error=null;
  }

  onSubmit(form : NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true ;

    let authObs : Observable<AuthResponseData>

    if(this.isLoggingMode){
      // authObs = this.auth.login(email,password);
      this.store.dispatch(new AuthActions.LoginStart( { email:email , password:password } ))
    }
    else{
      authObs = this.auth.signUp(email,password)
    }

   

  //   authObs.subscribe(            
  //   resData => {
  //     this.isLoading = false;
  //     console.log(resData);
  //      this.route.navigate(['recipes'])
  //     },
  //     errorMessage => {
  //     this.isLoading = false;
  //     console.log(errorMessage);
  //     this.showErrorAlert(errorMessage);
  //     this.error = errorMessage;
  //   }
  // );

form.reset();
  }

  private showErrorAlert(message:string){
    const alertCmpFactory =  this.componentFactoryResolver.resolveComponentFactory(AlertComponent)
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

   const componentRef =  hostViewContainerRef.createComponent(alertCmpFactory);
     componentRef.instance.message = message;

     this.closeSub = componentRef.instance.close.subscribe( () => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();

     } );
 }

 ngOnDestroy(): void {
  if(this.closeSub){
   this.closeSub.unsubscribe();
   }
 }

} 
