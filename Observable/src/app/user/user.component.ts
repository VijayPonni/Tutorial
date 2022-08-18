import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id!: number;

  constructor(
    private route : ActivatedRoute
  ) { }


  ngOnInit(): void {

    // this.id = this.route.snapshot.params['id'];

    // this.route.params.subscribe(
    //   (params : Params) => {
    //       this.id = params['id'];
    //   }
    // );

    this.route.params.subscribe(
       (params : Params) => { this.id = + params['id'] ;}
    );
   
   
  
  }

}

