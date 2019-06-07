import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "shards-react";

class NavBarBut extends Component {
  render() {
    return (
      <Nav>
        <NavItem>
          <NavLink activehref="/">//Something</NavLink>
        </NavItem>
      </Nav>
    );
  }
}

export default NavBarBut;
