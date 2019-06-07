import React, { Component } from "react";

class PostBar extends Component {
  render() {
    return (
      <section className="Postbar">
        <input
          className="new-post"
          placeholder="What's Happening?"
          autoFocus
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
      </section>
    );
  }
}

export default PostBar;
