import React,{ Component } from 'react';
import NavBarComp from './NavBarComp';
import EditProfileCard from './EditProfileCard';
import { Container, Row, Col } from "shards-react";



export default class EditProfile extends Component{
    render(){
        return(
            <React.Fragment>
                <NavBarComp></NavBarComp>
                <Container>
                    <Row>
                        <Col></Col>
                <Col><EditProfileCard></EditProfileCard></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}