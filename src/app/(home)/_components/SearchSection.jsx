"use client"
import { SectionHeading } from "@/components/SectionHeading"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function SearchSection() {
  const [q, setQ] = useState("")
  const router = useRouter()

  function submitAction(e) {
    e.preventDefault()
    router.push("/meals?query=" + q)
  }
  return (
    <section>
      <div className="container space-y-8">
        <SectionHeading>Search for your favourite meal</SectionHeading>
        <form action="" onSubmit={submitAction}>
          <div className="relative flex rounded-full border border-yellow-200 bg-white p-1 shadow-md md:p-2">
            <input
              placeholder="Your favorite food"
              className="w-1 min-w-1 grow rounded-full bg-transparent p-4 outline-none"
              type="text"
              value={q}
              onChange={e => setQ(e.target.value)}
            />
            <button
              type="submit"
              title="Start buying"
              className="relative ml-auto shrink-0 overflow-hidden whitespace-nowrap rounded-full px-6 py-3 text-center before:absolute before:inset-0 before:bg-gradient-to-b before:from-yellow-200 before:to-yellow-300 before:transition-all before:duration-300 before:ease-out after:absolute after:inset-0 after:bg-gradient-to-b after:from-yellow-200 after:to-red-300 after:opacity-0 after:transition-opacity after:duration-300 after:ease-out hover:after:opacity-100 focus:before:from-red-400 active:before:from-yellow-400 md:px-12"
            >
              <span className="relative z-10 font-semibold text-yellow-900 md:block">
                Search
              </span>
              {/* 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto size-5 text-yellow-900 md:hidden"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg> */}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
