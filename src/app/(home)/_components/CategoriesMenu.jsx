import Link from "next/link"

export function CategoriesMenu({ res }) {
  // console.log(res)
  return (
    <section>
      <div className="container space-y-4 lg:space-y-16">
        {/* <SectionHeading>Out Categories</SectionHeading> */}
        {res.status === "failed" ? (
          <h1 className="text-center text-2xl text-red-500">
            Failed to load categories
          </h1>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(min(170px,_100%),_1fr))] gap-4 lg:gap-6">
            {res.data?.map(cat => (
              <Link
                key={cat.strCategory}
                href={`/meals?category=${cat.strCategory}`}
                style={{ backgroundImage: `url("${cat.strCategoryThumb}")` }}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-3xl border border-yellow-100 bg-yellow-50 bg-contain bg-center bg-no-repeat px-4 py-4 text-center bg-blend-multiply shadow shadow-gray-600/10 transition duration-200 hover:shadow-xl"
              >
                <div className="absolute inset-0 grid items-end p-2 text-yellow-900 transition">
                  <h4 className="truncate text-center text-xl font-bold">
                    {cat.strCategory}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
