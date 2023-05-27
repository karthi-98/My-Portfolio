import React from "react";
import { motion } from "framer-motion";

type projectCardMain = {
  role: string;
  date: string;
  description: string[];
  onClick: () => void;
};

const ProjectCardMain = (props: projectCardMain) => {
  const zoomIn = {
    hidden: {
      // y: "-100vh",
      scale: 0,
      opacity: 0,
    },
    visible: {
      // y: "0",
      scale: 1,
      opacity: 1,
    },
    exit: { scale: 0, opacity: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={props.onClick}
      className={`absolute left-0 top-0 backdrop-blur-md bg-black/70  h-[2025px] w-full flex items-center justify-center`}
    >
      <motion.div
        variants={zoomIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`sticky top-[10%] bottom-[10%] h-[80vh] w-[50vw] bg-white rounded-lg`}
      >
        <div className="flex flex-col gap-5 px-8 pt-8 pb-5">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-medium font-jost text-2xl bg-gradient-to-tr from-gradientyfrom to-yellow px-3 py-2 w-fit rounded-lg"
          >
            {props.role}
          </motion.h1>
          <p className="font-medium font-jost">{props.date}</p>
        </div>
        <div className="bg-gradient-to-r from-gradientyfrom to-yellow h-[2px]"></div>
        <div className="px-8 flex flex-col gap-3 pt-5">
          <h1 className="font-bold">Role Responsibilites : </h1>
          <div className="px-5">
            {props.description.map((item) => (
              <li>{item}</li>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCardMain;
