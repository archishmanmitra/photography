import { useRef, useState } from "react";
import { hoverImages } from "../constants";

const HoverImage = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`img h-[25rem] overflow-hidden flex justify-center items-center flex-shrink mx-1 border-none ${
        isHovered ? "flex-grow basis-96" : "basis-5"
      }`}
      style={{ transition: "flex 1s cubic-bezier(0.075,0.82,0.165,1)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="w-[25rem] h-[100%] object-content"
        style={{ transform: "scale(2)" }}
        src={item.src}
        alt=""
      />
    </div>
  );
};

const Hover = () => {
  return (
    <div
      className="absolute top-[180vh] h-screen w-full flex flex-col justify-center items-center min-h-screen"
      id="#hover"
    >
      <h2 className="w-max text-center text-4xl pb-14 tracking-widest">
        HALL OF FAME
      </h2>
      <div className="w-[90%] flex justify-around overflow-hidden pb-[50vh]">
        {hoverImages.map((item) => (
          <HoverImage key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Hover;
