import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit , OnDestroy{

  paramsSub !: Subscription;

  user! : { id: number , name : string}

  constructor(private route : ActivatedRoute) { }    // It gives the currently active route that means id 
  
  ngOnInit(): void {

    this.user = {
      id:     this.route.snapshot.params['id'] ,    // The data passed is given in the path app.module.ts
      name :  this.route.snapshot.params['name']     
    }

  this.paramsSub = this.route.params.subscribe(
    (params : Params ) => {
           this.user.id = params['id'];
           this.user.name = params['name'];
    }
  );

  }

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
  }

}
