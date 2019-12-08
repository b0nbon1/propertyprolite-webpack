import { LOADING } from "./";

export const loadingAction = () => dispatch => {
  dispatch({
    type: LOADING
  });
};
