import { Action } from "@ngrx/store";   
import { Ingredient } from "src/app/shared/ingredient.model";
import { ADD_INGREDIENT } from "./shopping-list.actions";           // import from the Action.ts

const initialState = {

    ingredients  : [                         
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ]
}


export function shoppingListReducer( state = initialState, action : Action)  {     
    switch(action.type){          
      case ADD_INGREDIENT :         // Use it in the case condition 
          return { 
            ...state   ,  // copy the old state with spred operator .
           ingredients: [ ...state.ingredients , action ]        // override the old state with spread operator with new action 

           } ;          
    }
}