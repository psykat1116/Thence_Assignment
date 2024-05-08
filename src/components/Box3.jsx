import React from "react";

const Box3 = () => {
  return (
    <div className="absolute h-[239px] w-[291px] shadow-[0px_23.63px_37.81px_0px_rgba(30,30,30,0.09)] bg-[#002E18] -right-20 -bottom-14 rounded-2xl p-[30px] flex flex-col items-center">
      <div className="flex items-baseline gap-2 w-full">
        <p className="text-6xl font-bold text-white">$0.5</p>
        <p className="uppercase text-xl text-[#A6A3A0]">Million</p>
      </div>
      <p className="text-[#CCCCCC] text-lg mt-5">
        Reduced client expenses by saving on hiring and employee costs
      </p>
    </div>
  );
};

export default Box3;
