import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Settings2 } from "lucide-react";

const Skills = ({ skills }: { skills: string[] }) => (
  <section>
    <SectionTitle title="Skills" icon={Settings2} />
    <div className="skills-flex flex flex-wrap gap-4 print:hidden">
      {skills.map((skill, index) => (
        <motion.span key={index} className="bg-muted text-foreground px-4 py-2 rounded-full border border-border shadow-sm">
          {skill}
        </motion.span>
      ))}
    </div>
    <p className="skills-print hidden print:block">
      {skills.join(', ')}
    </p>
  </section>
);

export default Skills;