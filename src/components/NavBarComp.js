import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavLink } from "shards-react";
import NavBarBut from "./NavBarBut";
import SearchBar from "./SearchBar";

class NavBarComp extends Component {
  render() {
    return (
      <Navbar className="navbar" theme="primary">
        <NavBarBut> Home </NavBarBut>
        <NavBarBut> Notification </NavBarBut>
        <SearchBar />
      </Navbar>
    );
  }
}

export default NavBarComp;
