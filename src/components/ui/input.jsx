import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-full border border-yellow-800 bg-transparent px-3 py-1 text-base text-yellow-950 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-yellow-950 placeholder:text-yellow-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-yellow-800 dark:file:text-yellow-50 dark:placeholder:text-yellow-400 dark:focus-visible:ring-yellow-300 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
