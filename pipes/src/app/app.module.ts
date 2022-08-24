import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { shortenPipe } from './short-serverstatus';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    shortenPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
