
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counterSlice";
import "./Counter.css"; 

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <div className="counter-box">
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
}
