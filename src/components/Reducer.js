import { useReducer } from "react";

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      // важливо не повертати undefined
      console.warn("Unknown action type:", action.type);
      return state;
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });
  const handleReset = () => dispatch({ type: "reset" });
  return (
    <>
      <p>{state.count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>0</button>
    </>
  );
};

export default Reducer;
