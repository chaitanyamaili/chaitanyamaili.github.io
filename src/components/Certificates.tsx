import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react"; // Using 'Award' icon for certificates
import SectionTitle from "./SectionTitle";

type Certificate = {
  title: string;
  authority?: string; // Optional issuing body
  link?: string;      // Optional verification link
};

const Certificates = ({ certificates }: { certificates: Certificate[] }) => {
  if (!certificates || certificates.length === 0) {
    return null;
  }

  return (
    <section>
      {/* Using the Award icon for Certificates section title */}
      <SectionTitle title="Certificates & Licenses" icon={Award} />
          <div className="space-y-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-card p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              {/* Certificate Title */}
              <h3 className="text-xl font-semibold text-primary/80">
                {cert.title}
              </h3>

              {/* Verification Link (if provided) */}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-foreground transition-colors duration-200 flex items-center gap-1 text-sm font-medium"
                  aria-label={`View ${cert.title} verification`}
                >
                  Verify
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Issuing Authority (if provided) */}
            {cert.authority && (
              <h4 className="text-muted-foreground italic text-base">
                Issued by: {cert.authority}
              </h4>
            )}
            
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;