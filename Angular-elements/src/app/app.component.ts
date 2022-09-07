import { Component, Injector } from '@angular/core';
import { AlertComponent } from './alert.componet';
import { createCustomElement } from '@angular/elements'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-elements';
  content : any = null;

  constructor(injector:Injector , domsanitizer : DomSanitizer){
    const AlertElement = createCustomElement(AlertComponent , { injector: injector});
    customElements.define('my-alert' , AlertElement)
    setTimeout(()=> {
      this.content = domsanitizer.bypassSecurityTrustHtml("<my-alert message='render dynamicallay'><my-alert>");
    },1000)
  }
}
