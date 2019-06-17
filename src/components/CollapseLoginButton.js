import React, { Component } from "react";
import { Button, Form, FormInput, FormGroup, Collapse } from "shards-react";
// import Collapse from "shards-react/collapse";
// import Form  from "shards-react";

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
        <Button onClick={this.toggle}>Toggle</Button>
        <Collapse open={this.state.collapse}>
          <div className="p-3 mt-3 border rounded">
            <Form onSubmit={this.handleOnSubmit}>
              <br />
              <label color="yellow">New user? Register here.</label>
              <br />
              <br />
              <FormGroup inline>
                <FormInput
                  name="username"
                  type="text"
                  label="Username"
                  onChange={this.handleOnChange}
                  // value={this.state.userDetails.username} autoFocus
                />
              </FormGroup>
              <FormGroup inline>
                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  onChange={this.handleOnChange}
                  // value={this.state.userDetails.password}
                />
              </FormGroup>
              <FormGroup inline>
                <FormInput
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  onChange={this.handleOnChange}
                  // value={this.state.userDetails.confirmPassword}
                />
              </FormGroup>

              <FormGroup inline>
                <FormInput
                  name="displayName"
                  type="text"
                  label="Display Name"
                  onChange={this.handleOnChange}
                  // value={this.state.userDetails.displayName}
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
