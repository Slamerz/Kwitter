import React, { Component } from "react";

class NavBarBut extends Component {
  render() {
    return (
      <ul className="buttons">
        <li>
          <NavLink exact to="/" activeClassName="selected">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/notifications" activeClassName="selected">
            Notifications
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default NavBarBut;
