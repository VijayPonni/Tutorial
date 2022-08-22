import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RectiveFormsComponent } from './rective-forms/rective-forms.component';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { HomeComponent } from './home/home.component';

const appRoutes : Routes = [
  { path : '' , component : HomeComponent } ,
  { path : 'template-driven' , component : TemplateDrivenComponent} ,
  { path : 'reactive-form' , component : RectiveFormsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    RectiveFormsComponent,                  //import ReactiveFormsModule from AAngular/forms
    TemplateDrivenComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
   ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
