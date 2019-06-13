import React, { Component } from "react";
import LikeButton from "./LikeButton";
import {domain, placeholderAvatar} from "../actions/constants";
import {Link} from "react-router-dom";

class Tweet extends Component {
  render() {
      let avatar = placeholderAvatar;
      let date = "";
      console.log(this.props.author);
      if(this.props.author.pictureLocation){
          avatar = domain + this.props.author.pictureLocation;
      }
      if(this.props.tweet)
          date = new Date(this.props.tweet.createdAt);

    return (
      <div key={this.props.tweet.id} className="tweet">
          <Link to={'/profile/'+ this.props.author.id}>
        <img
          src={avatar}
          className="avatar"
          alt="profile image"
        />
        <span className="displayName">{this.props.author.displayName}</span>
        <span className="username">{this.props.author.username}</span>
          </Link>
          <span className="date">{date.toDateString()}</span>
        <p>{this.props.tweet.text}</p>
        <LikeButton>{this.props.tweet.likes.length}</LikeButton>
      </div>
    );
  }
}
export default Tweet;
