import { motion } from "framer-motion"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import WorkExperience from "./components/WorkExperience"
import Education from "./components/Education"
import ContactForm from "./components/ContactForm"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const cvData = {
  name: "Chaitanya Maili",
  title: "Staff Engineer",
  email: "chaitanya.maili@gmail.com",
  location: "Bangalore, India",
  phone: "+91 9902873567",
  github: "https://github.com/chaitanyamaili",
  linkedin: "https://www.linkedin.com/in/chaitanyamaili/",
  twitter: "https://twitter.com/johndoe",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQHBzOdm3Yo7mQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718682737126?e=1753315200&v=beta&t=J0ueF4SK75xdAmPB8ALaEOp7laE6xMPqMWLvp8GX6pE",
  workExperience: [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovators Inc.",
      dates: "2020 - Present",
      description: [
        "Developed and maintained web applications using React and Node.js.",
        "Led a team of 5 engineers in delivering a critical project on time.",
        "Implemented RESTful APIs and integrated with various backend services.",
        "Improved application performance by 30% through code optimization.",
      ],
    },
    {
      title: "Software Developer",
      company: "Code Wizards Co.",
      dates: "2018 - 2020",
      description: [
        "Built and maintained e-commerce websites using JavaScript and PHP.",
        "Collaborated with designers to create user-friendly interfaces.",
        "Troubleshooted and resolved software defects.",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Tech",
      dates: "2016 - 2018",
      description: [
        "Specialized in Web Development and Database Systems.",
        "GPA: 3.8/4.0",
      ],
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State College",
      dates: "2012 - 2016",
    },
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce website with user authentication, product catalog, shopping cart, and checkout functionality.",
      tech: "React, Node.js, Express, PostgreSQL",
      link: "https://github.com/johndoe/ecommerce-platform",
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "A dashboard for visualizing data using interactive charts and graphs.",
      tech: "React, D3.js",
      link: "https://github.com/johndoe/data-dashboard",
    },
    {
      title: "Mobile Task Manager",
      description: "A mobile app for managing tasks and to-do lists.",
      tech: "React Native",
      link: "https://github.com/johndoe/task-manager-app",
    },
  ],
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "HTML",
    "CSS",
    "Git",
    "Docker",
    "AWS",
    "TypeScript",
    "GraphQL",
    "Redux",
    "Tailwind CSS",
    "Next.js",
  ],
}

function App() {
  return (
    <main className="space-y-12 px-4 py-8 max-w-4xl mx-auto">
      <motion.div {...fadeIn}>
        <Hero
          name={cvData.name}
          title={cvData.title}
          email={cvData.email}
          location={cvData.location}
          phone={cvData.phone}
          github={cvData.github}
          linkedin={cvData.linkedin}
          twitter={cvData.twitter}
          profilePicture={cvData.profilePicture}
        />
      </motion.div>

      <motion.div {...fadeIn}>
        <About />
      </motion.div>

      <motion.div {...fadeIn}>
        <Skills skills={cvData.skills} />
      </motion.div>

      <motion.div {...fadeIn}>
        <Projects projects={cvData.projects} />
      </motion.div>

      <motion.div {...fadeIn}>
        <WorkExperience experiences={cvData.workExperience} />
      </motion.div>

      <motion.div {...fadeIn}>
        <Education education={cvData.education} />
      </motion.div>

      <motion.div {...fadeIn}>
        <ContactForm /> {/* ✅ no props needed */}
      </motion.div>
    </main>
  )
}

export default App