import * as React from "react"
import { cn } from "@/shared/lib/utils/tailwind-cn"


export function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "flex flex-wrap items-center gap-2 font-mono text-base text-gray-500 wrap-break-word",
        className
      )}
      {...props}
    />
  )
}