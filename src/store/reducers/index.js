import { combineReducers } from "redux";
import userReducers from './userReducers';
import { createForms } from "react-redux-form";
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  ...createForms({
    signin: userReducers,
    signup: userReducers,
  })
});
