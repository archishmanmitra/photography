import React, { useEffect } from "react";
import gsap from "gsap";


const Cursor = () => {
   

  
  useEffect(() => {
    const handleCursor = (e) => {
        
        
        gsap.to('.cursor', {
            x: e.x,
            y: e.y,
            delay: 0.001,
            ease: "power2.out",
          });
       
    };

    window.addEventListener("mousemove", handleCursor);
    return () => {
      window.removeEventListener("mousemove", handleCursor);
    };
  }, []);

  return (
    <div className=" cursor h-2 w-2 rounded-full fixed bg-white flex justify-center items-center z-50"></div>
  );
};

export default Cursor;
