import React from "react";

const User = ({ data }) => {
  return (
    <div>
      <h1>User component</h1>
      <h4>{data.name}</h4>
      <h4>{data.age}</h4>
    </div>
  );
};

export default User;
