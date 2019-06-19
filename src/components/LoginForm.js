import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import Spinner from "react-spinkit";
import CollapseLoginButton from "./CollapseLoginButton";

class LoginForm extends Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <React.Fragment>
        <div class="loginformholder">
          <h1 class="loginheader">LOGIN</h1>
          <form onSubmit={this.handleLogin}>
            <label class="userlabel" htmlFor="username">
              Username: &nbsp;
            </label>
            <input
              class="inputlogin"
              type="text"
              name="username"
              placeholder="Enter your username"
              autoFocus
              required
              onChange={this.handleChange}
            />
            <br />
            <label class="userlabel" htmlFor="password">
              Password: &nbsp;
            </label>
            <input
              class="inputlogin"
              type="password"
              name="password"
              required
              onChange={this.handleChange}
            />
            <br />
            <button class="loginbutton" type="submit" disabled={isLoading}>
              Login
            </button>
            <br />
            <br />
            <div class="registerbutton">
            <CollapseLoginButton />
            </div>
          </form>
        </div>
        {isLoading && <Spinner name="circle" color="blue" />}
        {err && <p style={{ color: "red" }}>{err}</p>}
      </React.Fragment>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError
  }),
  { login }
)(LoginForm);
