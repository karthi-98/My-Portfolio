import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="h-fit py-6 flex flex-col justify-center items-center">
        <h1 className="font-jost my-4">
          Site hosted in <span className="text-gradientyfrom">AWS</span>
        </h1>
        <h1 className="font-jost text-[#fff] flex items-center">
          Build using
          <span className="font-medium text-2xl mx-2 pb-1 text-gradientyfrom font-dancing">
            ReactJS
          </span>
          and handcrafted by
          <span className="font-medium pl-1 text-2xl mx-2 pb-1 text-gradientyfrom font-dancing">
            Karthick
          </span>
        </h1>
      </footer>
    </>
  );
};

export default Footer;
