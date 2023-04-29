import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

interface ISectionTitle {
  subText: string;
  headText: string;
}

const SectionTitle = ({ subText, headText }: ISectionTitle) => {
  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>{subText}</p>

      <h2 className={styles.sectionHeadText}>{headText}.</h2>
    </motion.div>
  );
};

export default SectionTitle;
