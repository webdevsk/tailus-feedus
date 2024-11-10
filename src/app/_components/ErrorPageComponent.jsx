import Link from "next/link"
import { useEffect } from "react"

export function ErrorPageComponent({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="relative grid min-h-dvh w-full place-items-center bg-yellow-50 pt-12">
      <div className="max-w-lg py-4">
        <h1 className="mb-2 text-6xl font-bold text-red-500 lg:text-8xl">
          500
        </h1>
        <h2 className="text-2xl font-semibold text-red-800 lg:text-4xl">
          Oops, something went wrong
        </h2>
        <button
          onClick={reset}
          className="mt-12 block w-full rounded-full bg-yellow-300 px-6 py-4 text-center text-base font-semibold text-yellow-900 transition-colors hover:bg-yellow-100 lg:mt-24"
        >
          Go Back Home
        </button>
      </div>
    </section>
  )
}
