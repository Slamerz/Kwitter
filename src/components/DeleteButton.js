import React, { Component } from "react";
import { Button } from "shards-react";

class DeleteButton extends Component {
  render() {
    const { messageId, deleteTweetAction } = this.props;
    return (
      <span>
        <a
          className="deleteButton"
          onClick={() => deleteTweetAction(messageId)}
        >
          <img
            alt="deleteButton"
            src="https://docs.qgis.org/2.14/ro/_images/mActionDeleteSelected.png"
          />
        </a>
      </span>
    );
  }
}

export default DeleteButton;
