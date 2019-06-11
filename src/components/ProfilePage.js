import React, { Component } from "react";
import NavBarComp from "./NavBarComp";
import Feed from "./Feed";
import ProfileCard from "./ProfileCard";
import PostBar from "./Postbar";

const fillerTweets = {
  messages: [
    {
      id: 0,
      text: "This is the 0 tweet here",
      userId: 0,
      createdAt: "2019-06-07T14:00:17.123Z",
      likes: [
        {
          id: 0,
          userId: 0,
          messageId: 0,
          createdAt: "2019-06-07T14:00:17.123Z"
        }
      ]
    },
    {
      id: 1,
      text: "string",
      userId: 0,
      createdAt: "2019-07-07T14:00:17.123Z",
      likes: [
        {
          id: 0,
          userId: 0,
          messageId: 1,
          createdAt: "2019-08-07T14:00:17.123Z"
        },
        {
          id: 1,
          userId: 0,
          messageId: 1,
          createdAt: "2019-08-07T14:00:17.123Z"
        },
        {
          id: 2,
          userId: 0,
          messageId: 1,
          createdAt: "2019-08-07T14:00:17.123Z"
        }
      ]
    }
  ],
  statusCode: 0
};

const fillerUsers = {
  users: [
    {
      id: 0,
      username: "JohnSnow69",
      displayName: "John Snow",
      about: "string",
      createdAt: "2019-06-07T14:59:58.258Z",
      updatedAt: "2019-06-07T14:59:58.258Z"
    }
  ],
  statusCode: 0
};

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
