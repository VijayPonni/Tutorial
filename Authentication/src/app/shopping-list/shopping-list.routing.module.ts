import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoggingService } from "../logging-service";
import { SharedModule } from "../shared/shared-module";
import { ShoppingListComponent } from "./shopping-list.component";


const ShoppingListRoutes : Routes = [
  { path: '', component: ShoppingListComponent },
]


@NgModule({
  imports : [ 
    RouterModule.forChild(ShoppingListRoutes) ,
    SharedModule
   ] ,
  exports : [RouterModule],
  providers: [LoggingService]
})

export class ShoppingListRoutingModule {

}