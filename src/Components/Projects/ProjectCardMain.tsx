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
      x: "-100vw",
    },
    visible: {
      x: "0",
      transition: {
        damping: 1,
      },
    },
    exit: { x: "100vw" },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={props.onClick}
      className={`absolute top-0 left-0 backdrop-blur-md bg-black/70  w-full h-[2630px] flex items-center justify-center mobile:h-[4630px]`}
    >
      <motion.div
        variants={zoomIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`sticky top-[10%] bottom-[10%] h-fit w-[50vw] bg-white rounded-lg mobile:w-[85vw] pb-8 mobile:top-[5%] mobile:bottom-[5%]`}
      >
        <div className="flex flex-col gap-5 px-8 pt-8 pb-5 mobile:px-5">
          <h1 className="font-medium font-jost text-xl bg-gradient-to-tr from-gradientyfrom to-yellow px-3 py-2 w-fit rounded-lg mobile:text-lg">
            {props.role}
          </h1>
          <p className="font-medium font-jost">{props.date}</p>
        </div>
        <div className="bg-gradient-to-r from-gradientyfrom to-yellow h-[2px]"></div>
        <div className="px-8 flex flex-col gap-3 pt-5 mobile:px-5">
          <h1 className="font-bold">Role Responsibilites : </h1>
          <div className="px-5 mobile:px-3">
            {props.description.map((item) => (
              <li className="leading-8 text-[.93rem] mobile:text-md mobile:leading-7">{`${item}`}</li>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCardMain;
