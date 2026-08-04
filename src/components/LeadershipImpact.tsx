import { motion } from "framer-motion"
import { Users } from "lucide-react"
import SectionTitle from "./SectionTitle"

type LeadershipStat = {
  value: string
  label: string
  sub?: string
}

type LeadershipData = {
  stats: LeadershipStat[]
  highlights: string[]
}

const LeadershipImpact = ({ leadership }: { leadership: LeadershipData }) => (
  <section>
    <SectionTitle title="Leadership Impact" icon={Users} />
    <div className="space-y-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {leadership.stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card border border-border rounded-lg p-4 text-center shadow-sm"
          >
            <div className="text-3xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm font-medium text-foreground mt-1">{stat.label}</div>
            {stat.sub && (
              <div className="text-xs text-muted-foreground mt-1">{stat.sub}</div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="bg-card border border-border rounded-lg p-6 shadow-sm"
      >
        <ul className="space-y-3">
          {leadership.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
)

export default LeadershipImpact
