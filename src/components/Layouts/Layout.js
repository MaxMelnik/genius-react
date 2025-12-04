import { useContext } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Layout = () => {
  const { isAuthorized } = useContext(AuthContext);

  const getActiveLink = ({ isActive }) => (isActive ? "active-link" : "");
  return (
    <>
      <header>
        <NavLink to="/" className={getActiveLink}>
          Home
        </NavLink>
        {isAuthorized && (
          <NavLink to="/contacts" className={getActiveLink}>
            Contacts
          </NavLink>
        )}
        <NavLink to="/about" className={getActiveLink}>
          About
        </NavLink>

        {isAuthorized ? (
          <NavLink to="/logout" className={getActiveLink}>
            Log Out
          </NavLink>
        ) : (
          <NavLink to="/login" className={getActiveLink}>
            Log In
          </NavLink>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>No rights reserved ....</footer>
    </>
  );
};

export default Layout;
