import { motion } from 'framer-motion'
import React from 'react'

function Marquiee() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className=' w-full py-10 rounded-tl-3xl  rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2  border-zinc-300 flex  overflow-hidden whitespace-nowrap'>
            <motion.h1 initial= {{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[16vw] leading-none font-["Founders Grotesk"] tracking-tighter mb-[2vw] pr-20 uppercase font-bold' >we are ochi</motion.h1>
            <motion.h1  initial= {{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[16vw] leading-none font-["Founders Grotesk"]  tracking-tighter mb-[2vw] pr-20 uppercase font-bold'>we are ochi</motion.h1>
            
        </div>
    </div>
  )
}

export default Marquiee