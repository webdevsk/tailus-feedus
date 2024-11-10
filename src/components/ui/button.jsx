import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300",
  {
    variants: {
      variant: {
        default:
          "bg-yellow-300 text-yellow-900 shadow hover:bg-yellow-100 dark:bg-yellow-50 dark:text-yellow-900 dark:hover:bg-yellow-50/90",
        destructive:
          "bg-red-500 text-zinc-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90",
        outline:
          "border border-yellow-200 bg-white shadow-sm hover:bg-yellow-100 hover:text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:hover:bg-yellow-800 dark:hover:text-yellow-50",
        secondary:
          "bg-yellow-700 text-yellow-50 hover:bg-yellow-600 shadow-sm dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
        ghost:
          "text-yellow-800 transition focus:bg-yellow-100 active:bg-yellow-200 hover:bg-yellow-100  dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
        link: "hover:text-yellow-700 dark:text-zinc-50",
      },
      size: {
        default: "h-11 px-6 text-sm font-semibold",
        sm: "h-8 rounded-full px-4 text-xs text-sm font-medium",
        lg: "h-12 rounded-full px-8 text-xl font-semibold",
        icon: "h-9 w-9 text-sm font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
