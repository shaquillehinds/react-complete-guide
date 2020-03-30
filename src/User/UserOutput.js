import React from "react";
import "./UserOutput.css";

const userOutput = props => {
  return (
    <div>
      <p className="pstyling">Username: {props.userName}</p>
      <p className="pstyling">I'm just a random user so whatever.</p>
    </div>
  );
};

export default userOutput;
