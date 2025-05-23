import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionTitle from "./SectionTitle";

type Experience = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

const WorkExperience = ({ experiences }: { experiences: Experience[] }) => (
  <section>
    <SectionTitle title="Work Experience" icon={Briefcase} />
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
          <h4 className="text-gray-400">{exp.company}</h4>
          <p className="text-gray-500 text-sm mb-2">{exp.dates}</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default WorkExperience;