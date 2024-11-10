"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  getLocalCart,
  removeFromLocalCart,
  updateLocalCart,
} from "@/lib/localCart"
import { getCart, removeFromCart, updateCart } from "@/server/cart"
import { useAuth } from "@clerk/nextjs"
import { useQuery } from "@tanstack/react-query"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import { useMemo } from "react"
import { toast } from "sonner"

export default function CartPage() {
  const { isSignedIn } = useAuth()
  const {
    data: res = {},
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: () => (isSignedIn ? getCart() : getLocalCart()),
    refetchOnWindowFocus: false,
  })

  if (error) console.error("Error fetching cart from client: ", error)

  async function cartDelete(id) {
    const toastId = toast.loading("Removing from Cart")
    const removePromise = isSignedIn
      ? removeFromCart(id)
      : removeFromLocalCart(id)
    const { status, message } = await removePromise
    status === "success"
      ? toast.success("Removed successfully", { id: toastId })
      : toast.error(message, { id: toastId })
    refetch()
  }

  //   Use OPTIMISTIC UPDATE in this case
  async function cartUpdate(id, incrementBy) {
    const item = res.data?.find(item => item.id === id)
    if (!item || typeof incrementBy !== "number")
      return toast.error("Invalid Action")

    // incrementBy can be a negative value decreasing quantity
    const intQuantity = item.intQuantity + incrementBy
    if (intQuantity < 1 || intQuantity > 10) return
    const toastId = toast.loading("Updating quantity...")
    const updatePromise = isSignedIn
      ? updateCart({ id, intQuantity })
      : updateLocalCart({ id, intQuantity })
    const { status, message } = await updatePromise
    status === "success"
      ? toast.success("Updated quantity successfully", { id: toastId })
      : toast.error(message, { id: toastId })
    refetch()
  }

  const subtotal = useMemo(
    () =>
      res.data?.reduce(
        (sum, item) => sum + item.floatPrice * item.intQuantity,
        0
      ) ?? 0,
    [res]
  )

  const tax = subtotal * 0.1 // 10% tax
  const total = subtotal + tax

  return (
    <section className="pt-nav-height">
      <div className="container py-8 lg:py-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-yellow-950">
              Your Cart
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {isLoading && (
                <h1 className="animate-pulse py-6 text-center text-2xl font-semibold text-gray-400">
                  Fetching Cart Data...
                </h1>
              )}
              {!isLoading && (error || res.status !== "success") && (
                <h1 className="py-6 text-center text-2xl font-semibold text-red-500">
                  Failed to load Cart Items
                </h1>
              )}
              {res.status === "success" && !res.data?.length ? (
                <h1 className="py-6 text-center text-2xl font-semibold text-gray-400">
                  Start by adding items to Cart
                </h1>
              ) : (
                res.data?.map(item => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <Image
                      width={96}
                      height={96}
                      src={item.strMealThumb}
                      alt={item.strMeal}
                      className="h-24 w-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.strMeal}</h3>
                      <p className="text-sm text-gray-500">
                        BDT{item.floatPrice}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => cartUpdate(item.id, -1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">
                        {item.intQuantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => cartUpdate(item.id, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="w-24 text-right">{item.floatPrice}</div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => cartDelete(item.id)}
                      className="text-yellow-900 hover:text-yellow-900/80"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))
              )}
            </div>
          </CardContent>
          <Separator className="my-4" />
          <CardFooter>
            <div className="w-full">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>BDT {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (10%)</span>
                  <span>BDT {tax.toFixed(2)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>BDT {total.toFixed(2)}</span>
                </div>
              </div>
              <Button className="mt-6 w-full">Proceed to Checkout</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
