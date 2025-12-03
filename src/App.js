import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Loader from "./components/Loader";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import SingleContact from "./pages/singleContact";
import NotFound from "./pages/not-found";
import Layout from "./components/Layouts/Layout";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/contacts/:id" element={<SingleContact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
