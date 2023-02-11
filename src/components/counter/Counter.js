import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../counterSlice/CounterSlice"

const Counter = () => {
  const count = useSelector((state) => state.reducer.value);
  console.log(count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter App</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;
