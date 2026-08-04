import { motion } from "framer-motion"
import { BookOpen, ArrowRight } from "lucide-react"
import SectionTitle from "./SectionTitle"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"

type BlogSeries = {
  title: string
  description: string
  parts: number
  url: string
  tags: string[]
}

const BlogSection = ({ blogSeries }: { blogSeries: BlogSeries[] }) => (
  <section>
    <SectionTitle
      title="Writing"
      icon={BookOpen}
      subtitle="In-depth technical series on cloud-native engineering, AI systems, and platform leadership."
    />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {blogSeries.map((series, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="transition-transform hover:scale-[1.02] h-full"
        >
          <a
            href={series.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader className="pb-3">
                <div className="mb-2">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    Series &middot; {series.parts} {series.parts === 1 ? "part" : "parts"}
                  </span>
                </div>
                <CardTitle className="text-base font-semibold text-foreground leading-snug">
                  {series.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {series.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-0">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {series.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read series <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </CardContent>
            </Card>
          </a>
        </motion.div>
      ))}
    </div>
  </section>
)

export default BlogSection
