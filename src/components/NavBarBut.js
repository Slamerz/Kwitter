import React, { Component } from "react";
import { Nav, NavItem, NavLink, Button } from "shards-react";

class NavBarBut extends Component {
  render() {
    return (
      <Nav>
        <NavItem>
          <NavLink activehref="/">
            <Button className="button" theme="success">{this.props.children}</Button>
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}

export default NavBarBut;
