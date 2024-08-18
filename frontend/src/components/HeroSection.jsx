import React, { useState } from "react";

const HeroSection = ({ fetchCardFn }) => {
  const [title, setTitle] = useState("");
  console.log(title);

  async function handleKeyDown(e) {
    if (e.key === "Enter") {
      await fetchCardFn(title);
    }
  }
  return (
    <div className="pl-[10vw] pr-[10vw] p-[5vw] bg-gray-300">
      <div
        onKeyDown={handleKeyDown}
        className="flex flex-col justify-center items-center gap-4"
      >
        <h1 className="text-black text-[29px] md:text-[35px] lg:text-[50px] font-semibold">
          How Can We Help ?
        </h1>
        <div className="bg-white lg:w-1/2 md:w-1/2 w-full flex p-2 rounded-lg shadow-md items-center gap-4 cursor-pointer">
          <input
            type="text"
            className="w-full p-3 outline-none text-black"
            placeholder="Search"
            onChange={(e) => setTitle(e.target.value)}
          />
          <img
            onClick={() => fetchCardFn(title)}
            className="h-[20px] mr-4"
            src="./rightArrow.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
