import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared-module";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListRoutingModule } from "./shopping-list.routing.module";

@NgModule({
   declarations : [
    ShoppingListComponent,
    ShoppingEditComponent,
   ],
   imports : [
     FormsModule,
     ReactiveFormsModule,
     ShoppingListRoutingModule ,
     SharedModule
   ],
//    exports : [
//     ShoppingListComponent,
//     ShoppingEditComponent,
//    ]
})

export class ShoppingListModule {

}