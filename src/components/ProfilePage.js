import React, { Component } from "react";
import NavBarComp from "./NavBarComp";
import ProCard from "../containers/ProCard";
import VisibleFeed from "../containers/VisibleFeed";
import Postbar from "./Postbar";
import { Col, Container, Row } from "shards-react";
import Users from "../containers/Users";

class ProfilePage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarComp />
        <Container>
          <Row>
            <Col>
              <ProCard id={this.props.match.params.id} />
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

export default ProfilePage;
