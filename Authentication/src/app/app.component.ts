import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private auth :AuthService ,
    private loginService : LoggingService
    ){}

  loadedFeature = 'recipe';


  ngOnInit(): void {
    this.loginService.printlog("hello from AppComponent ngOnInit") ;
  //  this.auth.autoLogin();
  }

  

  onNavigate(feature: any) {
    this.loadedFeature = feature;
  }
}