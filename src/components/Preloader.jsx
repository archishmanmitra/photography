import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { slideUp, opacity } from "../constants";

const Preloader = () => {
  const [counter, setCounter] = useState(0);
  const count = useRef();
  useEffect(() => {
    if (counter == 100) {
      return;
    }
    if (counter > 100) {
      setCounter(100);
    }
    let delay = counter % 2 == 0 ? 80 : 150;
    setTimeout(() => {
      setCounter(counter + Math.floor(Math.random() * 10) + 1);
    }, delay);
  }, [counter]);

  return (
    <motion.div
      variants={slideUp} initial="initial" exit='exit'
      className="w-screen h-screen z-[99] fixed flex justify-center items-center bg-zinc-900 text-7xl font-serif"
    >
      <motion.div variants={opacity} initial='initial' exit='exit' ref={count}>{counter}%</motion.div>
    </motion.div>
  );
};

export default Preloader;
