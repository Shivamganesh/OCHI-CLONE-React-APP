import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-speed="-.1" className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl  text-black rounded-tr-3xl'>
        <h1 className='font-["Neue_Montreal"] leading-[4vw] tracking-tighter text-[4vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full border-t-[1px] gap-5 flex pt-5 mt-20 border-[#a1b562]'>
            <div className='w-1/2'>
                <h1 className='text-5xl'>Our Approach : </h1>
                <button className='px-8 py-3 mt-5 flex gap-7 items-center  bg-zinc-900 rounded-full text-white'>Read More
                <div className='w-2  h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh]  rounded-3xl'>
            <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
                alt=""
              />
            </div>
        </div>

    </div>
  )
}

export default About