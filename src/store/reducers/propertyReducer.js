import { FETCH_PROPERTIES, ERROR } from "../actions/";

const initialState = {
  properties: [],
  error: null,
  loading: true
};

export default function(state = initialState, action) {
  if (action.type === FETCH_PROPERTIES) {
    return {
      ...state,
      properties: action.payload,
      loading: false
    };
  } else if (action.type === ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  } else {
    return state;
  }
}
