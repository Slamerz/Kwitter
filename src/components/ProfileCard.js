import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";
import {placeholderAvatar} from "../actions/constants";

class ProfileCard extends React.Component {
  render() {
    if (this.props.user) {
      const user = this.props.user;
      let avatarUrl = placeholderAvatar;
      if(user.pictureLocation)
          avatarUrl = `https://kwitter-api.herokuapp.com/users/${user.id}/picture`;
      return (
        <Card style={{ maxWidth: "300px"}}>
          <CardHeader>@{user.username}</CardHeader>
          <CardImg src={avatarUrl} style={{height: "300px"}}/>
          <CardBody>
            <CardTitle>{user.displayName}</CardTitle>
            <p>{user.about}</p>
            <Button>Tweets &rarr;</Button>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      );
    } else return <div />;
  }
}

export default ProfileCard;
