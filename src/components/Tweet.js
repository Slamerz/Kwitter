import React, { Component } from "react";
import LikeButton from "./LikeButton";
import { domain } from "../actions/constants";
class Tweet extends Component {
  render() {
      const {tweet, author, likes, login, postLike} = this.props;
    if (tweet && author) {
      const avatarUrl = author.pictureLocation
        ? domain + author.pictureLocation
        : "https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png";
      const date = new Date(tweet.createdAt).toLocaleDateString();
      return (
        <div key={tweet.id} className="tweet">
          <img src={avatarUrl} className="avatar" alt="profile image" />
          <span className="displayName">{author.displayName}</span>
          <span className="username">@{author.username}</span>
          <span className="date">{date}</span>
          <p>{tweet.text}</p>
          <LikeButton messageId={tweet.id} likes={likes} login={login} postLike={postLike}/>
        </div>
      );
    } else {
      return <div />;
    }
  }
}
export default Tweet;
