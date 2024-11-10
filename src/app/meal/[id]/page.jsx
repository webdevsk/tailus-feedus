import { SingleMeal } from "@/components/SingleMeal"
import { getMealById } from "@/server/meal"

export default async function MealPage({ params }) {
  const res = await getMealById(params.id)
  return (
    <section>
      <div className="container pt-nav-height">
        <div className="py-8 lg:py-16">
          <SingleMeal res={res} />
        </div>
      </div>
    </section>
  )
}
