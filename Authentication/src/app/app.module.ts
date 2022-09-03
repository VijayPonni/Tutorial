import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './shared/alert/alert.component';
import { SharedModule } from './shared/shared-module';
import { CoreServicesModule } from './core.module';
import { RecipeModule } from './recipes/recipe.module';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shopping-list/Store/shopping-list.reducer';   // Old Import 
import { reducers } from './shopping-list/Shopping-list.main-reducer';        // New import

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    CoreServicesModule,
    RecipeModule,
    // StoreModule.forRoot( { ShoopingListStore : shoppingListReducer} )   // Old one
    StoreModule.forRoot(reducers)    // New One 
  ],

  bootstrap: [AppComponent]
  ,
entryComponents : [ AlertComponent]
})
export class AppModule {}
