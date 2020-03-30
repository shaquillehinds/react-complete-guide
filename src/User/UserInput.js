import React from "react";

const userInput = props => {
  const inputStyle = {
    boxShadow: "1px 1px 3px #999",
    border: "1px solid #999",
    borderRadius: "30px",
    padding: ".3rem .9rem"
  };

  return (
    <div>
      <input
        style={inputStyle}
        type="text"
        onChange={props.changeUserName}
        value={props.userName}
      />
    </div>
  );
};

export default userInput;
