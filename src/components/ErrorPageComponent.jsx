import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function ErrorPageComponent({ error, reset }) {
  const pathname = usePathname()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="relative h-dvh w-full bg-yellow-50">
      <div className="absolute inset-0 grid grid-cols-1 place-content-center p-4 xl:grid-cols-2">
        <div className="mb-48 xl:col-[2/3]">
          <h1 className="text-red">500</h1>
          <h2 className="">Oops, something went wrong</h2>
          {pathname !== "/" && (
            <Link
              href={"/"}
              className="rounded-full bg-yellow-300 px-6 py-4 text-yellow-900 transition-colors hover:bg-yellow-100"
            >
              Go To Homepage
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
