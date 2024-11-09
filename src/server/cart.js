'use server'

import { db } from '@/lib/db'
import { cartItems, users } from '@/db/schema'
import { eq, and } from 'drizzle-orm'
import { auth } from '@clerk/nextjs'


export async function addToCart({ productId, productName, productThumb, quantity = 1 }) {
    try {
        const { userId: clerkId } = await auth()
        if (!clerkId) throw new Error('Unauthorized')

        // Get internal user id
        const user = await db.query.users.findFirst({
            where: eq(users.clerkId, clerkId),
        })
        if (!user) throw new Error('User not found')

        // Check if item already exists in cart
        const existingItem = await db.query.cartItems.findFirst({
            where: and(
                eq(cartItems.userId, user.id),
                eq(cartItems.productId, productId)
            ),
        })

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

        return { success: true }
    } catch (error) {
        console.error('Error adding to cart:', error)
        throw new Error('Failed to add item to cart')
    }
}

export async function getCart() {
    try {
        const { userId: clerkId } = auth()
        if (!clerkId) throw new Error('Unauthorized')

        const user = await db.query.users.findFirst({
            where: eq(users.clerkId, clerkId),
        })
        if (!user) throw new Error('User not found')

        const items = await db.query.cartItems.findMany({
            where: eq(cartItems.userId, user.id),
        })

        return items
    } catch (error) {
        console.error('Error fetching cart:', error)
        throw new Error('Failed to fetch cart')
    }
}

export async function removeFromCart(itemId) {
    try {
        const { userId: clerkId } = auth()
        if (!clerkId) throw new Error('Unauthorized')

        await db
            .delete(cartItems)
            .where(eq(cartItems.id, itemId))

        return { success: true }
    } catch (error) {
        console.error('Error removing from cart:', error)
        throw new Error('Failed to remove item from cart')
    }
}
