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

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Contacts = lazy(() => import("./pages/contacts"));
const SingleContact = lazy(() => import("./pages/singleContact"));

function App() {
  const isAuthorized = true;

  return (
    <>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
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
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
