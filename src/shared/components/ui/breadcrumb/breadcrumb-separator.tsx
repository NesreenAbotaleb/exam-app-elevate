import * as React from "react"
import { cn } from "@/shared/lib/utils/tailwind-cn"

export function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("text-gray-400 select-none", className)}
      {...props}
    >
      {children ?? "/"}
    </li>
  )
}