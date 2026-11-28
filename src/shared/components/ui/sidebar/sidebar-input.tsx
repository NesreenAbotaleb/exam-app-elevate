import * as React from "react"
import { cn } from "@/shared/lib/utils/tailwind-cn"

import { Input } from "@/shared/components/ui/input"

export function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("h-8 w-full bg-background shadow-none", className)}
      {...props}
    />
  )
}