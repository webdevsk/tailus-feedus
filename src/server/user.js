'use server'

import { db } from '@/lib/drizzle'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function createUser({ clerkId, email, firstName, lastName }) {
    try {
        const newUser = await db.insert(users).values({
            clerkId,
            email,
            firstName,
            lastName
        }).returning()

        return newUser[0]
    } catch (error) {
        console.error('Error creating user:', error)
        throw new Error('Failed to create user')
    }
}

export async function deleteUser({ clerkId }) {
    try {
        const res = await db.delete(users).where(eq(users.clerkId, clerkId))

        return res
    } catch (error) {
        console.error('Error deleting user:', error)
        throw new Error('Failed to create user')
    }
}
