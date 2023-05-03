import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { github, websitePic } from "../assets";
import { IProject } from "../constants";
import { fadeIn } from "../utils/motion";
import ProjectLink from "./ProjectLink";

interface IProjectCard {
  index: number;
  project: IProject;
}

const ProjectCard = ({ index, project }: IProjectCard) => {
  const { name, description, tags, image, source_code_link, website } = project;
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        // @ts-expect-error: Suppressing TypeScript error due to incorrect library type definitions
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            <ProjectLink link={website} image={websitePic} />

            {source_code_link !== "" && (
              <ProjectLink link={source_code_link} image={github} />
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>

          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
