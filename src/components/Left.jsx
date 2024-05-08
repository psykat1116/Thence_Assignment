import React from "react";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";

const Left = () => {
  return (
    <div className="relative w-full flex items-center justify-center xl:ml-16">
      <div className="relative flex items-center justify-center min-[1000px]:scale-100 md:scale-75 scale-50">
        <img
          src="/girlImage.png"
          alt="front"
          className="h-[546px] w-[507px] object-cover rounded-3xl"
        />
        <Box1 />
        <Box2 />
        <Box3 />
      </div>
    </div>
  );
};

export default Left;
