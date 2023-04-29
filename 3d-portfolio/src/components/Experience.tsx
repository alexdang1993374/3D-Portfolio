/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import ExperienceCard from "./ExperienceCard";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  return (
    <>
      <SectionTitle
        subText="What I have done so far"
        headText="Work Experience"
      />

      <motion.div
        variants={slideIn("down", "tween", 0.2, 1)}
        className="mt-20 flex flex-col"
      >
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index + 1}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default SectionWrapper({ Component: Experience, idName: "work" });
