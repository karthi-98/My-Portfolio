import React from "react";

const Footer = () => {
  return (
    <>
      <div className="h-[3px] bg-black"></div>
      <footer className="h-[2rem] bg-gradient-to-tr from-gradientyfrom to-yellow py-6 flex justify-center items-center">
        <h1 className="font-jost text-[#000]">
          Handcrafted with<span className="text-[#ff2929] text-xl"> ♥ </span>by
          karthick
        </h1>
      </footer>
    </>
  );
};

export default Footer;
