"use client"
import { addToCart } from "@/server/cart"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { useAuth } from "@clerk/nextjs"

export function AddToCart({ idMeal, strMeal, strMealThumb }) {
  const [disabled, setDisabled] = useState(false)
  const { isSignedIn } = useAuth()

  async function cartAdd() {
    const addToCartPromise = isSignedIn
      ? addToCart({
          productId: idMeal,
          productName: strMeal,
          productThumb: strMealThumb,
        })
      : Promise.resolve({ status: "failed", message: "Not logged in" })

    setDisabled(true)
    const toastId = toast.loading("Adding to cart...")
    const { status, message } = await addToCartPromise

    status === "success"
      ? toast.success("Added to cart successfully", { id: toastId })
      : toast.error(message, { id: toastId })

    setDisabled(false)
  }

  return (
    <Button disabled={disabled} onClick={cartAdd} className="w-full" size="lg">
      Add to Cart
    </Button>
  )
}
