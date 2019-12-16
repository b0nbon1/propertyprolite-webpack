import { combineReducers } from "redux";
import userReducers from './userReducer';
import { createForms } from "react-redux-form";
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import propertiesReducer from './propertyReducer';

export default combineReducers({
  properties: propertiesReducer,
  loading: loadingReducer,
  error: errorReducer,
  ...createForms({
    signin: userReducers
  })
});
