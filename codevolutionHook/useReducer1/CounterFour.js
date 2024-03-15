import React from "react";
import { useReducer } from "react";

const initialState = {
  firstCount: 0,
  step: 0,
};

const reducer = (cState, action) => {
  switch (action.type) {
    case "increment":
      return { ...cState, firstCount: cState.firstCount + cState.step };
    case "decrement":
      return { ...cState, firstCount: cState.firstCount - cState.step };
    case "reset":
      return { ...cState, firstCount: initialState.firstCount };
    case "incrementStep":
      return { ...cState, step: cState.step + 1 };
    case "decrementStep":
      return { ...cState, step: cState.step - 1 };
    case "resetStep":
      return { ...cState, step: initialState.step };
    default:
      return cState;
  }
};

// how to make the steps in this...............

const CounterFour = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <hr />

      <div>
        <div>step {count.step}</div>
        <button onClick={() => dispatch({ type: "incrementStep" })}>
          step Increment
        </button>
        <button onClick={() => dispatch({ type: "decrementStep" })}>
          step Decrement
        </button>
        <button onClick={() => dispatch({ type: "resetStep" })}>
          step Reset
        </button>
      </div>

      <div>Count == {count.firstCount}</div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterFour;
