import { SingleMeal } from "@/components/SingleMeal"
import { getMealById } from "@/server/meal"

export default async function MealPage({ params }) {
  const res = await getMealById(params.id)
  return (
    <section>
      <div className="pt-nav-height container">
        <SingleMeal res={res} />
      </div>
    </section>
  )
}
