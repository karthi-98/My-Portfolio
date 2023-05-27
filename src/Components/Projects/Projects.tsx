import { images } from "../../Constants/constants";
import ProjectCard from "./ProjectCard";
import profileData from "../../profileData.json";

const Projects = () => {
  return (
    <div
      id="profExp"
      className=" py-12 pt-[2.8rem]  flex flex-col items-center gap-5"
    >
      <h1 className="text-center text-[1.4rem] font-jost font-light">
        Overall &nbsp;
        <span className="font-dancing text-[2.2rem] font-bold">Experience</span>
      </h1>
      <section className="grid grid-cols-2 justify-center pt-2">
        <img src={images.exp} className="h-[15rem]" alt="Experience logo" />
        <aside className="pt-[1rem]">
          <h1 className="w-[25rem] leading-10 text-center">
            I have
            <strong className="bg-yellow py-1 px-2 rounded-lg mx-2">
              2.6 years
            </strong>
            of experience in software development, where I have honed my skills
            in various technologies and delivered high-quality solutions for
            diverse clients.
          </h1>
        </aside>
      </section>
      <section className="shadow-xl flex items-center text-[1rem] border-dashed border-2 border-[#898989] rounded-lg px-10 pb-2 mt-2">
        <h1 className="pt-2">Companies I worked on : </h1>
        <img src={images.wipro} className="h-12" alt="Wipro logo" />
      </section>
      <section className=" py-10 px-10 mx-3 flex flex-col gap-8">
        <div className=" flex gap-2">
          <img src={images.wipro} className="h-14" alt="Wipro logo" />
          <span className="pt-2 text-center text-[2rem]  font-jost font-light">
            Experience
          </span>
        </div>
        <div className="flex items-center text-[1.1rem]">
          Project :
          <h1 className="bg-yellow px-3 py-1 ml-2 rounded-lg font-bold">
            Walmart
          </h1>
          <h1 className="bg-[#ffee32] text-[#4f4a10] px-3 py-2 ml-2 rounded-lg text-sm font-bold">
            2 Yrs
          </h1>
        </div>
        <div className="flex gap-8">
          {profileData.walmart.map((project, index) => (
            <ProjectCard
              role={project.role}
              date={project.date}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
