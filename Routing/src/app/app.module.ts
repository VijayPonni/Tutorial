import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';

const appRoutes : Routes = [
  { path : '' , component : HomeComponent } ,
  { path : 'users' , component : UsersComponent } ,
  { path : 'users/:id/:name' , component : UserComponent } ,
  { path : 'servers' , component : ServerComponent } ,
  { path : 'servers/:id/edit' , component : EditServerComponent  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServerComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
