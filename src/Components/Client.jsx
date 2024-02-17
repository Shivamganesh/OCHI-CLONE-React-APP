import React from "react";

const CLIENT = () => {
  const data = [
    {
      name: "Plantley",
      pos: "Nina_Walloch",
      context: "READ",
    },

    {
      name: "Workiz_Easy",
      pos: "Tomer_Levy",
      context: "READ",
    },

    {
      name: "Premium_Blend",
      pos: "Ellen_Kim",
      context: "READ",
    },

    {
      name: "Hypercare_Systems",
      pos: "Brendan_Goss",
      context: "READ",
    },

    {
      name: "Officevibe",
      pos: "Raff_Labrie",
      context: "READ",
    },

    {
      name: "Orderlion",
      pos: "Stefan_Strohmer",
      context: "READ",
    },

    {
      name: "Blacks_Book",
      pos: "Jaci_Smith",
      context: "READ",
    },

    {
      name: "Trawa_Energy",
      pos: "David_Budde",
      context: "READ",
    },
  ];

  return (
    <div className="w-full   py-20 px-20    ">
      <div className="   w-full  pb-12  border-b-2 border-zinc-700  ">
        <h1 className='text-7xl font-["Neue_Montreal"]  tracking-tighter  '>
          Client's reviews{" "}
        </h1>
      </div>

      <div className=" pt-6 flex justify-between  gap-10">
        {["Karam Ventures", "Service;", "William Barnes", "READ"].map(
          (item, index) => {
            return (
              <h1 className="text-xl underline   decoration-1    " key={index}>
                {" "}
                {item}
              </h1>
            );
          }
        )}
      </div>

      <div className="py-20 pl-20  gap-60  flex  w-full  ">
        <div className="w-full ">
          <button className=" hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[150px] rounded-full mt-2  h-[40px] border-2   ">
            INVESTOR DECK
          </button>
          <button className=" hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[150px] rounded-full mt-2  h-[40px] border-2   ">
            SALES DECK
          </button>
        </div>

        <div className="client    ">
          <div className="  w-[100px] h-[100px] rounded-xl mb-10    overflow-hidden ">
            <img
              className="   w-[100px]      rounded-xl object-cover  "
              src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
              alt=""
            />
          </div>
          <h1 className="text-2xl">
            They were transparent about the time and the stages of the project.
            The end product is high quality, and I feel confident about how they
            were handholding the client through the process. I feel like I can
            introduce them to someone who needs to put a sales deck together
            from scratch, and they would be able to handhold the client
            experience from 0 to 100 very effectively from story to design. 5/5
          </h1>
        </div>
      </div>

      <div className="box w-full h-screen ">
        {data.map((items, index) => {
          return (
            <>
              <div className="reviews_box flex justify-around items-center  pt-4 pb-4  border-t-2 border-b-2 border-zinc-700  ">
                <h1
                  className='text-xl font-["Neue_Montreal"] underline decoration-white  '
                  key={index}
                >
                  {items.name}
                </h1>
                <h1 className='text-xl font-["Neue_Montreal"] ' key={index}>
                  {items.pos}
                </h1>
                <h1
                  className='text-xl font-["Neue_Montreal"] underline decoration-white '
                  key={index}
                >
                  {items.context}
                </h1>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CLIENT;
