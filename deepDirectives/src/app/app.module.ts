import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basicHighlight.directive';
import { RenderHighlighDirective } from './renderer/render-highligh.directive';
import { UnlessDirective } from './ownStructuralDirective/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    RenderHighlighDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
