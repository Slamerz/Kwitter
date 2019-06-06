import React, { Component } from "react";
import { Nav, NavBar, NavItem, NavLink} from "shards-react";

class NavBarContainer extends Component {
render() {
    return(
        <Navbar>
            <Navitem>
                <NavBarBut></NavBarBut>
            </Navitem>
        </Navbar>
    )
}
}

export default NavBarContainer