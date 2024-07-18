import { name, parallaxImages } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Parallax = () => {
  
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(()=>{
    ScrollTrigger.create({
      trigger:'.wrapper',
      start:'top 10%',
      end:'+=800vh',
      pin:true,
      scrub:1,
      onUpdate: self=>{
        gsap.to('.wrapper',{
          x:`${-190 *self.progress}vw`,
          duration:0.5,
          ease:'power3.out'
        })
      }
    })
  })
  useEffect(() => {
    const context=gsap.context(()=>{
      const tl=gsap.timeline({
        scrollTrigger:{
          trigger:'.wrapper',
          start:'top bottom',
          end:'bottom top',
          scrub:true,
          yoyo:true
        }
      });
      parallaxImages.map(({key,rotation})=>{
        tl.from('.img'+key, {rotation:rotation, ease:'power2.out'}, 0)
        if(key%2==0){
          tl.from('.img'+key, {x: 500}, 0)
          
        }
        else{
          tl.from('.img'+key, {x: 300}, 0)
          
        }
      })
    })
  
    return () => context.revert();
  }, [])
  
  
  
  
  return (
    <div 
      className="bg-zinc-950  w-full h-[250vh] overflow-x-hidden  text-white"
      id="parallax"
    >
      <div  className="wrapper text-white w-[180vw] absolute top-[10%]   will-change-transform">
        <h1 className="text-[28vw]  text-white w-full font-serif m-0 text-center">{name}</h1>
        {parallaxImages.map(item=>(
          <div key={item.key}   className={`img absolute w-72 h-44 overflow-hidden rounded-2xl border-none ${item.classes}`}>
            <img className="w-full h-full object-cover" src={item.src} alt="" />
          </div>
        ))}
      </div>
      <div className="absolute top-[150vh]  h-screen w-full flex justify-center items-center">
        <h2 className="w-max text-center text-3xl">*tada*</h2>
      </div>
    </div>
  );
};

export default Parallax;
