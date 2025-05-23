import { ComponentType } from "react"

type IconLinkProps = {
  href: string
  icon: ComponentType<{ className?: string }>
  label: string
}

const IconLink = ({ href, icon: Icon, label }: IconLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </a>
)

export default IconLink