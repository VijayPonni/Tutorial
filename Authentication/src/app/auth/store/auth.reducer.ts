import { User } from "../user.model";
import * as AuthActions from '../store/auth.actions'
import { Action } from "rxjs/internal/scheduler/Action";

export interface State {
    user : User | any ,
    authError : String | any ,
    loading : boolean
}

const initialState : State  = {
    user : null ,
    authError: null,
    loading:false
}

export function AuthReducer ( state =initialState , action: AuthActions.AuthActions) {
  console.log(state);
  
  switch(action.type){

    case AuthActions.LOGIN:
      const user = new User(
         action.payload.email,
         action.payload.userId,
         action.payload.token,
         action.payload.expirationDate
      )
      return {
        ...state ,
        authError : null,
        user : user,
        loading : false
      }

      case AuthActions.LOGOUT:
        return {
          ...state ,
          user : null
        }

        case AuthActions.LOGIN_START:
          return {
            ...state,
            authError:null,
            loading:true
          }

        case AuthActions.LOGIN_FAIL:
          return{
            ...state,
            user:null,
           authError : action.payload,
           loading:false
          }

        default:
          return state;
  }

}