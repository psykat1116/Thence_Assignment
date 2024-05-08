import React from "react";
import { useState } from "react";

const Right = () => {
  const [active, setActive] = useState(0);
  const handleChange = (index) => {
    setActive(index);
  };
  return (
    <div className="relative flex flex-col items-start xl:pl-32 pl-6 h-[100%] py-16 justify-start w-full">
      <div className="flex flex-col">
        <p className="min-[1000px]:text-4xl md:text-3xl text-2xl font-bold">
          Enhance fortune 50 company's insights teams research capabilities
        </p>
        <div className="flex items-center justify-start gap-4 mt-5 cursor-pointer">
          <p
            onClick={() => handleChange(0)}
            className={`h-3 w-3 max-sm:h-2 max-sm:w-2 rounded-full ${
              active === 0
                ? "bg-[#2DA950]"
                : "bg-[#E3E3E3] hover:bg-[#CAD0CB] ease-in duration-200"
            }`}
          ></p>
          <p
            onClick={() => handleChange(1)}
            className={`h-3 w-3 max-sm:h-2 max-sm:w-2 rounded-full ${
              active === 1
                ? "bg-[#2DA950]"
                : "bg-[#E3E3E3] hover:bg-[#CAD0CB] ease-in duration-200"
            }`}
          ></p>
          <p
            onClick={() => handleChange(2)}
            className={`h-3 w-3 max-sm:h-2 max-sm:w-2 rounded-full ${
              active === 2
                ? "bg-[#2DA950]"
                : "bg-[#E3E3E3] hover:bg-[#CAD0CB] ease-in duration-200"
            }`}
          ></p>
        </div>
      </div>
      <div className="bg-[#1C1C1C] flex items-center justify-between p-4 md:px-5 px-4 rounded-[40px] w-44 cursor-pointer hover:bg-[#4E4E4E] ease-in duration-200 md:mt-44 mt-20">
        <p className="text-white max-md:text-sm">Explore More</p>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.1716 6.9999L-5.92571e-07 6.9999L-7.67416e-07 8.9999L12.1716 8.9999L6.8076 14.3638L8.2218 15.778L16 7.9999L8.2218 0.221679L6.8076 1.63589L12.1716 6.9999Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Right;
