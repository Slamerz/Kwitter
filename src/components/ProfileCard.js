import React, { Component } from "react";
import {domain} from "../actions/constants/index"
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
      const { id, username, displayName, createdAt, pictureLocation } = this.props.user;
      const createDate = new Date(createdAt);
      const likes = this.props.tweets.reduce((agr, tweet) => agr + tweet.likes.length,0);
      const avatarUrl = pictureLocation
        ? domain + pictureLocation
        : "https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png";
      return (
        <Card style={{ maxWidth: "300px" }}>
          <CardHeader>{username}</CardHeader>
          <CardImg src={avatarUrl}/>
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
