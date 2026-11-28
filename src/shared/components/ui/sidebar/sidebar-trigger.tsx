"use client"

import * as React from "react"
import { SidebarIcon } from "@phosphor-icons/react"
import { cn } from "@/shared/lib/utils/tailwind-cn"

import { Button } from "@/shared/components/ui/button"
import { useSidebar } from "./sidebar-context"

export function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon-sm"
      className={cn(className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <SidebarIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}