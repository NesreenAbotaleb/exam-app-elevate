import * as React from "react"
import { DotsThreeIcon } from "@phosphor-icons/react"
import { cn } from "@/shared/lib/utils/tailwind-cn"

export function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn(
        "flex size-5 items-center justify-center text-gray-500 [&>svg]:size-4",
        className
      )}
      {...props}
    >
      <DotsThreeIcon />
      <span className="sr-only">More</span>
    </span>
  )
}