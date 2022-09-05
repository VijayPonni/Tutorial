import { Ingredient } from "src/app/shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";          // import the whole Actions class with a new Object name .

export interface State{
  ingredients: Ingredient[];
  editedIngredient :Ingredient | any;
  editedIngredientIndex : number ;
}

const initialState : State = {

    ingredients  : [                         
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ],
    editedIngredient : null ,
    editedIngredientIndex : -1
  
}

export function shoppingListReducer(  
  state : State = initialState ,
   action : ShoppingListActions.ShoppingListActions     // Calling with nested approach
   )  {     
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
         
         const ingredient = state.ingredients[state.editedIngredientIndex] ;

         const updatedIngredient = {
             ...ingredient ,
             ...action.payload
         };

         const udatedIngredients = [ ... state.ingredients];
         udatedIngredients[state.editedIngredientIndex] = updatedIngredient ;

         return {
          ...state ,
          ingredients : udatedIngredients,
          editedIngredientIndex : -1,
          editedIngredient:null
         }

         case ShoppingListActions.DELETE_INGREDIENT:

        //  const ingredient = state.ingredients[action.payload]

         return {
          ...state,
          ingredients : state.ingredients.filter(
            ( ig , igIndex ) => {
              return igIndex !== state.editedIngredientIndex
            }
          ),
          editedIngredientIndex:-1,
          editedIngredient:null
         }

         case ShoppingListActions.START_EDIT:
          return {
            ...state ,
            editedIngredientIndex : action.payload ,
            editedIngredient : { ...state.ingredients[action.payload] }
          }
         case ShoppingListActions.STOP_EDIT:
          return {
            ...state ,
            editedIngredient : null,
            editedIngredientIndex: -1,
          }

       default : {
        return  state;             
       }  
    }
    
}