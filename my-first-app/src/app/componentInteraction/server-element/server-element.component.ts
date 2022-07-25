import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit , OnChanges ,DoCheck ,AfterContentInit , AfterContentChecked  , AfterViewInit , AfterViewChecked , OnDestroy{

 @Input() elements!: { type: string; name: string; content: string; };

 @Input() name!:string;

 @ViewChild('heading' , {static:true} ) header!:ElementRef;
 @ContentChild('contentParagraph' , { static :true } ) content!:ElementRef;

  constructor() { 
    console.log("constructor called");
    
  }


  ngOnChanges(changes : SimpleChanges){
    console.log("ngOnCanges called");
    console.log(changes);
    
   }

  ngOnInit(): void {
    console.log("ngOnInit called");
    console.log("TextContent: " , this.header.nativeElement.textContent);
    console.log("Content Para : " , this.content.nativeElement.textContent);
    
    
  }


  ngDoCheck(){
    console.log("ngDoCheck Called");
    
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called");
    console.log("Content Para : " , this.content.nativeElement.textContent);
    
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
    
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
    console.log("TextContent: " , this.header.nativeElement.textContent);
    
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called");
    
  }

  ngOnDestroy(){
    console.log("ngOnDestroy Called");
    
  }
  

}
