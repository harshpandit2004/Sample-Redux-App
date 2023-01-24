import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

import { useSelector, useDispatch } from "react-redux";
import { inc, dec } from "./Features/Counter/counterSlice";

function App() {
  const counterVal = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="App-header">
        <button onClick={() => dispatch(dec())}>decrement</button>
        <label>{counterVal}</label>
        <button onClick={() => dispatch(inc())}>increment</button>
      </div>
    </div>
  );
}

export default App;
