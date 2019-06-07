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

export default function ProfileCard() {
  return (
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>Username</CardHeader>
      <CardImg src="https://place-hold.it/300x200" />
      <CardBody>
        <CardTitle>DisplayName</CardTitle>
        <p>Bio</p>
        <Button>Tweets &rarr;</Button>
      </CardBody>
      <CardFooter>Likes</CardFooter>
    </Card>
  );
}
