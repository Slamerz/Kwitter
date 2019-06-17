import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavLink, Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from "shards-react";
import NavBarBut from "./NavBarBut";
import SearchBar from "./SearchBar";


class NavBarComp extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { open: false };
  }

  toggle() {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  }

  render() {
    return (
      <Navbar className="navbar" theme="primary">
        <NavBarBut> Home </NavBarBut>
        <SearchBar />
        <NavBarBut>Go!</NavBarBut>
        <Dropdown open={this.state.open} toggle={this.toggle} className="d-table">
        <DropdownToggle> Settings </DropdownToggle>
        <DropdownMenu>
          <DropdownItem> Logout </DropdownItem>
          <DropdownItem> Edit Profile </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </Navbar>
    );
  }
}

export default NavBarComp;