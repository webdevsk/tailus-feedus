"use client"
import RecipeCard from "@/components/Recipes/RecipeCard"
import { SectionHeading } from "@/components/SectionHeading"

const RecipesList = ({ res }) => {
  return (
    <section className="bg-gray-50">
      <div className="container space-y-4 py-8 lg:space-y-16 lg:py-12">
        <SectionHeading>Our Best selling Recipes</SectionHeading>
        {/* Search form */}

        <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
          {res.data?.meals?.map(item => (
            <RecipeCard key={item.idMeal} meal={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecipesList
