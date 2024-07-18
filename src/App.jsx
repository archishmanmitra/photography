
import Layout from "./components/Layout";
import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { AnimatePresence } from "framer-motion";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 3000);
    })();
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && location.pathname === '/' && <Preloader />}
      </AnimatePresence>
      {!isLoading && <Cursor />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
