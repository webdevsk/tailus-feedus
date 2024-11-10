import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Youtube, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { AddToCart } from "./AddToCart"

export function SingleMeal({ res }) {
  if (res.status === "failed" || !res?.data?.meals?.at(0)) {
    console.error(res.error ?? "Invalid meal api structure.")
    return (
      <h1 className="text-center text-2xl font-semibold text-red-500">
        {res.error}
      </h1>
    )
  }
  const meal = res.data.meals[0]
  // console.log(meal)

  // Extract ingredients and measurements, filtering out empty ones
  const ingredients = Array.from({ length: 20 }, (_, i) => ({
    ingredient: meal[`strIngredient${i + 1}`],
    measure: meal[`strMeasure${i + 1}`],
  })).filter(item => item.ingredient && item.ingredient.trim() !== "")

  // Split instructions into steps
  const instructions = meal.strInstructions
    .split(/\r\n|\n/)
    .filter(step => step.trim() !== "")

  return (
    <div className="">
      {/* Header Section */}
      <div className="mb-8 grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{meal.strMeal}</h1>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-sm">
              {meal.strCategory}
            </Badge>
            <Badge variant="secondary" className="text-sm">
              {meal.strArea}
            </Badge>
            {meal.strTags?.split(",").map(tag => (
              <Badge key={tag} variant="outline" className="text-sm">
                {tag.trim()}
              </Badge>
            ))}
          </div>

          {/* External Links */}
          <div className="flex gap-4">
            {meal.strYoutube && (
              <Link
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-600 hover:text-red-700"
              >
                <Youtube size={20} />
                <span>Watch Recipe</span>
              </Link>
            )}
            {meal.strSource && (
              <Link
                href={meal.strSource}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700"
              >
                <Globe size={20} />
                <span>Source</span>
              </Link>
            )}
          </div>
          <AddToCart {...meal} />
        </div>

        {/* Image */}
        <div className="relative h-[300px] overflow-hidden rounded-2xl md:h-[400px]">
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="ingredients" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
          <TabsTrigger value="instructions">Instructions</TabsTrigger>
        </TabsList>

        <TabsContent value="ingredients">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {ingredients.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center rounded-full bg-yellow-50/50 p-3"
                  >
                    <span className="font-medium capitalize">
                      {item.ingredient}
                    </span>
                    <span className="ml-auto text-sm text-yellow-950">
                      {item.measure}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="instructions">
          <Card>
            <CardContent className="pt-6">
              <ScrollArea className="h-[600px] w-full rounded-2xl border border-yellow-200 p-4">
                <ol className="space-y-4">
                  {instructions.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="min-w-[24px] font-bold">
                        {index + 1}.
                      </span>
                      <p>{step}</p>
                    </li>
                  ))}
                </ol>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
