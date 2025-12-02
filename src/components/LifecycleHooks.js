import { useEffect, useState } from "react";

import Unmount from "./Unmount";

const LifecycleHooks = () => {
  const [value, setValue] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    console.log("useEffect componentDidMount");
  }, []);

  useEffect(() => {
    console.log(`useEffect componentDidUpdate value=${value}`);
  }, [value]);

  const incrementValue = () => {
    setValue((prevState) => prevState + 1);
  };

  const toggleIsMounted = () => {
    setIsMounted((prevState) => !prevState);
  };

  return (
    <>
      <p>{value}</p>
      {isMounted ? <Unmount /> : <p>no.</p>}
      <button onClick={incrementValue}>+</button>
      <button onClick={toggleIsMounted}>Toggle Mount</button>
    </>
  );
};

export default LifecycleHooks;
