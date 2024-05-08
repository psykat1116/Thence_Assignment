import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  // Function to redirect to homepage
  const rediectPage = () => {
    setCount((prev) => prev - 1);
    if (count === 0) {
      navigate("/");
    }
  };

  // Function to redirect to homepage after 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      rediectPage();
    }, 1000);
    return () => clearInterval(timer);
  }, [count, setCount]);

  return (
    <div className="w-full flex items-start justify-center mt-10 font-manrope text-text_black">
      <div className="relative flex flex-col justify-between items-center min-[1000px]:w-[60%] md:w-[80%] w-full font-manrope text-center xl:h-[75vh] md:h-[50vh] h-[30vh]">
        <div className="flex flex-col justify-start items-center w-full">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40.5" cy="40.5" r="28" fill="white" />
            <path
              d="M40.0014 73.3219C21.5919 73.3219 6.66809 58.3979 6.66809 39.9886C6.66809 21.5791 21.5919 6.65527 40.0014 6.65527C58.4107 6.65527 73.3347 21.5791 73.3347 39.9886C73.3347 58.3979 58.4107 73.3219 40.0014 73.3219ZM36.6768 53.3219L60.2471 29.7517L55.5331 25.0377L36.6768 43.8939L27.2488 34.4656L22.5347 39.1799L36.6768 53.3219Z"
              fill="#28B246"
            />
          </svg>
          <p className="min-[1000px]:text-[36px] md:text-[28px] text-[22px] font-cover_by_grace text-[#2DA950] mt-8">
            Success Submitted
          </p>
          <h1 className="min-[1000px]:text-[56px] md:text-[38px] text-[30px] font-[600]">
            Congratulations
          </h1>
          <p className="min-[1000px]:text-[25px] font-[500] text-[#727272] md:text-[22px] text-[18px]">
            Your request has been successfully submitted to us. We will validate
            your information and reactout to you shortly with updates.
          </p>
        </div>
        <div className="w-full">
          Rediecting you to Homepage in <b>{count} Seconds</b>
        </div>
      </div>
    </div>
  );
};

export default Success;
