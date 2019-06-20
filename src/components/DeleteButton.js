import React, { Component } from "react";
import { Button } from "shards-react";

class DeleteButton extends Component {
  render() {
    const { tweet, messageId, login, deleteActions } = this.props;
    console.log(messages)
    //this.deletePost = messages.find(tweet => tweet.messageId === login.id);
    return (
      <div>
        <a
          onClick={() =>
            this.delete
              ? deleteActions.delete(this.deletePost.id, login.token)
              : deleteActions.delete(messageId, login.token)
          }
        >
          <Button active={this.deletePost} pill outline theme="info">
          Delete
          </Button>
        </a>
      </div>
    );
  }
}

export default DeleteButton;
