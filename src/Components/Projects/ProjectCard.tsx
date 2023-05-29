import { AnimatePresence } from "framer-motion";
import React from "react";
import { useState } from "react";
import useScrollLock from "../../Custom Hooks/useScrollLock";
import ProjectCardMain from "./ProjectCardMain";

type projectCard = {
  role: string;
  date: string;
  description: string[];
};

const ProjectCard: React.FC<projectCard> = ({ role, date, description }) => {
  // const [scrollLock, toggle] = useScrollLock();
  const [isOpen, setisOpen] = useState(false);
  const [scrollLock, setScrollLock] = useState(false);

  const functionCALL = () => {
    if (scrollLock) {
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }
    setScrollLock((prevState) => !prevState);
    setisOpen((prevState) => !prevState);
  };
  const expDesign =
    "rounded-lg flex flex-col shadow-lg gap-2 pt-[4rem] pb-5  pl-5 pr-[5rem] font-medium transition-all duration-200 cursor-pointer hover:shadow-2xl hover:bg-gradient-to-tr from-gradientyfrom to-yellow";

  const pDesign = "underline underline-offset-4 text-sm font-normal font-jost";
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <ProjectCardMain
            onClick={functionCALL}
            description={description}
            role={role}
            date={date}
          />
        )}
      </AnimatePresence>
      <div onClick={functionCALL} className={`${expDesign}`}>
        <h1 className="text-lg">{role}</h1>
        <p className="text-[12px] font-thin">{date}</p>
        <p className={`${pDesign}`}>View More &rarr;</p>
      </div>
    </>
  );
};

export default ProjectCard;
