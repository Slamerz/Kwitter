import React, { Component } from "react";

class ProfilePic extends Component {
  render() {
    return (
      <div>
        <img class="profile-pic" src={this.props.src} />
      </div>
    );
  }
}
export default ProfilePic;
