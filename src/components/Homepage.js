import React, { Component } from "react";
import NavBarComp from "./NavBarComp";
import ProfileCard from "./ProfileCard";
import Postbar from "../containers/Postbar";
import { Container, Row, Col } from "shards-react";
import VisibleFeed from "../containers/VisibleFeed";
import Users from "../containers/Users";
import ProCard from "../containers/ProCard";

export default class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarComp />
        <Container>
          <Row>
            <Col>
              <ProCard/>
            </Col>
            <Col>
                <Row>
                    <Postbar />
                </Row>
                <Row>
                    <VisibleFeed />
                </Row>
            </Col>
            <Col>
              <Users />
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
