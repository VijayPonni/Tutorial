import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rective-forms',
  templateUrl: './rective-forms.component.html',
  styleUrls: ['./rective-forms.component.css']
})
export class RectiveFormsComponent implements OnInit {

genders = ['Male' , 'Female'];
signUpForm!: FormGroup;
forbiddeUserNames = ['Chris', 'Anna'] ;

  ngOnInit(): void {
    this.signUpForm = new FormGroup ( {       
      'userdata' : new FormGroup({                        // Grouping 
        'username' : new FormControl( null , [ Validators.required , this.forbiddenNames.bind(this) ] ),                             
        'email' : new FormControl( null , [Validators.required , Validators.email]  ),   
      })  ,                                                                   
      'gender' : new FormControl(),
      'hobbies' : new FormArray([])                                            
     } );  

    //  this.signUpForm.valueChanges.subscribe(
    //   (value) => { console.log(value);
    //   }
    //  );

    //  this.signUpForm.statusChanges.subscribe(
    //  (status) => { console.log(status);
    //  }
    //  );

    this.signUpForm.patchValue({
      'userdata': {
        'username' : 'vijay',
      },
      
    }
     ); 
  }



  onAddHobby(){
    const control = new FormControl(null , Validators.required) ;
     ( <FormArray>this.signUpForm.get('hobbies') ).push(control);

  }

  forbiddenNames(control:FormControl) : { [s:string] : boolean } {
   if(this.forbiddeUserNames.indexOf(control.value) !== -1 ) {
    return { 'nameIsForbidden' : true } ;
   }
  return {  }  ;                   // return type should be null if validation is successful
  }

  // forbiddenemail(control:FormControl) : Promise<any> | Observable<any>  {
  //   const promise = new Promise<any>(  (resolve , reject) => {
  //   setTimeout( () => {
  //     if (control.value === 'vijay@g.com'){
  //       resolve( { 'emailIsForbidden' : true } )
  //     }
  //     else {
  //       resolve (null);
      
  //     }
  //   } , 1500 )
  //  } );
  //  return promise;
  // }

 

 

onSubmit(){
  console.log(" Form Submitted ! ");
  console.log(this.signUpForm);
  
  
}







  constructor(
    private route : Router
  ) { }





  backToHome(){
     this.route.navigate(['/']);
  }

}
