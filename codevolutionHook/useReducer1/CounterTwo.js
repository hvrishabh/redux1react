import React from "react";
import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (cState, action) => {
  switch (action.type) {
    case "increment":
      return { ...cState, firstCounter: cState.firstCounter + action.value };
    case "decrement":
      return { ...cState, firstCounter: cState.firstCounter - action.value };
    case "incrementTwo":
      return { ...cState, secondCounter: cState.secondCounter + action.value };
    case "decrementTwo":
      return { ...cState, secondCounter: cState.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return cState;
  }
};

// how to make the steps in this...............

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <hr />
      <div>Count1 = {count.firstCounter}</div>
      <div>count2 = {count.secondCounter}</div>
      <br />
      {/* <div>Count == {count.firstCounter}</div> */}
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement
      </button>
      <br />
      <button onClick={() => dispatch({ type: "incrementTwo", value: 5 })}>
        IncrementTwo
      </button>
      <button onClick={() => dispatch({ type: "decrementTwo", value: 5 })}>
        DecrementTwo
      </button>
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterTwo;
