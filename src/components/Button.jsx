import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Button = ({name, classes, href}) => {
  const [target, setTarget] = useState(true)
  useEffect(() => {
    if (href && href.startsWith('#')) {
      setTarget(false);
    }
  }, [href])
  
  const buttonEle=(
    <motion.button whileTap={{scale:0.8}} whileHover={{
        scale:1.1,
        backgroundColor:"#ffffff",
        color:"#292929",
    }} transition={{
        bounceDamping:10,
        bounceStiffness:60
    }} href={href}  className={`border rounded-full px-4 py-1.5 text-[0.75rem] uppercase font-grotesk text-center ${classes} `} >{name}</motion.button>
  );
  return href ? (
    <a href={href} target={target ? '_blank' : '_self'}>
      {buttonEle}
    </a>
  ) : (
    buttonEle
  )
}

export default Button