// app/api/webhooks/clerk/route.ts
import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { createUser, deleteUser } from '@/server/user'

async function validateWebhook(request) {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

    if (!WEBHOOK_SECRET) {
        throw new Error('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
    }

    // Get the headers
    const headerPayload = headers()
    const svix_id = headerPayload.get('svix-id')
    const svix_timestamp = headerPayload.get('svix-timestamp')
    const svix_signature = headerPayload.get('svix-signature')

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
            status: 400,
        })
    }

    // Get the body
    const payload = await request.json()
    const body = JSON.stringify(payload)

    // Create a new Svix instance with your secret.
    const wh = new Webhook(WEBHOOK_SECRET)

    let evt

    // Verify the payload with the headers
    try {
        evt = wh.verify(body, {
            'svix-id': svix_id,
            'svix-timestamp': svix_timestamp,
            'svix-signature': svix_signature,
        })
    } catch (err) {
        console.error('Error verifying webhook:', err)
        return new Response('Error occured', {
            status: 400,
        })
    }

    return evt
}

export async function POST(request) {
    try {
        const evt = await validateWebhook(request)

        if (!evt) {
            return new Response('Invalid webhook payload', { status: 400 })
        }

        // Handle user creation
        if (evt.type === 'user.created') {
            const { id, email_addresses, first_name, last_name, ...attributes } = evt.data

            // Create user in your database
            await createUser({ clerkId: id, email: email_addresses[0].email_address, firstName: first_name, lastName: last_name })

            return new Response('User created', { status: 200 })
        }

        // Handle user deletion
        if (evt.type === 'user.deleted') {
            const { id } = evt.data

            await deleteUser({ clerkId: id })

            return new Response('User deleted', { status: 200 })
        }

        return new Response('Webhook processed', { status: 200 })

    } catch (error) {
        console.error('Error processing webhook:', error)
        return new Response('Error processing webhook', { status: 500 })
    }
}

// Optionally handle GET requests for webhook configuration verification
export async function GET(request) {
    return new Response('Clerk Webhook Endpoint', { status: 200 })
}