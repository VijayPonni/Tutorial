import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  yourName:String='';
  select=false;

  display(){
    this.select=true;
  }

  constructor() { }

  ngOnInit(): void {
   
    
  }

}
