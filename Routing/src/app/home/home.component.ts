import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // import from Router
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private route : Router,
    private authService : AuthService
    ) { }    // Define in constructor

  ngOnInit(): void {
  }


  onLoadServer(id : number){
    //some process may be ..
    this.route.navigate( ['/servers', id , 'edit'] , { queryParams : { allowedit : '1'}  ,  fragment : 'loading'});   //route to particular path 
    
  }

  onLogin(){
   this.authService.login();
  }

  onLogout(){
   this.authService.logout();
  }



}
