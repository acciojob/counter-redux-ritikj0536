import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./action";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h1>{count}</h1>

      {/* IMPORTANT: this div must have ONLY 3 children */}
      <div>
        {/* 1st child */}
        <span>Counter</span>

        {/* 2nd child → increment */}
        <button onClick={() => dispatch(increment())}>
          increment 
        </button>

        {/* 3rd child → decrement */}
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>
      </div>
    </div>
  );
};

export default App;
