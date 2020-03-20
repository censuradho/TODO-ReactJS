import React, { memo } from "react";

import "./styles.css";

function Card(props) {
  return (
    <div className="card">
      <div className="header">
        <strong>{props.title}</strong>
      </div>
      <p>{props.body}</p>
    </div>
  );
}

export default memo(Card);
