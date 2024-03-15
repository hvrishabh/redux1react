import React, { useContext } from "react";

import { countContext } from "./App";

const CounterB = () => {
  const { countState, countDispatch } = useContext(countContext);
  // console.log(countState, countDispatch);

  return (
    <div>
      <div>CountB == {countState}</div>
      <button onClick={() => countDispatch("increment")}>Increment</button>
      <button onClick={() => countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default CounterB;
