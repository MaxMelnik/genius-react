import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>404</h1>
      <Link to="/"> Go Home</Link>
    </>
  );
};

export default NotFound;
