import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  servers = ['vijay' , 'ajith' , 'surya']; 

  constructor( private router : Router ,
               private relative : ActivatedRoute   // To get the current Active path
               ) { }

  ngOnInit(): void {
  }

  onReload(){
    this.router.navigate(['server']  ,{ relativeTo: this.relative});   // Use the variable to decide the navigation path

  }


}
