import RecipeCard from "@/components/Recipes/RecipeCard"
import { getMealsByPath } from "@/server/meal"

export default async function ProductsListPage({ searchParams }) {
  // This is for typeSafety only
  // const filters = filtersCache.parse(await searchParams)

  // Clearing out empy values. Based on our logic, we should only get one pair of filter only
  // const singleFilter = JSON.parse(JSON.stringify(searchParams))
  const res = await getMealsByPath(
    searchParams.query
      ? `/search.php?s=${searchParams.query}`
      : searchParams.category
        ? `/filter.php?c=${searchParams.category}`
        : undefined
  )
  if (res.status === "failed") console.error(res.error)
  return (
    <div className="lg:w-4/5">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {res.data?.meals?.map(item => (
          <RecipeCard key={item.idMeal} meal={item} />
        ))}
      </div>

      {!!res.data?.meals?.length || (
        <h1 className="mt-8 text-center text-gray-500">No products found.</h1>
      )}
    </div>
  )
}
