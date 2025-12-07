import { LucideIcon } from "lucide-react";
import { cn } from './../lib/utils';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  className?: string;
};

const SectionTitle = ({ title, subtitle, icon: Icon, className }: SectionTitleProps) => (
  <div className={cn("mb-6", className)}>
    <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
      {Icon && <Icon className="w-5 h-5 text-muted-foreground" />}
      {title}
      <div className="h-[1px] bg-border flex-1 ml-2" />
    </h2>
    {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
  </div>
);

export default SectionTitle;
