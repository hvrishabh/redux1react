import React from "react";
import { useContext } from "react";
import { countContext } from "./App";
import CounterB from "./CounterB";

const CounterA = () => {
  const { countState, countDispatch } = useContext(countContext);
  return (
    <div>
      <div>CountA == {countState}</div>
      <button onClick={() => countDispatch("increment")}>Increment</button>
      <button onClick={() => countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countDispatch("reset")}>Reset</button>
      <hr />
      <CounterB />
    </div>
  );
};

export default CounterA;
