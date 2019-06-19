import React from "react";
import { Button } from "shards-react";

class LikeButton extends React.Component {
  render() {
    const { messageId, likes, login, likeActions } = this.props;
    this.doesLike = likes.find(like => like.userId === login.id);
    return (
      <div>
        <a
          onClick={() =>
            this.doesLike
              ? likeActions.delete(this.doesLike.id, login.token)
              : likeActions.post(messageId, login.token)
          }
        >
          <Button active={this.doesLike} pill outline theme="info">
            {likes.length}
          </Button>
        </a>
      </div>
    );
  }
}

export default LikeButton;
