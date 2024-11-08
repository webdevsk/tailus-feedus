import { SectionHeading } from "@/components/SectionHeading"

export function SearchSection() {
  return (
    <section>
      <div className="container space-y-8">
        <SectionHeading>Search for your favourite meal</SectionHeading>
        <form action="">
          <div className="relative flex rounded-full border border-yellow-200 bg-white p-1 shadow-md md:p-2">
            <input
              placeholder="Your favorite food"
              className="w-full rounded-full bg-transparent p-4 outline-none"
              type="text"
              // onChange={e =>
              //   setSearchInput(prev => ({
              //     ...prev,
              //     value: e.target.value,
              //   }))
              // }
            />
            <button
              // onClick={() => handleSearch()}
              type="button"
              title="Start buying"
              className="ml-auto rounded-full bg-gradient-to-b from-yellow-200 to-yellow-300 px-6 py-3 text-center transition hover:to-red-300 focus:from-red-400 active:from-yellow-400 md:px-12"
            >
              <span className="hidden font-semibold text-yellow-900 md:block">
                Search
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto w-5 text-yellow-900 md:hidden"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
