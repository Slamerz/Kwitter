import React, { Component } from "react";
import NavBarComp from "./NavBarComp";
import ProCard from "../containers/ProCard";
import VisibleFeed from "../containers/VisibleFeed";
import PostBar from "./Postbar";

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <NavBarComp classname="navbar" />
        <div className="profilepage">
          <ProCard id={this.props.match.params.id} className="profile" />
          <PostBar className="postbar" />
          <VisibleFeed />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
