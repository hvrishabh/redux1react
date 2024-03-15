import React from "react";

const Count = ({ text, count }) => {
  console.log("count", text, count);
  return (
    <div>
      {text}- {count}
    </div>
  );
};

export default React.memo(Count);
