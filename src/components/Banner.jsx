import React from "react";
import Left from "./Left";
import Right from "./Right";

const Banner = () => {
  return (
    <div className="flex xl:flex-row xl:gap-10 flex-col w-full justify-between items-start xl:py-5 xl:px-36 md:px-6 xl:mt-16 mt-10 font-manrope">
      <Left />
      <Right />
    </div>
  );
};

export default Banner;
