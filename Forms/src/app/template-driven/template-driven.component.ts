import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})





export class TemplateDrivenComponent {

  constructor( private route : Router){}
  title = 'Forms';

  @ViewChild('f') submitForm!: NgForm; 
  defaultvalue = 'pet';
 answer ='';

 genders= ['Male' , 'Female' , 'Others' ] ;

 suggestUserName(){
  const suggestUserName = "superUser";
  // this.submitForm.setValue({
  //   userInfo : {
  //     userame : suggestUserName,
  //     email : "abc@gmail.com",
  //   },
  //   secret:'pet',
  //   questionAnswer:'',
  //   gender:'Male'
  // });

  this.submitForm.form.patchValue({
    userInfo:{ 
      username : suggestUserName,    
      email : "abc@gmail.com"                 // If only needs to set selective fields to be fixed 
    }
  });
 }

// onSubmit(form : NgForm){
//   console.log(form);
//  console.log(" Form submitted ! ");
// }

submitOrNot=false;
DataToShow = {
  userName : '',
  Email : '',
  secretQuestion : '',
  Answer : '',
  gender : ''
}

onSubmit(){
//  console.log(this.submitForm);
this.submitOrNot=true;
 this.DataToShow.userName = this.submitForm.value.userInfo.username;
 this.DataToShow.Email = this.submitForm.value.userInfo.email;
 this.DataToShow.secretQuestion = this.submitForm.value.secret;
 this.DataToShow.Answer = this.submitForm.value.questionAnswer;
 this.DataToShow.gender = this.submitForm.value.gender;
}

resetForm(){
  this.submitForm.reset();
  
}

backToHome(){
  this.route.navigate(['/']);
}

}

