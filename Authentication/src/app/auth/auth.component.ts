import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  constructor(
    private auth : AuthService ,
    private route : Router
    ){}


  isLoggingMode = true ;
  isLoading = false ;
  error  = '';
  
  

  onSwitchMode(){
   this.isLoggingMode = ! this.isLoggingMode ;
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
      this.error = errorMessage;
    }
  );


   form.reset();
  }
} 
