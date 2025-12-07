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
          className="bg-card p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
          <h4 className="text-muted-foreground">{edu.institution}</h4>
          <p className="text-muted-foreground text-sm">{edu.dates}</p>
          {edu.description && (
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
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
