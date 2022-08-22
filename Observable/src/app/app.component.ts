import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userservice } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Observable';
  userActivated = false ;


  constructor(
    private userService : Userservice
  ){}

  ngOnInit(){
    
     this.userService.activatedEmitter.subscribe(
      (didActivate) => { this.userActivated = didActivate }
    );

  }


 
}
