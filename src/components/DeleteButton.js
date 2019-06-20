import React, { Component } from "react";
import { Button } from "shards-react";

class DeleteButton extends Component {
  render() {
    const { messageId, deleteTweetAction } = this.props;
    return (
      <div>
        <a
          onClick={() => deleteTweetAction(messageId)}
        >
          <Button  pill outline theme="info">
          Delete
          </Button>
        </a>
      </div>
    );
  }
}

export default DeleteButton;
