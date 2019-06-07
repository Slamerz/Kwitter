import React, { Component } from "react";
import LikeButton from "./LikeButton";
//TODO replace img tag with profile picture object once it's complete.
class Tweet extends Component {
  render() {
    return (
      <div key={this.props.key}>
        <img
          src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png"/>
        <span>{this.props.author.displayName}</span>
        <span>{this.props.author.username}</span>
        <span>{this.props.message.createdAt}</span>
        <p>{this.props.message.text}</p>
        <LikeButton>{this.props.message.likes.length}</LikeButton>
      </div>
    );
  }
}
export default Tweet;
