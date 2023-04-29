/* eslint-disable react-refresh/only-export-components */
// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import SectionTitle from "./SectionTitle";

const Tech = () => {
  return (
    <>
      <SectionTitle
        subText="Technology I'm skilled with"
        headText="My Expertise"
      />

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          // <div className="w-28 h-28" key={technology.name}>
          //   <BallCanvas icon={technology.icon} />
          // </div>
          <Tilt key={technology.name} tiltMaxAngleX={30} tiltMaxAngleY={30}>
            <motion.div
              variants={textVariant()}
              className="dark-green-pink-gradient w-20 h-20 rounded-full flex justify-center items-center"
            >
              <img
                src={technology.icon}
                alt="technology-icon"
                className="w-1/2 h-1/2 object-contain"
              />
            </motion.div>
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper({ Component: Tech, idName: "" });
