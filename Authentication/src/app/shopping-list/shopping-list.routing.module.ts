import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared-module";
import { ShoppingListComponent } from "./shopping-list.component";


const ShoppingListRoutes : Routes = [
  { path: 'shopping-list', component: ShoppingListComponent },
]


@NgModule({
  imports : [ 
    RouterModule.forChild(ShoppingListRoutes) ,
    SharedModule
   ] ,
  exports : [RouterModule]
})

export class ShoppingListRoutingModule {

}