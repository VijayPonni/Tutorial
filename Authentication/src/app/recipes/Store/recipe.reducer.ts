import { Recipe } from "../recipe.model";
import * as RecipesAction from '../Store/recipe.actions'

export interface state{
    recipes : Recipe[] ;
}

const initialState : state = {
    recipes : []
}



export function RecipeReducer(state: state = initialState , action : RecipesAction.RecipesActions ) {
    switch(action.type){
        case RecipesAction.SET_RECIPES:
            return {
                ...state,
                recipes : [ ...action.payload ] 
            };
        case RecipesAction.ADD_RECIPE:
            return {
                ...state,
                recipes : [ ...state.recipes , action.payload ]
            }
        case RecipesAction.UPDATE_RECIPE:

        const updatedRecipe = { 
            ...state.recipes[action.payload.index],
            ...action.payload.newRecipe    
        }

        const updatedRecipes = [...state.recipes];
        updatedRecipes[action.payload.index] = updatedRecipe;

            return {
                ...state ,
                recipes : updatedRecipes
            }

        case RecipesAction.DELETE_RECIPE:
            return {
                ...state,
                recipes: state.recipes.filter( (recipe , index ) => {
                   return index !== action.payload;
                })
            }
        default :
        return {
            state
        }    
    }
}