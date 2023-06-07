import React from "react";
import Footer from "../Footer/Footer";

const Aboutsite = () => {
  const packagesUsed = [
    {
      name: "TailwindCSS",
      url: "https://tailwindcss.com/",
    },
    {
      name: "Framer-Motion",
      url: "https://www.framer.com/motion/",
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
    },
  ];

  const impLinks = [
    {
      name: "Github",
      url: "https://github.com/karthi-98",
    },
    {
      name: "Linkedln",
      url: "https://www.linkedin.com/in/karthick-p-878063130/",
    },
    {
      name: "Download Resume",
      url: "https://filebin.net/iglmleibk1h2jtjp/Karthick_P_Resume_May_30.pdf",
    },
  ];

  const contactDetails = [
    {
      name: "+918838143550",
      url: "tel:+918838143550",
    },
    {
      name: "karthi.98p@gmail.com",
      url: "mailto:karthi.98p@gmail.com",
    },
  ];

  return (
    <div className="bg-[#1a1a1a] py-4 text-white">
      <div
        id="links"
        className="h-fit flex gap-[8vw] justify-start py-14 pl-20 font-jost mobile:grid mobile:grid-cols-2 mobile:gap-10 mobile:pl-8"
      >
        <div className="flex flex-col gap-5">
          <h1 className="text-lg font-poppins font-bold">Packages Used</h1>
          {packagesUsed.map((item) => (
            <a
              className="text-[15px] hover:text-yellow"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-lg font-poppins font-bold">Important Links</h1>
          {impLinks.map((item) => (
            <a
              className="text-[15px] hover:text-yellow"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-lg font-poppins font-bold">Contact Details</h1>
          {contactDetails.map((item) => (
            <a
              className="text-[15px] hover:text-yellow"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutsite;
