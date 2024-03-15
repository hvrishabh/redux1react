import React, { useEffect, useRef } from "react";

const FoucsInput = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    // foucs the input element
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default FoucsInput;
