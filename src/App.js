import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(countReducer, 0);
  const increaseCount = () => {
    // setCount(count + 1);
    dispatch({ type: "INCREMENT" });
  };
  return (
    <div className="App">
      <h1>Hello From React</h1>
      <Header title={"Tasks Tracker"}></Header>
      <Tasks></Tasks>

      <h1>Counter : {count}</h1>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default App;
