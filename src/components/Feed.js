import React, { Component } from "react";
import Tweet from "./Tweet";

class Feed extends Component {
  render() {
      this.tweets = this.props.tweets.map(tweet => {
        const author = this.props.users.filter(user => user.id === tweet.userId)[0];
        const currentTweet = <Tweet key={tweet.id} tweet={tweet} author={author}/>;
        if(!this.props.filterId)
          return currentTweet;

        if(tweet.userId === +this.props.filterId)
          return currentTweet;
          
      });
      return <div style={{width: "100%"}}>{this.tweets}</div>;
  }
}

export default Feed;
