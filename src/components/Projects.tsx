import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import SectionTitle from "./SectionTitle";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

type Project = {
  title: string;
  tech: string;
  description: string;
  link?: string;
};

const Projects = ({ projects }: { projects: Project[] }) => (
  <section>
    <SectionTitle title="Engineering Initiatives" icon={Layers} subtitle="Selected projects — framed around team, delivery, and org impact." />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="transition-transform hover:scale-[1.02]"
        >
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">
                {project.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {project.tech}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  View Project
                </a>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
