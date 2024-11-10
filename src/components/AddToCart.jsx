"use client"
import { addToCart } from "@/server/cart"
import { Button } from "./ui/button"
import { useState } from "react"
import { toast } from "sonner"
import { useAuth } from "@clerk/nextjs"
import { addToLocalCart } from "@/lib/localCart"

export function AddToCart({ idMeal, strMeal, strMealThumb }) {
  const [disabled, setDisabled] = useState(false)
  const { isSignedIn } = useAuth()

  async function cartAdd() {
    const data = {
      idMeal,
      strMeal,
      strMealThumb,
    }
    const addToCartPromise = isSignedIn ? addToCart(data) : addToLocalCart(data)

    setDisabled(true)
    const toastId = toast.loading("Adding to cart...")
    const { status, message } = await addToCartPromise

    status === "success"
      ? toast.success("Added to cart successfully", { id: toastId })
      : toast.error(message, { id: toastId })

    setDisabled(false)
  }

  return (
    <Button disabled={disabled} onClick={cartAdd} className="w-full">
      Add to Cart
    </Button>
  )
}
