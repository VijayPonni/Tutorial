import { Ingredient } from "src/app/shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";          // import the whole Actions class with a new Object name .

export interface ShoppingListState{
  ingredients: Ingredient[];
}

const initialState : ShoppingListState = {

    ingredients  : [                         
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ]
}


export function shoppingListReducer(  
  state : ShoppingListState = initialState,
   action : ShoppingListActions.ShoppingListActions     // Calling with nested approach
   ) : ShoppingListState {     
    switch(action.type){          
      case ShoppingListActions.ADD_INGREDIENT :          // First Action
          return { 
            ...state   ,  
           ingredients: [ ...state.ingredients , action.payload ]         
         } ;  

         case ShoppingListActions.ADD_INGREDIENTS :      // Second Action
           return {
          ...state ,
          ingredients : [ ...state.ingredients , ...action.payload]
         }

         case ShoppingListActions.UPDATE_INGREDIENT:
         
         const ingredient = state.ingredients[action.payload.index] ;

         const updatedIngredient = {
             ...ingredient ,
             ...action.payload.ingredient
         };

         const udatedIngredients = [ ... state.ingredients];
         udatedIngredients[action.payload.index] = updatedIngredient ;

         return {
          ...state ,
          ingredients : udatedIngredients,
         }

         case ShoppingListActions.DELETE_INGREDIENT:

        //  const ingredient = state.ingredients[action.payload]

         return {
          ...state,
          ingredients : state.ingredients.filter(
            ( ig , igIndex ) => {
              return igIndex !== action.payload
            }
          )
         }
         
       default : {
        return  state;             
       }  
    }
    
}