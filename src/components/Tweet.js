import React, { Component } from "react";
import LikeButton from "./LikeButton";
import { domain } from "../actions/constants";
class Tweet extends Component {
  render() {
    if (this.props.tweet && this.props.author) {
      const avatarUrl = this.props.author.pictureLocation
        ? domain + this.props.author.pictureLocation
        : "https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png";
      const date = new Date(this.props.tweet.createdAt).toLocaleDateString();
      return (
        <div key={this.props.tweet.id} className="tweet">
          <img src={avatarUrl} className="avatar" alt="profile image" />
          <span className="displayName">{this.props.author.displayName}</span>
          <span className="username">@{this.props.author.username}</span>
          <span className="date">{date}</span>
          <p>{this.props.tweet.text}</p>
          <LikeButton>{this.props.tweet.likes.length}</LikeButton>
        </div>
      );
    }
  }
}
export default Tweet;
