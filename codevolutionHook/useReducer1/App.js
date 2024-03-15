// import React, { createContext, useReducer } from "react";
// import CounterOne from "./CounterOne";
// import CounterTwo from "./CounterTwo";
// import CounterThree from "./CounterThree";
// import CounterFour from "./CounterFour";

// export const countContext = React.createContext();

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

// const App = () => {
//   const [count, dispatch] = useReducer(reducer, initialState);

//   return (
//     <countContext.Provider
//       value={{ countState: count, countDispatch: dispatch }}
//     >
//       <div>
//         <CounterOne />
//         {/* <CounterTwo /> */}
//         {/* <CounterThree /> */}
//         {/* <CounterFour /> */}
//       </div>
//     </countContext.Provider>
//   );
// };

// export default App;
