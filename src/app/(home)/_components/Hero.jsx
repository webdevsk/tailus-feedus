import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-yellow-50 to-white pt-nav-height">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 -z-10 h-96 w-96 opacity-20 blur-3xl filter">
          <div className="h-full w-full rounded-full bg-yellow-200" />
        </div>
        <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 opacity-20 blur-3xl filter">
          <div className="h-full w-full rounded-full bg-orange-200" />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-8 py-8 md:grid-cols-2 md:py-12 lg:py-16">
          {/* Content Column */}
          <div className="flex flex-col justify-center space-y-8 text-center max-md:mt-24 md:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-yellow-950 sm:text-5xl xl:text-6xl/none">
                Your Favourite Dishes,{" "}
                <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  Right at Your Door
                </span>
              </h1>

              <p className="text-muted-foreground mx-auto text-lg md:mx-0 lg:w-10/12">
                Order food and groceries online from hundreds of restaurants.
                Fast delivery, great deals, and endless choices.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Button asChild variant="secondary" size="lg">
                <Link href="/meals">
                  Order Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/meals">View Menu</Link>
              </Button>
            </div>

            {/* Stats or Features */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="space-y-1">
                <h4 className="text-2xl font-bold text-yellow-950">500+</h4>
                <p className="text-muted-foreground text-sm">Restaurants</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-2xl font-bold text-yellow-950">30k+</h4>
                <p className="text-muted-foreground text-sm">Happy Customers</p>
              </div>
              <div className="space-y-1 sm:col-span-1 md:col-span-1">
                <h4 className="text-2xl font-bold text-yellow-950">4.8⭐</h4>
                <p className="text-muted-foreground text-sm">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-xl overflow-hidden rounded-full">
              <Image
                src="/images/home/food.webp"
                alt="Delicious food arrangement"
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Floating badges/elements */}
            <div className="absolute -right-4 top-1/4 animate-bounce rounded-lg bg-white p-3 shadow-lg">
              <span className="text-xl">🍕</span>
            </div>
            <div className="absolute -left-4 top-2/3 animate-bounce rounded-lg bg-white p-3 shadow-lg">
              <span className="text-xl">🍔</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
