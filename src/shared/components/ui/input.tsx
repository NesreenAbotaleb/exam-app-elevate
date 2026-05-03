import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "@/shared/lib/utils/tailwind-cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        // layout & base
        "h-11.5 w-full min-w-0 bg-transparent px-3.5 py-2.5",
        // border
        "border border-gray-200 rounded-none outline-none",
        // text
        "text-xs placeholder:text-muted-foreground",
        // focus
        "focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20",
        // error
        "aria-invalid:border-red-500 aria-invalid:ring-1 aria-invalid:ring-red-500/20",
        // disabled
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        // transitions
        "transition-colors",
        className
      )}
      {...props}
    />
  )
}

export { Input }