import { ModalTemplate } from "@/components/ModalTemplate"
import { SingleMeal } from "@/components/SingleMeal"
import { getMealById } from "@/server/meal"

export default async function MealModalPage({ params }) {
  const res = await getMealById(params.id)
  return (
    <ModalTemplate>
      <SingleMeal res={res} />
    </ModalTemplate>
  )
}
