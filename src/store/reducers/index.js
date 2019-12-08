import { combineReducers } from "redux";
import userReducers from './userReducers';
import { createForms } from "react-redux-form";
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import propertiesReducer from './propertyReducers';

export default combineReducers({
  properties: propertiesReducer,
  loading: loadingReducer,
  error: errorReducer,
  ...createForms({
    signin: userReducers
  })
});
