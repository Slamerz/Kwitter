import React, { Component } from "react";
import NavBarComp from "./NavBarComp";
import Postbar from "./Postbar";
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
              <ProCard />
            </Col>
            <Col>
              <Row>
                <Postbar />
              </Row>
              <Row>{<VisibleFeed />}</Row>
            </Col>
            <Col>
              <Users />
            </Col>
          </Row>
          <Row>
            <Col />
            <Col xs={8} />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
