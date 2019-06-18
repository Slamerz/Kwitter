import React from "react";
import { Button } from "shards-react";

const LikeButton = props => (
  <Button pill outline theme="info">
    {props.children}
  </Button>
);

export default LikeButton;
