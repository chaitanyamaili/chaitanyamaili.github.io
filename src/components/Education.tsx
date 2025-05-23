import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionTitle from "./SectionTitle";

type EducationEntry = {
  degree: string;
  institution: string;
  dates: string;
  description?: string[];
};

const Education = ({ education }: { education: EducationEntry[] }) => (
  <section>
    <SectionTitle title="Education" icon={GraduationCap} />
    <div className="space-y-6">
      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
          <h4 className="text-gray-400">{edu.institution}</h4>
          <p className="text-gray-500 text-sm">{edu.dates}</p>
          {edu.description && (
            <ul className="list-disc list-inside text-gray-300 space-y-1 mt-2">
              {edu.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  </section>
);

export default Education;