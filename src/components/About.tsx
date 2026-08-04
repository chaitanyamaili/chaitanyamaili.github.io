import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import SectionTitle from "./SectionTitle";

type AboutProps = {
  aboutMe: string;
};

const About = ({ aboutMe }: AboutProps) => {
  const paragraphs = aboutMe.split("\n\n").filter(Boolean);
  return (
    <section id="about" className="mb-8">
      <SectionTitle title="About Me" icon={UserRound} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-card p-6 rounded-lg border border-border shadow-md"
      >
        <div className="space-y-4 text-muted-foreground print:text-black print:text-[11pt] print:leading-[1.4]">
          {paragraphs.map((para, i) => (
            <p key={i} className="leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
