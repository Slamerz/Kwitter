import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

class ProfileCard extends Component {
  render() {
    if (this.props.user) {
      const { id, username, displayName, createdAt } = this.props.user;
      const createDate = new Date(createdAt);
      const likes = this.props.tweets.reduce((agr, tweet) => agr + tweet.likes.length,0);
      return (
        <Card style={{ maxWidth: "300px" }}>
          <CardHeader>{username}</CardHeader>
          <CardImg src="https://place-hold.it/300x200" />
          <CardBody>
            <CardTitle>{displayName}</CardTitle>
            <p>Joined {createDate.toDateString()}</p>
            <Button>Tweets {this.props.tweets.length}</Button>
          </CardBody>
          <CardFooter>Likes {likes}</CardFooter>
        </Card>
      );
    } else {
      return <div />;
    }
  }
}

export default ProfileCard;
