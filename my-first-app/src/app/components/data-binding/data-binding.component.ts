import { Component, ContentChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  type: number = 1;
  name: string = "string interpolation";
  status: boolean =true; 


  color:string ="red";

  changeColor(){
    this.color="blue";
   }

  getStringInterpolation(){
    return "I am the string interpolation method who binds the method to html template from typescript";
  }
constructor() { 
  setTimeout(()=>{
     this.status=false;
     this.disable=false;
  },2000)
}

  ngOnInit(): void {}


  demoShowEvents(event : any){
   console.log(event);
   
  }



  para :string ='';
onShow( event : any ){
   this.para = (<HTMLInputElement>event.target).value;
}

content ='vijay';

final='';
disable=true;
result='';

getValue(event : Event){
  this.final=(<HTMLInputElement>event.target).value;
}

submitInput(){
this.result=this.final
  
}


userName='';
reset(){
  this.userName='';
 }








}
