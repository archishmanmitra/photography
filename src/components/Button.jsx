import { motion } from 'framer-motion'
import { useState } from 'react'

const Button = ({name, classes, href}) => {
  const [target, setTarget] = useState(true)
  const isTarget=()=>{

    if (Array.from(href)[0]==='#'){
      setTarget(false)
    }
  }
  
  return (
    <a href={href} target={`${target && '_blank'} `}>
      <motion.button whileTap={{scale:0.8}} whileHover={{
          scale:1.1,
          backgroundColor:"#ffffff",
          color:"#292929",
      }} transition={{
          bounceDamping:10,
          bounceStiffness:60
      }} href={href}  className={`border rounded-full px-4 py-1.5 text-[0.75rem] uppercase font-grotesk text-center ${classes} `} >{name}</motion.button>

    </a>
  )
}

export default Button