import React, { Component } from "react";
import NavBarComp from "./NavBarComp";
import Feed from "./Feed";
import ProfileCard from "./ProfileCard";
import PostBar from "./Postbar";

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <NavBarComp classname="navbar" />
        <div className="profilepage">
          <ProfileCard className="profile" />
          <PostBar className="postbar" />
          <Feed tweets={fillerTweets} users={fillerUsers} />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
