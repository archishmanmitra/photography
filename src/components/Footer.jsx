import React from "react";
import { useRef, useEffect } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { footer } from "../constants";
import Button from "./Button";

const Footer = () => {
  const container = useRef();
  const text = useRef([]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      text.current.forEach((t, i) => {
        t.setAttribute("startOffset", -40 + i * 40 + e * 40 + "%");
      });
    });
  }, []);
  const y = useTransform(scrollYProgress, [0, 1], [-550, 0]);

  return (
    <div ref={container} id="footer" className="relative ">
      <svg className="w-full " viewBox="0 0 250 90">
        <path
          fill="none"
          id="curve"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text
          fill="white"
          className="font-newserif text-[5px] tracking-widest uppercase "
        >
          {[...Array(3)].map((_, i) => {
            return (
              <textPath
                ref={(ref) => (text.current[i] = ref)}
                key={i}
                startOffset={i * 40 + "%"}
                href="#curve"
              >
                This took me hours to complete.
              </textPath>
            );
          })}
        </text>
      </svg>

      <div  className="flex items-center justify-between w-full px-10 pt-24 pb-10 ext-md font-grotesk">
        <div className="uppercase">2024 &#169; Archishman Mitra</div>
        <div className="flex justify-center gap-4 mr-6">
          <Button name="github" />
          <Button name="instagram" href='https://www.instagram.com/_lyadh_lagche_/'/>
          <Button name="twitter" />
        </div>
        <div className="uppercase">Design And Dev by me</div>
      </div>

      <div className="overflow-hidden">
        <motion.div
          style={{ y }}
          className="flex relative items-center justify-center  py-[2.5rem] gap-24 "
        >
          {footer.map(({ id, src }) => (
            <img
              key={id}
              className={`h-[3.8vw] ${id === 3 ? "pl-4" : "pl-0"}`}
              src={src}
              alt=""
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
