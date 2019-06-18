import React, { Component } from "react";
import Tweet from "./Tweet";

class Feed extends Component {
  render() {
    this.tweets = this.props.tweets.map(tweet => {
      const author = this.props.users.filter(
        user => user.id === tweet.userId
      )[0];
      return <Tweet key={tweet.id} tweet={tweet} author={author} />;
    });

    return <div>{this.tweets}</div>;
  }
}

export default Feed;
