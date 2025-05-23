import { LucideIcon } from "lucide-react";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
};

const SectionTitle = ({ title, subtitle, icon: Icon }: SectionTitleProps) => (
  <div className="mb-6">
    <h2 className="text-2xl font-semibold text-gray-200 flex items-center gap-2">
      {Icon && <Icon className="w-5 h-5 text-gray-400" />}
      {title}
      <div className="h-[1px] bg-gray-700 flex-1 ml-2" />
    </h2>
    {subtitle && <p className="text-gray-400 mt-1">{subtitle}</p>}
  </div>
);

export default SectionTitle;