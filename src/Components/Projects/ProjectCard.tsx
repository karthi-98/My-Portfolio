import { AnimatePresence } from "framer-motion";
import React from "react";
import { useState } from "react";
import ProjectCardMain from "./ProjectCardMain";

type projectCard = {
  role: string;
  date: string;
  description: string[];
};

const ProjectCard: React.FC<projectCard> = ({ role, date, description }) => {
  const [isOpen, setisOpen] = useState(false);
  const expDesign =
    "rounded-lg border-2 border-black flex flex-col gap-2 pt-[4rem] pb-3  pl-5 pr-[5rem] font-medium transition-all duration-200 cursor-pointer hover:shadow-2xl hover:bg-gradient-to-tr from-gradientyfrom to-yellow";

  const pDesign = "underline underline-offset-4 text-sm font-normal font-jost";
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <ProjectCardMain
            onClick={() => setisOpen(!isOpen)}
            description={description}
            role={role}
            date={date}
          />
        )}
      </AnimatePresence>
      <div onClick={() => setisOpen(!isOpen)} className={`${expDesign}`}>
        <h1 className="text-lg">{role}</h1>
        <p className="text-[12px] font-thin">{date}</p>
        <p className={`${pDesign}`}>View More &rarr;</p>
      </div>
    </>
  );
};

export default ProjectCard;
