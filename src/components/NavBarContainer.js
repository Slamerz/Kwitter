import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavLink} from "shards-react";
import NavBarBut from "./NavBarBut";

class NavBarContainer extends Component {
render() {
    return(
        <Navbar>
            <NavBarBut>            </NavBarBut>
            <NavBarBut>             </NavBarBut>
            {/* search bar */}
        </Navbar>
    )
}
}

export default NavBarContainer;