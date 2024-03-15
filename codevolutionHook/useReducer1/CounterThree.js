import React from "react";
import { useReducer } from "react";

const initialState = 0;
const reducer = (cState, action) => {
  switch (action) {
    case "increment":
      return cState + 1;
    case "decrement":
      return cState - 1;
    case "reset":
      return initialState;
    default:
      return cState;
  }
};

// how to make the steps in this...............

const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <hr />
      <div>Count == {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>

      <div>
        <div>Count == {countTwo}</div>
        <button onClick={() => dispatchTwo("increment")}>Increment</button>
        <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
      </div>
    </div>
  );
};

export default CounterThree;
