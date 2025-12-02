import { useEffect } from "react";

const Unmount = () => {
  useEffect(() => {
    return () => {
      console.log(`useEffect componentWillUnmount`);
    };
  }, []);

  return <div>Unmount</div>;
};

export default Unmount;
