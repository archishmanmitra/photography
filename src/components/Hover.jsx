import { useRef, useState } from "react";
import { hoverImages } from "../constants";

const HoverImage = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`img h-[24rem] rounded-md overflow-hidden flex justify-center items-center flex-shrink mx-1 border-none transition-all duration-1s transition-custom-ease ${ 
        isHovered ? "flex-grow basis-96" : "basis-5"
      }`}
      
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className={`w-auto h-full rounded-md ${isHovered?'object-fill':'object-cover'}`}
        style={{ transform: "scale(1.25)" }}
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
      <div className="w-[80%] flex justify-around overflow-hidden pb-[70vh]">
        {hoverImages.map((item) => (
          <HoverImage key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Hover;
