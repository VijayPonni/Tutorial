import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // import from Router

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route : Router) { }    // Define in constructor

  ngOnInit(): void {
  }


  onLoadServers(){
    //spme process may be ..
    this.route.navigate(['/server']);   //route to particular path 
    
  }
}
