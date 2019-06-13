import React from "react";
import { Button } from "shards-react";
import { Nav, NavItem, NavLink } from "shards-react";

const Username = props => (
  <Button pill outline theme="info" className="usernamebutton">
    <Nav>
      <NavItem>
        <NavLink>@{props.user.username}</NavLink>
      </NavItem>
    </Nav>
  </Button>
);
export default Username;
