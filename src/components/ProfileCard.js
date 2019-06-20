import React, { Component } from "react";
import { domain } from "../actions/constants/index";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";
import { Link } from "react-router-dom";

class ProfileCard extends Component {
  render() {
    if (this.props.user) {
      const {
        id,
        username,
        displayName,
        createdAt,
        pictureLocation
      } = this.props.user;
      const createDate = new Date(createdAt);
      const likes = this.props.tweets.reduce(
        (agr, tweet) => agr + tweet.likes.length,
        0
      );
      const avatarUrl = pictureLocation
        ? domain + pictureLocation
        : "https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png";
      return (
        <Card style={{ maxWidth: "300px" }}>
          <Link to={"/profile/" + id}>
            <CardHeader>{username}</CardHeader>
            <CardImg src={avatarUrl} style={{ maxHeight: "300px", maxWidth: "300px"}} />
          </Link>
          <CardBody>
            <Link to={"/profile/" + id}>
              <CardTitle>{displayName}</CardTitle>
            </Link>
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
