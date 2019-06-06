import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBarBut extends Component {
  render() {
    return (

          <NavLink exact to="/" activeClassName="selected">
            Home
          </NavLink>
    );
  }
}

export default NavBarBut;
