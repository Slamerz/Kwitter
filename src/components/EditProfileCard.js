import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  FormInput,
} from "shards-react";
import { connect } from 'react-redux'
import { updateProfile, updateProfilePicture } from '../actions'

class EditProfileCard extends Component {
  state = { value: "" };

  handleUpdateProfile = event => {
    event.preventDefault()

    const formData = new FormData(event.target)
    this.props.updateProfilePicture(formData)

    this.props.updateProfile(this.state.value);
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <Card style={{ maxWidth: "300px" }}>
        <CardHeader>Username</CardHeader>
        <CardImg src="https://place-hold.it/300x200" />
        <CardBody>
        <CardTitle> choose Image:</CardTitle>

          <form onSubmit={this.handleUpdateProfile}>
            <FormInput
              type="file"
              name="picture"
              />
              <CardTitle> Edit DisplayName :</CardTitle>
            <FormInput
              placeholder="type in new displayname"
              onChange={this.handleChange}
              value={this.state.value}
            />
            <Button type="submit">Save &rarr;</Button>
          </form>

        </CardBody>
      </Card>
    );
  }
}

export default connect(
  null,
  { updateProfile, updateProfilePicture }
)(EditProfileCard)