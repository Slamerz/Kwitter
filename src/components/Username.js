import React from "react";
import { Button } from "shards-react";
import { Nav, NavItem, NavLink } from "shards-react";

const Username = props => (
  <Button pill outline theme="info">
    {props.children}
    <Nav>
      <NavItem>
        <NavLink href="this.props.users">@Username</NavLink>
      </NavItem>
    </Nav>
  </Button>
);
export default Username;
