import { Link, Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  const getActiveLink = ({ isActive }) => (isActive ? "active-link" : "");
  return (
    <>
      <header>
        <NavLink to="/" className={getActiveLink}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={getActiveLink}>
          Contacts
        </NavLink>
        <NavLink to="/about" className={getActiveLink}>
          About
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>No rights reserved ....</footer>
    </>
  );
};

export default Layout;
