import { UserRound } from "lucide-react";
import SectionTitle from "./SectionTitle";
type AboutProps = {
  aboutMe: string;
};
const About = ({ aboutMe }: AboutProps) => {
  return (
    <section id="about" className="mb-8">
      <SectionTitle title="About Me" icon={UserRound} />
      <p className="text-muted-foreground text-sm leading-relaxed print:text-black print:text-[11pt] print:leading-[1.4]">
        {aboutMe}
      </p>
    </section>
  );
};

export default About;
