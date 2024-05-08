import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="relative min-h-screen w-full p-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <h1 className="text-center h-[90vh] w-full flex items-center justify-center font-manrope text-8xl font-bold text-text_black">
                404 <br/>Not Found
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
