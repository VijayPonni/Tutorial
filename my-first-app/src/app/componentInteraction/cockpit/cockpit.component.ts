import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

 ;

 @Output() serverCreated = new EventEmitter< { serverName:string , serverContent: string} >();
 @Output() blueprintCreated = new EventEmitter< { blueprintName: string , blueprintContent : string }  >(); 


//  1.databinding method

//  newServerName='';
//  newServerContent='';

//  onAddServer(){
//   this.serverCreated.emit( { serverName: this.newServerName , serverContent:this.newServerContent} )
// }

// onAddBlueprint(){
//   this.blueprintCreated.emit( { blueprintName:this.newServerName , blueprintContent:this.newServerContent} )
// }

// 1.databinding-end







// 2.local reference method

//   onAddServer(serverInput : HTMLInputElement){
    
//     this.serverCreated.emit( { serverName : serverInput.value , serverContent:serverInput.value} ) 
// }

// onAddBlueprint(serverInput:HTMLInputElement){
// this.blueprintCreated.emit( { blueprintName:serverInput.value , blueprintContent : serverInput.value} );
// }

//  local refernce method end


// 3 . local reference with viewChild

 @ViewChild('serverNameInput') serverNameInput!:ElementRef;
@ViewChild('serverContentInput') serverContentInput!:ElementRef;


onAddServer(){
  console.log(this.serverContentInput.nativeElement.value);
  this.serverCreated.emit( { serverName:this.serverNameInput.nativeElement.value , serverContent:this.serverContentInput.nativeElement.value} );
 }

 onAddBlueprint(){
  console.log(this.serverContentInput.nativeElement.value);
  this.blueprintCreated.emit( { blueprintName:this.serverNameInput.nativeElement.value , blueprintContent:this.serverContentInput.nativeElement.value } );
 }

 //localreference with viewchild








  constructor() { }

  ngOnInit(): void {
  }

}
