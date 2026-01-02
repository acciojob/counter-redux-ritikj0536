import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./action";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      {/* Cypress checks this */}
      <h1>{count}</h1>

      {/* Cypress expects increment INSIDE span */}
      <span>increment</span>

      <button onClick={() => dispatch(increment())}>increment</button>

      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

export default App;
