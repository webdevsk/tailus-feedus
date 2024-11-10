import Image from "next/image"
import Link from "next/link"
import React from "react"

const RecipeCard = ({ meal }) => {
  // console.log(meal)
  return (
    <Link
      href={`/meal/${meal.idMeal}`}
      scroll={false}
      className="group space-y-6 rounded-3xl border border-gray-100 bg-white px-4 py-4 text-center shadow shadow-gray-600/10 transition duration-200 hover:cursor-pointer hover:shadow-xl"
    >
      <Image
        className="mx-auto rounded-2xl"
        src={meal?.strMealThumb}
        alt="Web Development"
        loading="lazy"
        width={443}
        height={443}
      />
      <h3 className="text-2xl font-semibold text-yellow-800">
        {meal?.strMeal}
      </h3>
      <p>
        Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum,
        consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea
        animi officiis.
      </p>
      <div className="invisible relative mx-auto flex items-center justify-center text-sm group-hover:visible">
        <button className="text-yellow-700">Click to see details</button>
      </div>
    </Link>
  )
}

export default RecipeCard
