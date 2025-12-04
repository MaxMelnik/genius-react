import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Logout = () => {
  const { setIsAuthorized } = useContext(AuthContext);
  const logout = () => {
    localStorage.removeItem("email");
    setIsAuthorized(false);
  };
  return <button onClick={logout}>{"Log Out"}</button>;
};

export default Logout;
