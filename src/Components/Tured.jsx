import { motion, useAnimation } from "framer-motion";
import React from "react";

function Tured() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHover = (index) => {
    /*alert("hover")*/
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    /*alert("hover")*/
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full bg-zinc-800 py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight '>
          Featured Projects
        </h1>
      </div>

      <div className="px-20">
        <div className="cards w-full  flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer  relative w-1/2  h-[75vh] "
          >
            <h1 className="absolute  text-[#CDEA68] z-[9] top-1/2 -translate-y-1/2 -translate-x-1/2 leading-none tracking-tight left-full text-8xl ">
              <h1 className="absolute flex overflow-hidden font-bold text-[#CDEA68] z-[9] top-1/2 -translate-y-1/2 translate-x-1/2 leading-none tracking-tight pl-10 right-0 text-8xl ">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    className="inline-block "
                    initial={{ y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    animate={cards[0]}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </h1>
            <div className="card w-full rounded-xl h-full  overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div className="butn flex pt-2 gap-3 ">
              <button className=" hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[120px] border-2 text-xs  rounded-full mt-2  h-[30px]   ">
                BRANDIDENTITY
              </button>
              <button className=" hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[120px] rounded-full mt-2 text-xs h-[30px]   border-2  ">
                DESIGNRESEARCH{" "}
              </button>
              <button className="hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[120px] rounded-full mt-2 text-xs h-[30px] border-2   ">
                INVESTORDECK{" "}
              </button>
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2  h-[75vh] "
          >
            <div className="card w-full rounded-xl overflow-hidden h-full bg-green-600">
              <h1 className="absolute flex overflow-hidden font-bold text-[#CDEA68] z-[9] top-1/2 -translate-y-1/2 translate-x-1/2 pr-10 leading-none tracking-tight right-full text-8xl ">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    className="inline-block "
                    initial={{ y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    animate={cards[1]}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
            <div className="butn pt-2 flex gap-3 ">
              <button className=" hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 text-xs w-[90px] rounded-full mt-2  h-[30px] border-2   ">
                AGENCY
              </button>
              <button className=" hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 text-xs w-[170px] rounded-full mt-2  h-[30px] border-2   ">
                COMPANYPRESENTATION{" "}
              </button>
              {/* <button  className='border-zinc-100 w-[140px] rounded-full mt-2  h-[40px] bg-red-300   '  >INVESTORDECK </button> */}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="px-20 mt-[8vw] ">
        <div className="cards w-full flex gap-10 mt-10 ">
          <motion.div
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="relative  container w-1/2 h-[75vh]  "
          >
            <h1 className="absolute  text-[#CDEA68]   left-full flex overflow-hidden  z-[10] text-7xl tracking-tighter  font-bold   leading-none  -translate-y-1/2  top-1/2  -translate-x-1/2     ">
              {"BLEND".split("").map((item, index) => (
                <motion.span
                  className="inline-block "
                  initial={{ y: "100%" }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.05,
                  }}
                  animate={cards[2]}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" card w-full h-full  overflow-hidden rounded-xl bg-green-400 ">
              <img
                className="h-full w-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>

            <div className="butn flex pt-2 gap-3 ">
              <button className=" hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[80px] text-xs rounded-full mt-2  h-[30px] border-2  ">
                AUDIT
              </button>
              <button className=" hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[100px] text-xs rounded-full mt-2  h-[30px] border-2   ">
                COPYWRITING
              </button>
              <button className=" hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[100px] text-xs rounded-full mt-2  h-[30px] border-2   ">
                SALES DECK{" "}
              </button>
              <button className=" hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[100px] text-xs rounded-full mt-2  h-[30px] border-2   ">
                SLIDESDESIGN
              </button>
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="container   relative  w-1/2 h-[75vh]  "
          >
            <h1 className="absolute  right-full text-[#CDEA68] flex overflow-hidden z-[10] text-7xl tracking-tighter  font-bold   leading-none -translate-y-1/2  top-1/2  translate-x-1/2     ">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  className="inline-block "
                  initial={{ y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  animate={cards[3]}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" card w-full h-full overflow-hidden rounded-xl ">
              <img
                className="h-full w-full object-over "
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>

            <div className="butn flex pt-2 gap-3 ">
              <button className=" hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[140px] text-xs rounded-full mt-2  h-[30px]   border-2   ">
                BRANDEDTEMPLATE
              </button>
              {/* <button  className='border-zinc-100 w-[150px] rounded-full mt-2  h-[50px] bg-red-300   '  >DESIGN RESEARCH </button> */}
              {/* <button  className='border-zinc-100 w-[150px] rounded-full mt-2  h-[50px] bg-red-300   '  >INVESTOR DECK </button> */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Tured;
