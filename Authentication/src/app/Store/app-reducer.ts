import * as fromShoppingList from '../shopping-list/Store/shopping-list.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromRecipes from '../recipes/Store/recipe.reducer'
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
   shoppingList : fromShoppingList.State ,
   auth : fromAuth.State ,
   recipes : fromRecipes.state | any

}

export const appReducer : ActionReducerMap< AppState , any > = {
    shoppingList : fromShoppingList.shoppingListReducer ,
    auth : fromAuth.AuthReducer ,
    recipes : fromRecipes.RecipeReducer
}
