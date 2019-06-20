import React, { Component } from "react";
import Tweet from "./Tweet";

class Feed extends Component {
  render() {
    const { tweets, users, likes, login, likeActions } = this.props;
    this.tweets = tweets.map(tweet => {
      const author = users.filter(user => user.id === tweet.userId)[0];
      this.likes = likes.filter(like => like.messageId === tweet.id);
      return (
        <Tweet
          key={tweet.id}
          tweet={tweet}
          author={author}
          likes={this.likes}
          login={login}
          likeActions={likeActions}
        />
      );
    });

    return <div>{this.tweets}</div>;
  }
}

export default Feed;
