import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const Skills = ({ skills }: { skills: string[] }) => (
  <section>
    <SectionTitle title="Skills" />
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="bg-gray-700/80 text-gray-300 px-4 py-2 rounded-full border border-gray-600 shadow-sm"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </section>
);

export default Skills;