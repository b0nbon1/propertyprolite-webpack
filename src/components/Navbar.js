import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  AppBar, makeStyles, Toolbar, Typography, MenuIcon, IconButton, Button, createMuiTheme, ThemeProvider
} from '../common/materialUI';

// import Signin from "./signin";
// import Signup from "./Signup";
// import Properties from './Property';

export class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
       <AppBar position="relative">
        <Toolbar>
        {/* {this.props.isSignedIn || sessionStorage.getItem("token") ? (
              
            ) : (

            )} */}
        </Toolbar>
      </AppBar>
    )
  }
}

export default Navigation;