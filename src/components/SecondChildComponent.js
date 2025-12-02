import { memo } from "react";

const areEqual = (prevProps, nextProps) => {
  return prevProps.toString() === nextProps.toString();
};

const SecondChildComponent = memo(() => {
  console.log("SecondChildComponent render");
  return <div>Second Child</div>;
}, areEqual);

export default SecondChildComponent;
