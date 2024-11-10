import "@/globals.css"
import Navbar from "./_components/Navbar"
import TanstackProvider from "@/providers/TanstackProvider"
import { ClerkProvider } from "@clerk/nextjs"
import localFont from "next/font/local"
import { Toaster } from "@/components/ui/sonner"
import { NuqsAdapter } from "nuqs/adapters/next/app"
import Footer from "@/app/_components/Footer"

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata = {
  title: "Tailus Feedus",
  description: "Your Favourite Dishes, Right at Your Door",
}

export default function RootLayout({ children, mealchild }) {
  return (
    <ClerkProvider
      dynamic
      appearance={{
        layout: {
          shimmer: false,
          unsafe_disableDevelopmentModeWarnings: true,
        },
        variables: {
          borderRadius: ".5rem",
          colorNeutral: "#422006",
          colorPrimary: "#854d0e",
        },
      }}
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} font-sans ${geistMono.variable} bg-white text-black antialiased`}
        >
          <NuqsAdapter>
            <TanstackProvider>
              <Navbar />
              {children}
              {mealchild}
              <Footer />
              <Toaster />
            </TanstackProvider>
          </NuqsAdapter>
        </body>
      </html>
    </ClerkProvider>
  )
}
