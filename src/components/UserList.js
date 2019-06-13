import React, { Component } from "react";
import Username from "./Username";
import {Link} from "react-router-dom";

class UserList extends Component {
  render() {
    const users = this.props.users.map((user, key) => {
      if(key <=10)
        return <Link to={"/profile/" + user.id}><Username user={user} key={key} /></Link>
      });
    return <div className="userlist"><p>People you may know.</p>{users}</div>;
  }
}
export default UserList;
