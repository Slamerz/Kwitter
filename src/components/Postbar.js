import React, { Component } from "react";
import { Form, FormInput, FormGroup } from "shards-react";
import { createTweet } from "../actions";
import { connect } from "react-redux";
console.log(createTweet)

class PostBar extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault()
    this.props.createTweet(this.state.text);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="postbar">
        <FormGroup>
          <FormInput
            placeholder="What's Happening?"
            autoFocus
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <FormInput type="submit" />
        </FormGroup>
      </Form>
    );
  }
}

export default connect(
  null,
  { createTweet }
)(PostBar);
