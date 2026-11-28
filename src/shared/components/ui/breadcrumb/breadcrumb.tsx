import * as React from "react"
import { cn } from "@/shared/lib/utils/tailwind-cn"

export function Breadcrumb({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      className={cn("w-full", className)}
      {...props}
    />
  )
}