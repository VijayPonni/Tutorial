import { ShoppingListState,  shoppingListReducer } from './Store/shopping-list.reducer';
import { ActionReducerMap } from '@ngrx/store';


export const rootReducer = {};

export interface AppState {
    shoppingList: ShoppingListState;          
};


export const reducers: ActionReducerMap<AppState, any> = {
    shoppingList: shoppingListReducer                     // ShoppingList variable that return the ShoppingListReducer function
};