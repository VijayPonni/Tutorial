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
import * as fromAppReducer from '../app/Store/app-reducer'
import { EffectsModule } from '@ngrx/effects'
import { AuthEffects } from './auth/store/auth.effects';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { environment } from 'src/environments/environment';
import { RecipesEffects } from './recipes/Store/recipe.effects';

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
    StoreModule.forRoot(fromAppReducer.appReducer)    ,
    EffectsModule.forRoot([AuthEffects , RecipesEffects]),
    StoreDevtoolsModule.instrument({ logOnly : environment.production}) ,
    StoreRouterConnectingModule.forRoot(),
  ],

  bootstrap: [AppComponent]
  ,
entryComponents : [ AlertComponent]
})
export class AppModule {}
