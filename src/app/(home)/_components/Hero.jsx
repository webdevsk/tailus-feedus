import Image from "next/image"
import React from "react"

const Hero = () => {
  return (
    <div>
      {/* BANNER */}
      <div className="relative z-10 bg-yellow-50">
        <div className="container pt-32 lg:pt-[4.8rem]">
          <div className="flex flex-wrap items-center px-2 md:px-0">
            <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
              <h1 className="text-4xl font-bold text-yellow-900 md:text-5xl lg:w-10/12">
                Your favorite dishes, right at your door
              </h1>
              <p className="mt-8 text-gray-700 lg:w-10/12">
                Order food and groceries online from the largest online food
                delivery platform.
              </p>
            </div>
            <div className="relative hidden md:block md:w-7/12 lg:w-6/12">
              <Image
                src="/images/home/food.webp"
                className="relative w-full"
                alt="food illustration"
                loading="lazy"
                width={850}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
