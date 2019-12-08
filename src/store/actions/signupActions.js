import axios from "axios";

import { SIGN_UP, ERROR } from "./";

export const signUp = (data) => dispatch => {
  let userData = {
    firstname: data.firstName,
    lastname: data.lastName,
    address: data.address,
    phoneNumber: data.tel,
    email: data.email,
    password: data.password
  };
  axios
    .post("https://property-prolite2.herokuapp.com/api/v2/auth/signup", userData)
    .then(res => {
      dispatch({
        type: SIGN_UP,
        payload: res.data
      });
      sessionStorage.setItem("token", res.data.token);

    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err.toString()
      });
    });
};
