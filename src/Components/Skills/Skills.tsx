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
    <div className="bg-[#343434] w-full mobile:flex mobile:justify-center">
      <div
        id="skills"
        className=" flex justify-evenly items-center py-[13px] mobile:inline-grid mobile:grid-cols-2 mobile:gap-5 mobile:gap-x-[5rem] mobile:py-10 mobile:pl-12"
      >
        {skillDetails.map((item) => (
          <section className="flex w-fit gap-2">
            <span className="text-[#ffee32]">★</span>
            <p className="text-white text-base font-bold">{item}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Skills;
