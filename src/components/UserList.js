import React, { Component } from "react";
import Username from "./Username";

class UserList extends Component {
    render() {
        const users = this.props.users.map((user, key) => <Username user={user} key={key}/>);
        return (
            <div className="userlist">
                {users}
            </div>
        );
    }
}
export default UserList;