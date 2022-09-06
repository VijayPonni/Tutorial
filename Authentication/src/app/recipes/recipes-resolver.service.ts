import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../Store/app-reducer';
import * as RecipesAction from '../recipes/Store/recipe.actions';
import { Actions , ofType } from '@ngrx/effects';
import { take } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    // private recipesService: RecipeService
    private store : Store<fromApp.AppState>,
    private actions$ : Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : any{

  // return this.dataStorageService.fetchRecipes();
  this.store.dispatch(new RecipesAction.FetchRecipe())
 return this.actions$.pipe(ofType(RecipesAction.SET_RECIPES) , take(1))
  }
}
