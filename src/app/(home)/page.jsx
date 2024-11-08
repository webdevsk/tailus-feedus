import { getAllCategories, getTopRecipes } from "@/server/home"
import Hero from "./_components/Hero"
import RecipesList from "./_components/RecipesList"
import { CategoriesMenu } from "./_components/CategoriesMenu"
import { SearchSection } from "./_components/SearchSection"

export default async function Home() {
  const [categoriesRes, topRecipesRes] = await Promise.all([
    getAllCategories(),
    getTopRecipes(),
  ])
  return (
    <div>
      <Hero />
      <div className="space-y-8 py-8 lg:space-y-16 lg:py-16">
        <SearchSection />
        <CategoriesMenu res={categoriesRes} />
      </div>
      <RecipesList res={topRecipesRes} />
    </div>
  )
}
