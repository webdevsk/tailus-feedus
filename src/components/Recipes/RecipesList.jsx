"use client"
import HttpKit from "@/common/helpers/HttpKit"
import { useQuery } from "@tanstack/react-query"
import React, { useEffect, useState } from "react"
import RecipeCard from "./RecipeCard"
import Modal from "../Modal"
import SingleRecipe from "./SingleRecipe"

const RecipesList = () => {
  const [openDetails, setOpenDetails] = useState(false)
  const [recipeId, setRecipeId] = useState("")
  const [recipes, setRecipes] = useState([])
  const [searchInput, setSearchInput] = useState("abc")
  const [searchQuery, setSearchQuery] = useState(null)

  const { data, isLoading, error } = useQuery({
    queryKey: ["recipes"],
    queryFn: HttpKit.getTopRecipes,
  })

  useEffect(() => {
    if (data) {
      setRecipes(data)
    }
  }, [data])

  const handleSearch = () => {
    setSearchQuery(searchInput)
  }

  const handleDetailsOpen = id => {
    setOpenDetails(true)
    setRecipeId(id)
  }

  if (isLoading) return <div>Loading recipes...</div>
  if (error) return <div>Error loading recipes: {error.message}</div>

  return (
    <div className="bg-gray-50 py-10">
      <div className="container">
        <h1 className="text-2xl font-bold">Top Recipes</h1>
        {/* Search form */}
        <div>
          <form action="" className="mt-12 w-full">
            <div className="relative flex rounded-full border border-yellow-200 bg-white p-1 shadow-md md:p-2">
              <input
                placeholder="Your favorite food"
                className="w-full rounded-full bg-transparent p-4 outline-none"
                type="text"
                onChange={e =>
                  setSearchInput(prev => ({
                    ...prev,
                    value: e.target.value,
                  }))
                }
              />
              <button
                onClick={() => handleSearch()}
                type="button"
                title="Start buying"
                className="ml-auto rounded-full bg-gradient-to-b from-yellow-200 to-yellow-300 px-6 py-3 text-center transition hover:to-red-300 focus:from-red-400 active:from-yellow-400 md:px-12"
              >
                <span className="hidden font-semibold text-yellow-900 md:block">
                  Search
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto w-5 text-yellow-900 md:hidden"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div className="relative py-16">
          <div className="container relative text-gray-500">
            <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
              {recipes?.map(recipe => (
                <RecipeCard
                  key={recipe?.id}
                  recipe={recipe}
                  handleDetailsOpen={handleDetailsOpen}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal*/}
      <Modal isOpen={openDetails} setIsOpen={setOpenDetails}>
        <SingleRecipe id={recipeId} setIsOpen={setOpenDetails} />
      </Modal>
    </div>
  )
}

export default RecipesList
