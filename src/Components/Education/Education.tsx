import React from "react";

const Education = () => {
  const education = [
    {
      edu: "B.E Computer Science and Engineering",
      institution: "Velalar College of Engineering and technology",
      passedout: "2020",
      percentage: "82%",
    },
    {
      edu: "HSC",
      institution: "S.V.N Matriculation and Hr. Secondary School",
      passedout: "2016",
      percentage: "80%",
    },
    {
      edu: "SSLC",
      institution: "S.V.N Matriculation and Hr. Secondary School",
      passedout: "2014",
      percentage: "93%",
    },
  ];

  return (
    <div
      id="education"
      className="px-3 py-12 pb-16 bg-[#ffffff] flex flex-col w-full gap-12 shadow-inner"
    >
      <h1 className="text-black font-dancing font-thin text-[1.8rem] text-center">
        My
        <span className="text-gradientyfrom text-[2rem] font-bold mx-3">
          Education
        </span>
        Details
      </h1>
      <div className="flex justify-center gap-14 mobile:flex-col mobile:px-5">
        {education.map((item) => (
          <section className="flex flex-col gap-4 bg-white text-black px-8 py-5 rounded-lg transition-all duration-300 shadow-lg ">
            <p className="font-bold text-[1.1rem]">{item.edu}</p>
            <p className="font-jost">{item.institution}</p>
            <p className="font-dancing font-bold">Batch - {item.passedout}</p>
            <p>
              Percentage - <strong>{item.percentage}</strong>
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Education;

// shadow-[8px_8px_0_-1px_#ffed27] hover:shadow-[12px_12px_0_-1px_#ffed27]
