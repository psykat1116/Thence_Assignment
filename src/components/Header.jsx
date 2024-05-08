import React from "react";

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start mt-6 text-text_black">
      <h2 className="font-cover_by_grace text-[#2DA950] min-[1000px]:text-[36px] md:text-[30px] text-[24px]">
        Success Stories
      </h2>
      <p className="font-manrope text-center min-[1000px]:text-[56px] md:text-[40px] text-[30px] font-[600] leading-[1.2]">
        Every success journey <br /> we've encountered.
      </p>
    </div>
  );
};

export default Header;
