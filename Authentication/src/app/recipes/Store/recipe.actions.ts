import { Action, Store } from "@ngrx/store"
import { Recipe } from "../recipe.model";

export const SET_RECIPES = '[Recipes] Set Recipe';
export const FETCH_RECIPES = '[Recipes] Fetch Recipe';
export const ADD_RECIPE = '[Recipe] Add Recipe';
export const UPDATE_RECIPE = '[Recipe] Update Recipe';
export const DELETE_RECIPE = '[Recipe] Delete Recipe';
export const STORE_RECIPE = '[Recipe] Store Recipe';

export class SetRecipes implements Action{
   readonly type = SET_RECIPES;
   constructor(public payload : Recipe[] ){}
}

export class FetchRecipe implements Action {
    readonly type = FETCH_RECIPES;
}

export class AddRecipe implements Action {
    readonly type = ADD_RECIPE;
    constructor( public payload :Recipe ){}
}

export class UpdateRecipe implements Action {
    readonly type = UPDATE_RECIPE;
    constructor(public payload : { index : number , newRecipe : Recipe}){}
}

export class deleteRecipe implements Action {
    readonly type = DELETE_RECIPE;
    constructor(public payload : number){}
}

export class StoreRecipe implements Action {
    readonly type = STORE_RECIPE;

}

export type RecipesActions = SetRecipes | FetchRecipe | AddRecipe | UpdateRecipe | deleteRecipe | StoreRecipe;