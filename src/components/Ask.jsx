import React from "react";
import LeftPanel from "./LeftPanel";
import Question from "./Question";

const Ask = () => {
  return (
    <div className="min-h-[50vh] w-full md:flex-row flex-col mt-20 bg-[#E8EEE7] p-3 rounded-2xl flex items-center justify-start">
      <LeftPanel />
      <Question />
    </div>
  );
};

export default Ask;
