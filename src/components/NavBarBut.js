import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBarBut extends Component {
  render() {
    return (
      <NavLink exact to="/" activeClassName="selected">
        //Placeholder
      </NavLink>
    );
  }
}

export default NavBarBut;