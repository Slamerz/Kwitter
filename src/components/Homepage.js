import React, { Component } from "react";
import NavBarComp from "./NavBarComp";
import Postbar from "../containers/Postbar";
import { Container, Row, Col } from "shards-react";
import VisibleFeed from "../containers/VisibleFeed";
import Users from "../containers/Users";
import ProCard from "../containers/ProCard";

export default class Homepage extends Component {
  render() {
      const filterString = this.props.match.params.filter;
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
                <Row>
                    <VisibleFeed filterString={filterString}/>
                </Row>
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
