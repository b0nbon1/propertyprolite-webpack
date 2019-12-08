import axios from "axios";

import { FETCH_PROPERTIES, ERROR } from "./";

export const fetchProperties = () => dispatch => {
  axios
    .get("https://property-prolite2.herokuapp.com/api/v2/properties")
    .then(res => {
      const properties = res.data.data;
      dispatch({
        type: FETCH_PROPERTIES,
        payload: properties
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });
};