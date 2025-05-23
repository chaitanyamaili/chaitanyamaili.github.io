import { motion } from "framer-motion";
import { Code } from "lucide-react";
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
    <SectionTitle title="Projects" icon={Code} />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-gray-800/50 rounded-lg border border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white">
                {project.title}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {project.tech}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
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