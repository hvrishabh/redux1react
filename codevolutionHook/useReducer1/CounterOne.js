import React from "react";

import CounterA from "./CounterA";
import { useContext } from "react";
import { countContext } from "./App";
// const initialState = 0;
// const reducer = (cState, action) => {
//   switch (action) {
//     case "increment":
//       return cState + 1;
//     case "decrement":
//       return cState - 1;
//     case "reset":
//       return initialState;
//     default:
//       return cState;
//   }
// };

// how to make the steps in this...............

const CounterOne = () => {
  // const [count, dispatch] = useReducer(reducer, initialState);
  const { countState, countDispatch } = useContext(countContext);

  return (
    <div>
      <div>Count == {countState}</div>
      <button onClick={() => countDispatch("increment")}>Increment</button>
      <button onClick={() => countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countDispatch("reset")}>Reset</button>
      <hr />
      <CounterA />
    </div>
  );
};

export default CounterOne;

// import React from "react";
// import { useReducer } from "react";
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// const CounterOne = () => {
//   const [count, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <div>Count :: {count}</div>
//       <button onClick={() => dispatch("increment")}>Increment</button>
//       <button onClick={() => dispatch("decrement")}>Decrement</button>
//       <button onClick={() => dispatch("reset")}>Reset</button>
//     </div>
//   );
// };

// export default CounterOne;
