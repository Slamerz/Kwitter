import React, { Component } from "react";
import { Button, Form, FormInput, FormGroup, Collapse } from "shards-react";
import { registerUser } from "../actions/users";
import { connect } from 'react-redux'


class CollapseLoginButton extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRegister = e => {
    e.preventDefault()
    this.props.registerUser({
      username: this.state.username,
      password: this.state.password,
      displayName: this.state.displayName
    })
  }

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.toggle}>Register</Button>
        <Collapse open={this.state.collapse}>
          <div className="p-3 mt-3 border rounded">
            <Form onSubmit={this.handleRegister}>
              <br />
              <label color="Yellow">New user? Register here.</label>
              <br />
              <br />
              <FormGroup inline>
                <FormInput
                  name="username"
                  type="text"
                  label="Username"
                  placeholder="Enter your New Username"
                  onChange={this.handleChange}
                  
                />
              </FormGroup>
              <FormGroup inline>
                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Enter your New Password"
                  onChange={this.handleChange}
                  
                />
              </FormGroup>
              <FormGroup inline>
                <FormInput
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  
                />
              </FormGroup>

              <FormGroup inline>
                <FormInput
                  name="displayName"
                  type="text"
                  label="Display Name"
                  placeholder="Choose a Displayname"
                  onChange={this.handleChange}
                  
                />
              </FormGroup>
              <br />
              <Button type="submit" color="teal">
                Signup
              </Button>
              <br />
            </Form>
          </div>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { registerUser }
)(CollapseLoginButton)
