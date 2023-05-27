import React from "react";

const Skills = () => {
  const skillDetails = [
    {
      icon: "C",
      iconURL: "https://skillicons.dev/icons?i=c",
    },
    {
      icon: "C++",
      iconURL: "https://skillicons.dev/icons?i=cpp",
    },
    {
      icon: "Python",
      iconURL: "https://skillicons.dev/icons?i=cpp",
    },
    {
      icon: "SQL",
      iconURL: "https://skillicons.dev/icons?i=mysql",
    },
    {
      icon: "VSCode",
      iconURL: "https://skillicons.dev/icons?i=vscode",
    },
    {
      icon: "HTML",
      iconURL: "https://skillicons.dev/icons?i=html",
    },
    {
      icon: "CSS",
      iconURL: "https://skillicons.dev/icons?i=css",
    },
    {
      icon: "JavaScript",
      iconURL: "https://skillicons.dev/icons?i=js",
    },
    {
      icon: "React JS",
      iconURL: "https://skillicons.dev/icons?i=react",
    },
  ];

  return (
    <div
      id="skills"
      className="bg-[#343434] flex justify-evenly items-center py-[13px]"
    >
      {skillDetails.map((item) => (
        <section className="flex gap-2">
          <span className="text-[#ffee32]">★</span>
          <p className="text-white text-base font-bold">{item.icon}</p>
        </section>
      ))}
    </div>
  );
};

export default Skills;

//ffe5ec
