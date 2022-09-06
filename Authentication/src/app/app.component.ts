import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging-service';
import * as fromApp from '../app/Store/app-reducer';
import * as AuthActions from '../app/auth/store/auth.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private auth :AuthService ,
    private store : Store<fromApp.AppState>,
    private loginService : LoggingService
    ){}

  loadedFeature = 'recipe';


  ngOnInit(): void {
    this.loginService.printlog("hello from AppComponent ngOnInit") ;
  //  this.auth.autoLogin();
  this.store.dispatch(new AuthActions.AutoLogin())
  }

  

  onNavigate(feature: any) {
    this.loadedFeature = feature;
  }
}
