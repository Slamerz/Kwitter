import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavLink } from "shards-react";
import NavBarBut from "./NavBarBut";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";

class NavBarComp extends Component {
  render() {
    return (
      <Navbar className="navbar" theme="primary">
          <Link to='/homepage'><NavBarBut> Home </NavBarBut></Link>
        <NavBarBut> Notification </NavBarBut>
        <SearchBar />
      </Navbar>
    );
  }
}

export default NavBarComp;
