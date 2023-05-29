import React from "react";

const Skills = () => {
  const skillDetails = [
    "C",
    "C++",
    "Python",
    "SQL",
    "Shell Sciprt",
    "VSCode",
    "HTML",
    "CSS",
    "Javascript",
    "React JS",
  ];

  return (
    <div
      id="skills"
      className="bg-[#343434] flex justify-evenly items-center py-[13px] mobile:grid mobile:grid-cols-2 mobile:gap-5 mobile:py-10 mobile:pl-16"
    >
      {skillDetails.map((item) => (
        <section className="flex gap-2">
          <span className="text-[#ffee32]">★</span>
          <p className="text-white text-base font-bold">{item}</p>
        </section>
      ))}
    </div>
  );
};

export default Skills;

//ffe5ec
