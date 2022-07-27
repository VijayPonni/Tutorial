import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderHighligh]'
})
export class RenderHighlighDirective implements OnInit {

  @Input() defaultColor:string='white';
  @Input() highlightColor:string='blue';

  @HostBinding('style.backgroundColor') backgroundColor:string=this.defaultColor;


  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(){
  // this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','green');
  // this.renderer.setStyle(this.elementRef.nativeElement,'fontSize','50px');
 this.backgroundColor=this.defaultColor;
  }



  @HostListener('mouseenter') mouseover(eventData:Event){
this.backgroundColor=this.highlightColor;
  }

  @HostListener('mouseleave') leaveMe(eventdata:Event){
this.backgroundColor=this.defaultColor;

   }

  

  // @HostListener('click') clickMe(){
  //  this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','brown')
  // }
  // @HostListener('mouseleave') leaveMe(){
  //   this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','green')
  //  }





}
