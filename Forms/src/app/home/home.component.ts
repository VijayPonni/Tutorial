import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private route : Router ,
    private relative : ActivatedRoute

  ){}
  ngOnInit(): void {
  }

  goToTemp(){
    this.route.navigate ( ['/template-driven'] ) ;
  }

 goToReactive(){
    this.route.navigate ( [ '/reactive-form' ] ); 
    
  }



}
