import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function LandingPage () {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-40 px-20'>
            {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index)=>{
                return  (
                <div className='masker  '>
                    <div className='w-fit flex items-end '>
                        {index=== 1 && (<motion.div initial={{width:0}} animate={{width:"8.5vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className='mr-[1vw] w-[8.5vw]  rounded-md h-[4.5vw] -top-[0.3vw] relative bg-green-500'>
                            <img className='bg-cover w-full h-full' src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg' />
                        </motion.div>)}
                        <h1 className='uppercase text-[6vw] leading-[6vw]  tracking-tighter font-["Founders Grotesk"] font-semibold'>
                    {item}</h1>
                    </div>
                    
               
            </div>);
            })}
           
            
        </div>
       
        <div className='border-t-[1px] border-zinc-800 mt-28 flex justify-between items-center py-3 px-20'>
            {["For Public and Private Companies", "From the first pitch to IPO"].map((item,index)=>
            (<p className='text-md font-light tracking-tighter leading-none'>{item}</p>))}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-1 border-[2px] border-zinc-600  font-light text-md rounded-full  hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 '>START THE PROJECT</div>
                <div className='w-9 h-9 rounded-full flex items-center justify-center border-[2px] border-zinc-600  hover:bg-white hover:text-black ease-in-out transition  hover:scale-110'><GoArrowUpRight /></div>
            </div>

        </div>
        
    </div>
  )
}

export default LandingPage