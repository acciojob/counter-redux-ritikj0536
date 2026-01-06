import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./action";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h1>{count}</h1>

      <div>
        <span>Counter</span>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  );
};

export default App;
