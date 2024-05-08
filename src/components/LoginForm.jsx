import React, { useEffect } from "react";
import { useState } from "react";
import { validate } from "email-validator";

const LoginForm = ({ submit }) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate(data.email)) {
      setError(true);
      return;
    }
    submit(true);
  };
  useEffect(() => {
    if (setError) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [error, setError]);
  return (
    <div className="w-full flex items-center justify-center p-5 font-manrope text-[#1C1C1C]">
      <div className="flex flex-col justify-start items-center h-full w-full min-[1000px]:w-1/2 gap-10 md:w-3/4">
        <div className="flex flex-col justify-start items-center text-center w-full">
          <p className="min-[1000px]:text-[36px] md:text-[32px] text-[28px] text-[#2DA950] font-cover_by_grace">
            Registration Form
          </p>
          <h1 className="font-[600] max-[1000px]:mt-5 min-[1000px]:text-[56px] md:text-[40px] text-[30px] leading-tight">
            Start your success <br /> Journey here!
          </h1>
        </div>
        <div className="w-full flex flex-col justify-start items-center gap-6">
          <input
            type="text"
            name="name"
            className="min-[1000px]:w-[60%] md:w-[80%] w-full border-[1px_solid_#00000005] p-5 rounded-[30px] bg-[#EFEFEF] focus:outline-none placeholder:text-[#827A7A]"
            placeholder="Enter Your Name"
            value={data.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            className="min-[1000px]:w-[60%] md:w-[80%] w-full border-[1px_solid_#00000005] p-5 rounded-[30px] bg-[#EFEFEF] focus:outline-none placeholder:text-[#827A7A]"
            placeholder="Enter Your Email"
            value={data.email}
            onChange={handleChange}
          />
          {error && (
            <div className="text-[#FF0000] min-[1000px]:w-[60%] md:w-[80%] w-full text-[15px] flex gap-1">
              <svg
                width="24"
                height="22"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8.89941"
                  y="6.00024"
                  width="3.2"
                  height="8"
                  fill="white"
                />
                <path
                  d="M10.5016 16.6666C6.81973 16.6666 3.83496 13.6818 3.83496 9.99992C3.83496 6.31802 6.81973 3.33325 10.5016 3.33325C14.1835 3.33325 17.1683 6.31802 17.1683 9.99992C17.1683 13.6818 14.1835 16.6666 10.5016 16.6666ZM9.83496 11.9999V13.3332H11.1683V11.9999H9.83496ZM9.83496 6.66658V10.6666H11.1683V6.66658H9.83496Z"
                  fill="#FF0808"
                />
              </svg>
              <p>Enter a valid email address</p>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center w-full">
          <button
            type="submit"
            disabled={data.name === "" || data.email === ""}
            className={`p-5 min-[1000px]:w-[60%] md:w-[80%] w-full text-white rounded-[40px] ${
              data.name === "" || data.email === ""
                ? "bg-[#C9C9C9] disabled:cursor-not-allowed"
                : "bg-[#1C1C1C]"
            } `}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
