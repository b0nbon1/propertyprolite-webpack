const defaultUser =  {
  islogged: false
} 

import { SIGN_UP, SIGN_IN } from '../actions/index.js'

export default (state = defaultUser, action)=>{
    switch(action.type){
        case SIGN_UP:     
        return {
          ...state,
          islogged: true
        }
        case SIGN_IN:
          return {
            ...state,
            islogged: true
          }
    default:
        return state
    }
}
