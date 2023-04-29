/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { services } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "./ServiceCard";
import { SectionWrapper } from "../hoc";

const About = () => {
  const delay = 0;

  return (
    <>
      <motion.div variants={textVariant(delay)}>
        <p className={styles.sectionSubText}>Introduction</p>

        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with expertise in TypeScript,
        JavaScript, and React, and experience in frameworks like Node.js and
        Next.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper({ Component: About, idName: "about" });
