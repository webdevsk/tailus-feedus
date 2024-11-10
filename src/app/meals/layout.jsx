import { SectionHeading } from "@/components/SectionHeading"
import { FiltersComponent } from "./_components/FiltersComponent"
import { Suspense } from "react"

export default function MealsPageLayout({ children }) {
  return (
    <section className="pt-nav-height">
      <div className="container relative py-4 lg:py-8">
        <SectionHeading>All Meals</SectionHeading>
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar with filters */}
          <Suspense>
            <FiltersComponent />
          </Suspense>
          {/* Product grid */}
          {children}
        </div>
      </div>
    </section>
  )
}
