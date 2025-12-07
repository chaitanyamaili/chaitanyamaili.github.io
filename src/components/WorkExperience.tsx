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
          className="bg-card p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
          <h4 className="text-muted-foreground">{exp.company}</h4>
          {exp.dates && (
          <p className="text-muted-foreground text-sm mb-2">{exp.dates}</p>
          )}
          {exp.description && (
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
          )}
        </motion.div>
      ))}
    </div>
  </section>
);

export default WorkExperience;
