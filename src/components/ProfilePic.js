import React, { Component } from "react";


class ProfilePic extends Component {
    state={
        users: {}

    }
  render() {
    return (
      <div>
        <img
        class="profile-pic"
        src={this.props.userId}
        />
      </div>
    );
  }
}
export default ProfilePic;
