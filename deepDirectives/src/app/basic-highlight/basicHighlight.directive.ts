import { Directive , ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]',
})

export class BasicHighlightDirective implements OnInit{
    constructor( private elementref : ElementRef){

    }

    ngOnInit(){
        this.elementref.nativeElement.style.backgroundColor='Orange';
        this.elementref.nativeElement.style.fontSize="30px";
    }

    @HostListener('mouseenter') moouse(){
   this.elementref.nativeElement.style.color="yellow";
    }

    @HostListener('mouseleave') moouseleave(){
        this.elementref.nativeElement.style.color="black";
         }


}