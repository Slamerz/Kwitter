import React, { Component } from "react";
import NavBarComp from "./NavBarComp";
import ProfileCard from "./ProfileCard";
import Postbar from "./Postbar";
import UserList from "./UserList";
import Feed from "./Feed";

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
                    {/* <Feed></Feed> */}
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
