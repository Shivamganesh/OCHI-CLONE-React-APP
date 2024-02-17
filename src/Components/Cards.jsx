import React from "react";

const Cards = () => {
  return (
    <div  className="cards flex px-32  w-full h-screen bg-zinc-100 items-center gap-5     ">
      <div  className="w-1/2 h-[60vh]         ">
        <div  className="flex justify-center relative rounded-xl bg-[#004D43] w-full h-full   items-center ">
          <img
            className="w-32 "
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="  hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 left-10 bottom-5 absolute px-4 py-1 border-2 text-xs border-zinc-100   rounded-full  ">
            &copy; 2019-2024
          </button>
        </div>
        
      </div>

      <div className="w-1/2 h-[60vh] flex    gap-4   ">
        <div className="w-1/2 h-full rounded-xl flex justify-center items-center  relative bg-[#212121] ">
          
            <img
              className="w-32 "
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
            <button className="  hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 text-xs  border-2 border-zinc-100 absolute  left-7 bottom-5 px-4 py-1 rounded-full  ">
              {" "}
              RATING5.0 ON CLUTCH
            </button>
          

          
            
          
        </div>
        <div className="w-1/2 h-full  rounded-xl flex justify-center relative   items-center bg-[#212121] ">
          
            <img
              className="w-32 "
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
            <button className="    hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 text-xs  border-2 border-zinc-100 absolute  left-7 bottom-5 px-4 py-1 rounded-full  ">
              {" "}
              BUSINESS BOOTCAMP ALUMNI
            </button>
          

          
            
          
        </div>
      </div>
    </div>
  );
};

export default Cards;
