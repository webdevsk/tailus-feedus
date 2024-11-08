import { cn } from "@/lib/utils"

export function SectionHeading({ className, ...rest }) {
  return (
    <h1
      className={cn(
        "text-center text-2xl font-bold capitalize text-yellow-900 lg:text-4xl",
        className
      )}
      {...rest}
    ></h1>
  )
}
