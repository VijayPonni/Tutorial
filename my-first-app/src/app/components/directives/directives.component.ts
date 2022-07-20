import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
  // styles:[`
  //   p{
  //     color:red;
  //   }
  //   .para{
  //     color:blue;
  //   }
  
  // `]

})
export class DirectivesComponent implements OnInit {

  yourName:String='';
  select=false;
names=['vijay','ajith'];
  display(){
    this.select=true;
  }

  constructor() { }

  ngOnInit(): void {
   
    
  }

  name = 'vijay';
  getColor(){
    return this.name === "vijay" ? 'yellow' : 'blue';
  }

check=false;
check1=false;

likes : any = [];
dates : any = [];
  

showData(){
  // this.check=!this.check;
   this.likes.push(this.likes.length + 1);  
  return this.check;
}


showDate(){
  // this.check1=!this.check1;
  this.dates.push(new Date());

}
}
