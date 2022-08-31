import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy{

  constructor(
    private auth : AuthService ,
    private route : Router,
    private componentFactoryResolver : ComponentFactoryResolver ,
    ){}

    @ViewChild(PlaceholderDirective, { static: false }) alertHost!: PlaceholderDirective;

    private closeSub!: Subscription; 


  isLoggingMode = true ;
  isLoading = false ;
  error :any = '';
  
  

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
      authObs = this.auth.login(email,password);
    }
    else{
      authObs = this.auth.signUp(email,password)
    }

    authObs.subscribe(            
    resData => {
      this.isLoading = false;
      console.log(resData);
       this.route.navigate(['recipes'])
      },
      errorMessage => {
      this.isLoading = false;
      console.log(errorMessage);
      this.showErrorAlert(errorMessage);
      this.error = errorMessage;
    }
  );

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
