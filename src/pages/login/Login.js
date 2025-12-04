import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { setIsAuthorized } = useContext(AuthContext);
  const login = () => {
    localStorage.setItem("email", "admin@gmail.com");
    setIsAuthorized(true);
  };
  return <button onClick={login}>{"Log In"}</button>;
};

export default Login;
