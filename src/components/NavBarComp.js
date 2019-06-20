import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavLink, Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Button } from "shards-react";
import NavBarBut from "./NavBarBut";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";
import { logoutThenGoToLogin as logout } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";



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
    console.log(this.props.dispatch)
    return (
      <Navbar className="navbar">
        <Button tag={Link} to="/homepage"> Home </Button>
        <SearchBar />
        <NavBarBut>Go!</NavBarBut>
        <Dropdown open={this.state.open} toggle={this.toggle} className="d-table">
        <DropdownToggle> Settings </DropdownToggle>
        <DropdownMenu>
            <DropdownItem onClick={() => this.props.logout()}> Logout </DropdownItem>
          <DropdownItem tag={Link} to="/edit-profile"> Edit Profile </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </Navbar>
    );
  }
}

const mapDispatchToProps = {
    logout,
} 

// export default NavBarComp;
export default connect(null, mapDispatchToProps)(NavBarComp);