import React, { Component } from "react";
import NavBarComp from "./NavBarComp";
import ProfileCard from "./ProfileCard";
import Postbar from "./Postbar";
import UserList from "./UserList";
import Tweet from "./Tweet";

import { Container, Row, Col } from "shards-react";

export default class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarComp />
        <Container>
          <Row>
            <Col>
              <ProfileCard />
            </Col>
            <Col>
                <Row>
                    <Postbar />
                </Row>
                <Row>
                    <Tweet  
                        author={{ displayName: "display Name", username: "username" }}
                        message={{createdAt:"createdAt", text:"text" ,likes:[5,0,0,0]}}
                    />
                </Row>
            </Col>
            <Col>
              <UserList />
            </Col>
          </Row>
          <Row>
              <Col></Col>
            <Col xs={8}>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
