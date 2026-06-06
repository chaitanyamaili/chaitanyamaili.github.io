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
      <div className="space-y-3">
        {paragraphs.map((para, i) => (
          <p key={i} className="text-muted-foreground text-sm leading-relaxed print:text-black print:text-[11pt] print:leading-[1.4]">
            {para}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
