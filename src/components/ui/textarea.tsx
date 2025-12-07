import * as React from "react"
import { cn } from "./../../lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // Base styles
        "flex min-h-16 w-full resize-y rounded-md border px-3 py-2 text-base shadow-xs transition-[background,border,color,box-shadow] outline-none md:text-sm",
        // Light/dark mode compatibility
        "bg-background text-foreground placeholder:text-muted-foreground border-input",
        // Focus & accessibility
        "focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        // Disabled state
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
