import { useRef, useState, useEffect } from "react";
import { hoverImages } from "../constants"

const Hover = () => {
    const container = useRef(null);
    const [flex, setFlex] = useState(false);
   
      const mouseEnter=()=>{
        setFlex(true);
      }
    
      
     const mouseLeave=()=>{
            setFlex(false);
        }
      
    
    return (
        <div className="absolute top-[180vh] h-screen w-full flex flex-col justify-center items-center min-h-screen" id="#hover">
            <h2 className="w-max text-center text-4xl pb-14 tracking-widest">HALL  OF  FAME</h2>
            <div ref={container} className="w-[90%] flex justify-around overflow-hidden pb-[50vh]">
                {hoverImages.map(item => (
                    <div key={item.key} className={`img h-[25rem] overflow-hidden flex justify-center items-center flex-shrink  mx-1  border-none ${flex? 'flex-grow basis-96 ':'basis-5'}`} style={{transition:'flex 1s cubic-bezier(0.075,0.82,0.165,1)'}} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                        <img className="w-[25rem] h-[100%] object-content " style={{ transform: 'scale(2)' }} src={item.src} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hover