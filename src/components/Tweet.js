import React, { Component } from "react";
import LikeButton from "./LikeButton";
//TODO replace img tag with profile picture object once it's complete.
class Tweet extends Component {
  render() {
    return (
      <div key={this.props.key} className="tweet">
        <img
          src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png"
          className="avatar"
        />
        <span className="displayName">{this.props.author.displayName}</span>
        <span className="username">{this.props.author.username}</span>
        <span className="date">{this.props.message.createdAt}</span>
        <p>{this.props.message.text}</p>
        <LikeButton>{this.props.message.likes.length}</LikeButton>
      </div>
    );
  }
}
export default Tweet;
