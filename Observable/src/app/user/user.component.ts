import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Userservice } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit , OnDestroy {

  id!: number;

  subscribeToActivate! : Subscription;

  constructor(
    private route : ActivatedRoute,
    private userService : Userservice
  ) { }


  ngOnInit(): void {

    // this.id = this.route.snapshot.params['id'];

    // this.route.params.subscribe(
    //   (params : Params) => {
    //       this.id = params['id'];
    //   }
    // );

    this.subscribeToActivate = this.route.params.subscribe(
       (params : Params) => { this.id = + params['id'] ;}
    );
}

onActivate(){
  // this.userService.activatedEmitter.emit(true);           // Calling normal EventEmitter using emit()
  this.userService.activatedEmitter.next(true);              // Calling the subject using next()
}

ngOnDestroy(): void {
   this.subscribeToActivate.unsubscribe();
}

}

