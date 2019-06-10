import React, { Component } from "react";
import Username from "./Username";

class UserList extends Component {
  render() {
    let usersArray= []
    const users = usersArray.map((user, key) => (
      <Username user={user} key={key} />
    ));
    return <div className="userlist">{users}</div>;
  }
}
export default UserList;
