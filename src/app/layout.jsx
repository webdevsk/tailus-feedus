import "@/globals.css"
import Navbar from "./_components/Navbar"
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TanstackProvider from "@/providers/TanstackProvider"
import { ClerkProvider } from "@clerk/nextjs"
import localFont from "next/font/local"
import { Toaster } from "@/components/ui/sonner"
import { NuqsAdapter } from "nuqs/adapters/next/app"
import Footer from "@/components/Footer"

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
  title: "my-recipes",
  description: "Generated by create next app",
}

export default function RootLayout({ children, mealchild }) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} bg-white text-black antialiased`}
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
