"use client"

import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link"

export function Auth() {
  return (
    <div className="flex flex-col gap-x-4 gap-y-2 border-yellow-200 max-md:w-full md:flex-row">
      <SignedOut>
        <Button variant="ghost" asChild>
          <Link
            href="/sign-up"
            title="Start buying"
            // className="whitespace-nowrap rounded-full px-6 py-3 text-center text-sm font-semibold text-yellow-800 transition focus:bg-yellow-100 active:bg-yellow-200"
          >
            Sign up
          </Link>
        </Button>
        <Button asChild>
          <Link
            href="/sign-in"
            title="Start buying"
            // className="whitespace-nowrap rounded-full bg-yellow-300 px-6 py-3 text-center text-sm font-semibold text-yellow-900 transition hover:bg-yellow-100 focus:bg-yellow-300 active:bg-yellow-400"
          >
            Login
          </Link>
        </Button>
      </SignedOut>
      <SignedIn>
        <div className="flex justify-center">
          <UserButton showName />
        </div>
      </SignedIn>
    </div>
  )
}
