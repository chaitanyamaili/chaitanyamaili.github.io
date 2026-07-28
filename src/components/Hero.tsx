import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, BookOpen } from "lucide-react"
import IconLink from "./IconLink"
import ThemeToggle from "./ThemeToggle"

type HeroProps = {
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
}

const Hero = ({
  name,
  title,
  email,
  location,
  phone,
  github,
  githubWork,
  linkedin,
  twitter,
  profilePicture,
}: HeroProps) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <header className="flex flex-col md:flex-row items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-full overflow-hidden w-40 h-40 border-4 border-gray-300 dark:border-gray-700 shadow-lg"
        >
          <img
            src={profilePicture}
            alt={name}
            className="object-cover w-full h-full"
          />
        </motion.div>

        <div className="text-center md:text-left space-y-2">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{name}</h1>
          <h2 className="text-xl text-gray-600 dark:text-gray-300">{title}</h2>

          <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mt-2">
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              {email}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {location}
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              {phone}
            </span>
          </div>

          <div className="flex gap-4 justify-center md:justify-start mt-4 social-icons">
            <IconLink href={github} icon={Github} label="GitHub" />
            {githubWork && (
              <a
                href={githubWork}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (Work)"
                className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1"
              >
                <Github className="w-5 h-5" />
                <span className="text-xs font-medium">Work</span>
              </a>
            )}
            <IconLink href={linkedin} icon={Linkedin} label="LinkedIn" />
            {twitter && <IconLink href={twitter} icon={Twitter} label="Twitter" />}
            <IconLink href="https://chaitanyamaili.in/blogs/" icon={BookOpen} label="Blog" />
            <ThemeToggle />
          </div>
        </div>
      </header>
    </section>
  )
}

export default Hero