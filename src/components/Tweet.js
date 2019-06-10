import React, { Component } from "react";
import LikeButton from "./LikeButton";
//TODO replace img tag with profile picture object once it's complete.
class Tweet extends Component {
  render() {
    return (
      <div key={this.props.tweet.id} className="tweet">
        <img
          src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png"
          className="avatar"
        />
        <span className="displayName">{this.props.author.displayName}</span>
        <span className="username">{this.props.author.username}</span>
        <span className="date">{this.props.tweet.createdAt}</span>
        <p>{this.props.tweet.text}</p>
        <LikeButton>{this.props.tweet.likes.length}</LikeButton>
      </div>
    );
  }
}
export default Tweet;
