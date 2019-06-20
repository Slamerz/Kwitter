import React, { Component } from "react";
import { Button, Form, FormInput, FormGroup, Collapse } from "shards-react";
import { registerUser } from "../actions/users";


class CollapseLoginButton extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.toggle}>Register</Button>
        <Collapse open={this.state.collapse}>
          <div className="p-3 mt-3 border rounded">
            <Form onSubmit={registerUser}>
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
                  onChange={this.handleOnChange}
                  
                />
              </FormGroup>
              <FormGroup inline>
                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Enter your New Password"
                  onChange={this.handleOnChange}
                  
                />
              </FormGroup>
              <FormGroup inline>
                <FormInput
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  onChange={this.handleOnChange}
                  
                />
              </FormGroup>

              <FormGroup inline>
                <FormInput
                  name="displayName"
                  type="text"
                  label="Display Name"
                  placeholder="Choose a Displayname"
                  onChange={this.handleOnChange}
                  
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

export default CollapseLoginButton;
