import React, { Component } from "react";
import LikeButton from "./LikeButton";
import { domain } from "../actions/constants";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

class Tweet extends Component {
  render() {
    const {
      tweet,
      author,
      likes,
      login,
      likeActions,
      deleteTweetAction
    } = this.props;
    if (tweet && author) {
      const avatarUrl = author.pictureLocation
        ? domain + author.pictureLocation
        : "https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png";
      const date = new Date(tweet.createdAt).toLocaleDateString();
      const deleteButton =
        tweet.userId === login.id ? (
          <DeleteButton
            messageId={tweet.id}
            login={login}
            deleteTweetAction={deleteTweetAction}
          />
        ) : (
          <span />
        );
      return (
        <div key={tweet.id} className="tweet">
        <span className="tweetHeader">
            <img src={avatarUrl} className="avatar" alt="profile image" />
            <Link to={"/profile/" + author.id}>
            <span className="displayName">{author.displayName}</span>
            <span className="username">@{author.username}</span>
          </Link>
          <span className="date">{date}</span>
            {deleteButton}
          </span>
          <p>{tweet.text}</p>
          <LikeButton
            messageId={tweet.id}
            likes={likes}
            login={login}
            likeActions={likeActions}
          />
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Tweet;
