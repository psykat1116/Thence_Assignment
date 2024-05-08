import React, { useState } from "react";
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";
import Success from "./Success";

const Login = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = (value) => {
    setIsSubmit(value);
  };
  return (
    <>
      <Navbar isLoginPage={true} />
      {isSubmit ? <Success /> : <LoginForm submit={handleSubmit} />}
    </>
  );
};

export default Login;
