import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

import { DataStorageService } from '../shared/data-storage.service';
import * as fromApp from '../Store/app-reducer';
import * as AuthActions from '../auth/store/auth.actions';
import * as  RecipesActions from '../recipes/Store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit , OnDestroy{

  userSubscription!: Subscription;
  isAuthenticated = false ;

  constructor(
    private dataStorageService: DataStorageService ,
    private auth : AuthService,
    private store : Store<fromApp.AppState>
    ) {}

    ngOnInit(): void {
      this.userSubscription = this.store.select('auth').pipe(map(authState => { return authState.user})).subscribe(
        user => {
          this.isAuthenticated = !!user ;
          console.log(!user);
          console.log(!!user);
          
          
        }
      );
    }

  onSaveData() {
    // this.dataStorageService.storeRecipes();
    this.store.dispatch(new RecipesActions.StoreRecipe())
  }

  onFetchData() {
    // this.dataStorageService.fetchRecipes();
    this.store.dispatch(new RecipesActions.FetchRecipe())
  }

  onLogOut(){
    console.log("hi");
    this.auth.logOut();
    this.store.dispatch(new AuthActions.AuthenticateFail())
  }

  ngOnDestroy(): void {
     this.userSubscription.unsubscribe();
  }
}
