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
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(min(190px,_100%),_1fr))] gap-4 lg:gap-6">
            {res.data?.map(cat => (
              <Link
                key={cat.strCategory}
                href={`/recipes?c=${cat.strCategory}`}
                style={{ backgroundImage: `url("${cat.strCategoryThumb}")` }}
                className="group relative cursor-pointer overflow-hidden rounded-lg border border-yellow-900 bg-yellow-50 bg-cover bg-center bg-no-repeat px-4 py-4 text-center bg-blend-multiply shadow shadow-gray-600/10 transition duration-200 hover:shadow-xl max-lg:h-12 lg:aspect-square lg:rounded-3xl lg:border-yellow-100 lg:bg-contain"
              >
                <div className="absolute inset-0 grid items-center p-2 text-yellow-50 transition max-lg:backdrop-blur-sm lg:items-end lg:text-yellow-900">
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
