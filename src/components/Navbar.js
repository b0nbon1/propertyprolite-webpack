import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  CardFooter
} from 'reactstrap';

import Signin from "./signin";
import Signup from "./Signup";
import Properties from './Property';

export class Navigation extends Component {
constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
    isOpen: false
  };
}
toggle() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}

render() {
  return (
      <Router>
      <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Property Pro Lite</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.props.isSignedIn || sessionStorage.getItem("token") ? (
              <Nav className="ml-auto" navbar data-test="signed-in">
                <NavItem>
                  <NavLink href="/about/" data-test="about">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/signin/"
                    onClick={() => sessionStorage.clear()}
                    data-test="sign-out"
                  >
                    Sign out
                  </NavLink>
                </NavItem>
              </Nav>
            ) : (
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/signin/">Sign In</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup/">Sign up</NavLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Navbar>
        <Route path="/" exact component={Properties} />
        <Route path="/signup/" exact component={Signup} />
        <Route path="/signin/" exact component={Signin} />
        <CardFooter 
        style={{
          position: 'fixed',
          width: '100%',
          bottom: 0
        }}
        className="text-muted footer"> &copy; <span>{new Date().getFullYear()}</span>  <a href='https://www.bonbo.io.ke'>Property pro lite</a>, Bonvic.inc</CardFooter>
  </Router>
  );
}
}

const mapStateToProps = state => ({
  isSignedIn: state.signin.isSignedIn
});

export default connect(mapStateToProps)(Navigation);