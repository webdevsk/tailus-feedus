import { getAllCategories } from "@/server/home"
import Hero from "./_components/Hero"
import RecipesList from "./_components/RecipesList"
import { CategoriesMenu } from "./_components/CategoriesMenu"

export default async function Home() {
  const [categoriesRes] = await Promise.all([getAllCategories()])
  return (
    <div>
      <Hero />
      <CategoriesMenu res={categoriesRes} />
      <RecipesList />
    </div>
  )
}
