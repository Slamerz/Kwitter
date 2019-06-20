import React, { Component } from "react";
import LikeButton from "./LikeButton";
import { domain } from "../actions/constants";
import DeleteButton from "./DeleteButton";

class Tweet extends Component {
  render() {
    const { tweet, author, likes, login, likeActions, deleteActions } = this.props;
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
          <LikeButton
            messageId={tweet.id}
            likes={likes}
            login={login}
            likeActions={likeActions}
          />
          <DeleteButton
            messageId={tweet.id}
            login={login}
            deleteActions={deleteActions}
            />
        </div>
      );
    } else {
      return <div />;
    }
    return(
      <div></div>
    )
  }
}

export default Tweet;