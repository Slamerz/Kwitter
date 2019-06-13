import React, { Component } from "react";
import NavBarComp from "./NavBarComp";
import ProfileCard from "../containers/VisibleProfileCard";
import Postbar from "./Postbar";

import { Container, Row, Col } from "shards-react";
import VisibleFeed from "../containers/VisibleFeed";
import Users from "../containers/Users";

export default class ProfilePage extends Component {
    render() {
        const id =this.props.match.params.id;
        return (
            <React.Fragment>
                <NavBarComp />
                <Container>
                    <Row>
                        <Col>
                            <ProfileCard id={id}/>
                        </Col>
                        <Col>
                            <Row>
                                <Postbar />
                            </Row>
                            <Row>
                                <VisibleFeed id={id}/>
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
