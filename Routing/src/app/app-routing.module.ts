import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServerResolver } from "./servers/server/single-server/server-resolver.service";
import { SingleServerComponent } from "./servers/server/single-server/single-server.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";



const appRoutes : Routes = [
    { path : '' , component : HomeComponent } ,
    { path : 'users' , component : UsersComponent , children : [
       { path : ':id/:name' , component : UserComponent } 
    ] } ,
    { path : 'servers' ,
    // canActivate : [AuthGuard],
     canActivateChild : [AuthGuard] ,
     component : ServerComponent ,
      children : [
      { path : ':id' , component : SingleServerComponent , resolve : { server : ServerResolver} } ,
      { path : ':id/edit' , component : EditServerComponent , canDeactivate : [ CanDeactivateGuard ] }
    ] } ,

    // { path : 'not-found' , component : PageNotFoundComponent},
    { path : 'not-found' , component : ErrorPageComponent , data : { message : "An error occured ! " } },
    { path : '**' , redirectTo: '/not-found'}
   
  ];

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes , {useHash : true})
    ] ,
    exports : [
        RouterModule
    ]

})

export class AppRoutingModule {}