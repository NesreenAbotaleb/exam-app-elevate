import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cn } from "@/shared/lib/utils/tailwind-cn"

export function BreadcrumbLink({
  className,
  render,
  ...props
}: useRender.ComponentProps<"a">) {
  return useRender({
    defaultTagName: "a",
    props: mergeProps<"a">(
      {
        className: cn(
          "text-gray-500 transition-colors hover:text-blue-600 focus-visible:text-blue-600 focus-visible:outline-none",
          className
        ),
      },
      props
    ),
    render,
    state: { slot: "breadcrumb-link" },
  })
}