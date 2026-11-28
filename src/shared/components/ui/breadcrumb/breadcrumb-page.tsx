import * as React from "react"
import { cn } from "@/shared/lib/utils/tailwind-cn"

export function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-blue-600", className)}
      {...props}
    />
  )
}