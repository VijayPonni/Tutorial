import { Action } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";

export const ADD_INGREDIENT = '[Shopping List] Add Ingredient';
export const ADD_INGREDIENTS = '[Shopping List] Add Ingredients';
export const UPDATE_INGREDIENT = '[Shopping List] Update Ingredient';
export const DELETE_INGREDIENT = '[Shopping List] Delete Ingredient' ;

export const START_EDIT = '[ShoppingList] StartEdit';
export const STOP_EDIT ='[ShoppingList] StopEdit';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT ;
  constructor( public payload : Ingredient ) {}       // make a constructor
}

export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENTS ;
  constructor ( public payload : Ingredient[] ) {}
}

export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREDIENT ;
  constructor( public payload : Ingredient ) {}
}

export class deleteIngredient implements Action {
  readonly type = DELETE_INGREDIENT ;
  }
 
export class startEdit implements Action {
  readonly type = START_EDIT
  constructor( public  payload : number) {}
}

export class stopEdit implements Action {
  readonly type = STOP_EDIT
}
 
export type ShoppingListActions = 
AddIngredient |
AddIngredients | 
UpdateIngredient | 
deleteIngredient |
startEdit |
stopEdit
;