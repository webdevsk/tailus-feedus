"use client"
import HttpKit from "@/common/helpers/HttpKit"
import { useQuery } from "@tanstack/react-query"
import React, { useEffect, useState } from "react"
import RecipeCard from "../../../components/Recipes/RecipeCard"
import Modal from "../../../components/Modal"
import SingleRecipe from "../../../components/Recipes/SingleRecipe"
import { SectionHeading } from "@/components/SectionHeading"

const RecipesList = ({ res }) => {
  // const [openDetails, setOpenDetails] = useState(false)
  // const [recipeId, setRecipeId] = useState("")
  // const [recipes, setRecipes] = useState([])
  // const [searchInput, setSearchInput] = useState("abc")
  // const [searchQuery, setSearchQuery] = useState(null)

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["recipes"],
  //   queryFn: HttpKit.getTopRecipes,
  // })

  // useEffect(() => {
  //   if (data) {
  //     setRecipes(data)
  //   }
  // }, [data])

  // const handleSearch = () => {
  //   setSearchQuery(searchInput)
  // }

  // const handleDetailsOpen = id => {
  //   setOpenDetails(true)
  //   setRecipeId(id)
  // }

  // if (isLoading) return <div>Loading recipes...</div>
  // if (error) return <div>Error loading recipes: {error.message}</div>

  return (
    <section className="bg-gray-50">
      <div className="container space-y-4 py-8 lg:space-y-16 lg:py-12">
        <SectionHeading>Our Best selling Recipes</SectionHeading>
        {/* Search form */}

        <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
          {res.data.meals.map(meal => (
            <RecipeCard
              key={meal.idMeal}
              recipe={meal}
              // handleDetailsOpen={handleDetailsOpen}
            />
          ))}
        </div>
      </div>

      {/* Modal*/}
      {/* <Modal isOpen={openDetails} setIsOpen={setOpenDetails}>
        <SingleRecipe id={recipeId} setIsOpen={setOpenDetails} />
      </Modal> */}
    </section>
  )
}

export default RecipesList
