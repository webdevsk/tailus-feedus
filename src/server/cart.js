'use server'

import { db } from '@/lib/drizzle'
import { cartItems, users } from '@/db/schema'
import { eq, and } from 'drizzle-orm'
import { auth } from '@clerk/nextjs/server'
// import { auth } from '@clerk/nextjs'


export async function addToCart({ productId, productName, productThumb, quantity = 1 }) {
    try {
        const { userId: clerkId } = await auth()
        if (!clerkId) throw new Error('Unauthorized')

        // Get internal user id
        const [user] = await db
            .select()
            .from(users)
            .where(eq(users.clerkId, clerkId))
            .limit(1) // Limits to one result

        if (!user) throw new Error('User not found')

        // Check if item already exists in cart
        const [existingItem] = await db.select().from(cartItems).where(
            and(
                eq(cartItems.userId, user.id),
                eq(cartItems.productId, productId)
            )
        ).limit(1)

        if (existingItem) {
            // Update quantity if item exists
            await db
                .update(cartItems)
                .set({ quantity: existingItem.quantity + quantity })
                .where(eq(cartItems.id, existingItem.id))
        } else {
            // Add new item if it doesn't exist
            await db.insert(cartItems).values({
                userId: user.id,
                productId,
                productName,
                productThumb,
                quantity,
            })
        }

        return { status: "success" }
    } catch (error) {
        console.error('Error adding to cart:', error)
        return { status: "error", message: 'Failed to add item to cart' }
    }
}

export async function getCart() {
    try {
        const { userId: clerkId } = auth()
        if (!clerkId) throw new Error('Unauthorized')

        const [user] = await db
            .select()
            .from(users)
            .where(eq(users.clerkId, clerkId))
            .limit(1) // Limits to one result

        if (!user) throw new Error('User not found')

        // Fetch all cart items for the found user
        const items = await db
            .select()
            .from(cartItems)
            .where(eq(cartItems.userId, user.id))

        return { status: "success", data: items }
    } catch (error) {
        console.error('Error fetching cart:', error)
        return { status: "error", message: 'Failed to fetch cart' }
    }
}

export async function removeFromCart(itemId) {
    try {
        const { userId: clerkId } = auth()
        if (!clerkId) throw new Error('Unauthorized')

        await db
            .delete(cartItems)
            .where(eq(cartItems.id, itemId))

        return { status: "success" }
    } catch (error) {
        console.error('Error removing from cart:', error)
        return { status: "error", message: 'Failed to remove item from cart' }
    }
}
