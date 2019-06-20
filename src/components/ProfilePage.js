import React, { Component } from "react";
import NavBarComp from "./NavBarComp";
import ProCard from "../containers/ProCard";
import VisibleFeed from "../containers/VisibleFeed";
import Postbar from "../containers/Postbar";
import { Col, Container, Row } from "shards-react";
import Users from "../containers/Users";

class ProfilePage extends Component {
  render() {
    const profileId = this.props.match.params.id;
    return (
      <React.Fragment>
        <NavBarComp />
        <Container>
          <Row>
            <Col>
              <ProCard id={profileId} />
            </Col>
            <Col>
              <Row>
                <Postbar />
              </Row>
              <Row><VisibleFeed filterId={profileId}/></Row>
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
