import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  Button,
  FormInput
} from "shards-react";
import { connect } from "react-redux";
import { updateProfile, updateProfilePicture } from "../actions";
import { domain } from "../actions/constants";

class EditProfileCard extends Component {
  state = { value: "" };

  handleUpdateProfile = event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    this.props.updateProfilePicture(formData);

    this.props.updateProfile(this.state.value);
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    const { username, pictureLocation } = this.props.users.find(
      user => user.id === this.props.login.id
    );
    const avatarUrl = pictureLocation
      ? domain + pictureLocation
      : "https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png";
    return (
      <Card style={{ maxWidth: "600px" }}>
        <CardHeader>{username}</CardHeader>
        <CardImg src={avatarUrl} />
        <CardBody>
          <CardTitle> choose Image:</CardTitle>
          <form onSubmit={this.handleUpdateProfile}>
            <FormInput type="file" name="picture" />
            <CardTitle> Edit DisplayName :</CardTitle>
            <FormInput
              placeholder="New display name"
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

const mapStateToProps = state => ({
  login: state.auth.login,
  loginLoading: state.auth.loginLoading,
  loginError: state.auth.loginError,
  users: state.users.users,
  usersLoading: state.users.loading,
  usersError: state.users.error
});

export default connect(
  mapStateToProps,
  { updateProfile, updateProfilePicture }
)(EditProfileCard);
