// import CounterComponent from "./components/CounterComponent";
// import TodoList from "./components/TodoList";
// import RenderExample from "./components/RenderExample";
// import CollectionsExample from "./components/CollectionsExample";
// import Unmount from "./components/Unmount";
// import LifecycleHooks from "./components/LifecycleHooks";
// import Reducer from "./components/Reducer";
import ChildComponent from "./components/ChildComponent";
import SecondChildComponent from "./components/SecondChildComponent";
import { useCounter } from "./hooks/useCounter";

import { useState } from "react";

import "./App.css";

function App() {
  console.log("render App");
  const { value, increment, decrement } = useCounter();
  return (
    <div className="App">
      <header className="App-header">
        <p>{value}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </header>
    </div>
  );
}

export default App;
