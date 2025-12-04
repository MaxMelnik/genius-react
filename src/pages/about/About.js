import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../redux/counter/counterSlice";
import { counterSelector } from "../../redux/counter/counterSelectors";

const About = () => {
  const dispatch = useDispatch();
  const counter = useSelector(counterSelector);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = (amount) => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>About</h1>
      <p>{counter}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={() => handleIncrementByAmount(5)}>+5</button>
    </>
  );
};

export default About;
