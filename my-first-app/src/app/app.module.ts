import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningComponent } from './components/warning/warning.component';
import { SuccessComponent } from './components/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
