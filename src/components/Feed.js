import React, { Component } from "react";
import Tweet from "./Tweet";

class Feed extends Component {
  render() {
    this.tweets = this.props.tweets.messages.map((item, index) => {
      const author = this.props.users.users.filter(
        user => user.id === item.userId
      )[0];
      return <Tweet key={index} message={item} author={author} />;
    });

    return <div>{this.tweets}</div>;
  }
}

export default Feed;
