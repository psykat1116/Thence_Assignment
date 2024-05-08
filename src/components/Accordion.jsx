import React from "react";

const Accordion = ({ question, answer, id, handleClick, show }) => {
  return (
    <div className="relative flex flex-col border-b-2 border-b-[#D7D7D7] md:w-[90%] w-full font-manrope py-5 px-1 cursor-pointer gap-3">
      <div className="relative flex w-full justify-between items-center">
        <div className="w-[80%] font-[600] md:text-[20px] text-base">{question}</div>
        {show === id && id !== -1 ? (
          <div onClick={() => handleClick(-1)} className="p-2">
            <svg
              width="14"
              height="2"
              viewBox="0 0 14 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0V2H14V0H0Z" fill="black" />
            </svg>
          </div>
        ) : (
          <div onClick={() => handleClick(id)} p-2>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="black" />
            </svg>
          </div>
        )}
      </div>
      {
        <div
          className={`w-full text-[#617275] transition-all max-md:text-[14px] origin-top ${
            show === id && id !== -1 ? "scale-y-100 min-h-[100px] opacity-100" : "scale-y-0 h-0 opacity-0"
          }`}
        >
          {answer}
        </div>
      }
    </div>
  );
};

export default Accordion;
