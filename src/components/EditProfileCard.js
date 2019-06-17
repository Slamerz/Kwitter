import React, {Component}from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  FormInput
} from "shards-react";

export default class EditProfileCard extends Component { 
    state = { value: "" }


     handleUpdateprofile = (event) => {
         console.log (this.state.value)
         this.props.updateProfile(this.state.value)
        }
     handleChange = event => {
        this.setState({ value: event.target.value })
      }
    render(){

        return (
            <Card style={{ maxWidth: "300px" }}>
      <CardHeader>Username</CardHeader>
      <CardImg src="https://place-hold.it/300x200" />
      <CardBody>
        <CardTitle> Edit DisplayName :</CardTitle>
        <FormInput placeholder= "type in new displayname" 
        onChange ={this.handleChange}
        value= {this.state.value}/>
        <CardTitle>Edit bio:</CardTitle>


        <Button onClick={this.handleUpdateprofile}>Save &rarr;</Button>
      </CardBody>
    </Card>
  );
}
}
