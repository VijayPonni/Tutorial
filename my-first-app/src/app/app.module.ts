import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningComponent } from './components/warning/warning.component';
import { SuccessComponent } from './components/success/success.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './components/directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent,
    DataBindingComponent,
    DirectivesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
