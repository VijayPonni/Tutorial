import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rective-forms',
  templateUrl: './rective-forms.component.html',
  styleUrls: ['./rective-forms.component.css']
})
export class RectiveFormsComponent implements OnInit {

genders = ['Male' , 'Female'];

  signUpForm!: FormGroup;










  constructor(
    private route : Router
  ) { }

  ngOnInit(): void {
  }



  backToHome(){
     this.route.navigate(['/']);
  }

}
