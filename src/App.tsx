import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import WorkExperience from "./components/WorkExperience"
import Education from "./components/Education"
import ContactForm from "./components/ContactForm"
import Certificate from "./components/Certificates"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

type CVData = {
  name: string
  title: string
  email: string
  location: string
  phone: string
  github: string
  githubWork?: string
  linkedin: string
  twitter?: string
  profilePicture: string
  aboutMe: string
  workExperience: {
    title: string
    company: string
    dates: string
    description: string[]
  }[]
  education: {
    degree: string
    institution: string
    dates: string
    description?: string[]
  }[]
  projects: {
    title: string
    description: string
    tech: string
    link?: string
  }[]
  certificates: {
    title: string
    authority?: string
    link?: string
  }[]
  skills: string[]
}

function App() {
  const [cvData, setCvData] = useState<CVData | null>(null)

  useEffect(() => {
    fetch("/cv.json")
      .then((res) => res.json())
      .then((data: CVData) => setCvData(data))
      .catch((err) => console.error("Error loading CV data:", err))
  }, [])

  if (!cvData) return <div className="text-center mt-20 text-gray-400">Loading...</div>

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
          githubWork={cvData.githubWork}
          linkedin={cvData.linkedin}
          twitter={cvData.twitter}
          profilePicture={cvData.profilePicture}
        />
      </motion.div>

      <motion.div {...fadeIn}>
        <About aboutMe={cvData.aboutMe} />
      </motion.div>

      <motion.div {...fadeIn}>
        <Skills skills={cvData.skills} />
      </motion.div>

      <motion.div {...fadeIn}>
        <WorkExperience experiences={cvData.workExperience} />
      </motion.div>

      <motion.div {...fadeIn}>
        <Projects projects={cvData.projects} />
      </motion.div>

      <motion.div {...fadeIn}>
        <Education education={cvData.education} />
      </motion.div>

      <motion.div {...fadeIn}>
        <Certificate certificates={cvData.certificates} />
      </motion.div>

      <motion.div {...fadeIn}>
        <ContactForm />
      </motion.div>
    </main>
  )
}

export default App
