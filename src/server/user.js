'use server'

import { db } from '@/lib/db'
import { users } from '@/db/schema'

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
