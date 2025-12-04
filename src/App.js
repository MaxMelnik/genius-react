import { lazy, Suspense, useEffect, useState } from "react";
import styles from "./App.module.scss";
import Loader from "./components/Loader";
import { Route, Routes, Link, Navigate } from "react-router-dom";
// import Home from "./pages/home";
// import About from "./pages/about";
// import Contacts from "./pages/contacts";
// import SingleContact from "./pages/singleContact";
import NotFound from "./pages/not-found";
import Layout from "./components/Layouts/Layout";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import Logout from "./pages/logout";
import Login from "./pages/login";
import { AuthContext } from "./context/AuthContext";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./redux/users/usersActions";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Contacts = lazy(() => import("./pages/contacts"));
const SingleContact = lazy(() => import("./pages/singleContact"));

function App() {
  const [isAuthorized, setIsAuthorized] = useState(
    !!localStorage.getItem("email")
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <main>
        <AuthContext.Provider value={{ isAuthorized, setIsAuthorized }}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Layout isAuthorized={isAuthorized} />}>
                <Route index element={<Home />} />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoutes isAllowed={isAuthorized}>
                      <Contacts />
                    </PrivateRoutes>
                  }
                />
                <Route
                  path="/contacts/:id"
                  element={
                    <PrivateRoutes isAllowed={isAuthorized}>
                      <SingleContact />
                    </PrivateRoutes>
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/logout"
                  element={
                    <PrivateRoutes isAllowed={isAuthorized}>
                      <Logout />
                    </PrivateRoutes>
                  }
                />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
              </Route>
            </Routes>
          </Suspense>
        </AuthContext.Provider>
      </main>
    </>
  );
}

export default App;
