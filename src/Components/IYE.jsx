import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const IYE = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      console.log(e.clientX, e.clientY);
      let mousex = e.clientX;
      let mousey = e.clientY;

      let deltaX = mousex - window.innerWidth / 2;
      let deltaY = mousey - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle - 180);
      


    });
  });

  return (
    <div  className="w-full py-20  bg-[#CDEA68]  h-screen flex justify-center items-center    ">
      <div   className="whitespace-nowrap text-center  relative  ">
        <h1 className="   text-[#212121] font-['Founders Grotesk'] font-bold text-[185px]  tracking-tighter  whitespace-nowrap    ">
          READY
        </h1>
        <h1 className="text-[185px] font-['Founders Grotesk']   text-[#212121]  font-bold  tracking-tighter -mt-[120px]   whitespace-nowrap">
          TO START
        </h1>
        <h1 className="text-[185px] font-['Founders Grotesk']  text-[#212121]  font-bold  tracking-tighter  -mt-[120px] whitespace-nowrap ">
          THE PROJECT?{" "}
        </h1>
      </div>

      {/* <h1  className='absolute' >KING</h1> */}
      <div className="   eye w-full h-screen  overflow-hidden absolute    ">
        
        <div className=" absolute flex h-[350px]   top-1/2 left-1/2   -translate-x-[110%] -translate-y-[50%] gap-5    ">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center  rounded-full  bg-zinc-200  ">
            <div className=" container w-2/3 h-2/3  relative  rounded-full  bg-black">
            <h1 className="text-md uppercase font-semibold text-center absolute items-center top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] justify-center ">Play</h1>
              <div
                style={{
                  transform: `translate(-50% , -50%) rotate(${rotate}deg)  `,
                }}
                className="   w-full  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]    h-10  line"
              >
                <div className="w-6 h-6 rounded-full  bg-white"></div>
              </div>
            </div>
          </div>

          
        </div>

        <div className=" absolute flex h-[350px]   top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] gap-5    ">
        <div className="w-[15vw] h-[15vw] absolute  rounded-full flex items-center justify-center bg-zinc-200  ">
            <div className="w-2/3 h-2/3  relative   rounded-full  bg-black">
            <h1 className="text-md uppercase font-semibold text-center absolute items-center top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] justify-center ">Play</h1>
              <div
                style={{
                  transform: `translate(-50% , -50%) rotate(${rotate}deg)  `,
                }}
                className="w-full    h-10   absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line"
              >
                <div className="w-6 h-6  rounded-full  bg-white"></div>
              </div>
            </div>
          </div>

        </div>
        </div>
        
      </div>
    
  );
};

export default IYE;
