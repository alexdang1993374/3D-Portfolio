/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

const Works = () => {
  return (
    <>
      <SectionTitle subText="My work" headText="Personal Projects" />

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following full stack projects showcase my skills and expertise
          through real-world examples of my personal work. Each project is
          briefly described with links to code repositories and live demos. They
          reflect my ability to solve complex problems, work with different
          technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index + 1}`}
            index={index}
            project={project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper({ Component: Works, idName: "" });
