import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavLink} from "shards-react";
import NavBarBut from "./NavBarBut";

class NavBarComp extends Component {
render() {
    return(
        <Navbar type="dark" theme="primary">
            <NavBarBut>            </NavBarBut>
            <NavBarBut>             </NavBarBut>
            {/* search bar */}
        </Navbar>
    )
}
}

export default NavBarComp;