import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions , ofType , Effect} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators'
import { Recipe } from '../recipe.model';
import * as RecipesActions from '../Store/recipe.actions';
import * as fromApp from '../../Store/app-reducer';

@Injectable()
export class RecipesEffects {

    // @Effect()
    // fetchRecipes = this.actions$.pipe(
    //     ofType(RecipesActions.FETCH_RECIPES),
    //     switchMap( () => {
    //         return this.http.get<Recipe[]>(
    //             'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json',
    //             ),
    //             map( (recipes :any ) => {
    //                 return recipes.map( (recipe:any ) => {
    //                   return {
    //                     ...recipe,
    //                     ingredients: recipe.ingredients ? recipe.ingredients : []
    //                   };
    //                 }); 
    //               }),
    //              }),
    //              map( (recipes:any) => { return new RecipesActions.SetRecipes(recipes)})
    // )

@Effect({dispatch:false})
StoreRecipe = this.actions$.pipe( 
    ofType(RecipesActions.STORE_RECIPE),
    withLatestFrom(this.store.select('recipes')),
    switchMap( ( [actionData , recipesState ] ) => {
        return this.http
        .put(
          'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json',
          recipesState.recipes
        )
      
    } )  )

    constructor(private actions$ : Actions , private http: HttpClient , private store : Store<fromApp.AppState>){}
}