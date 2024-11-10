import { FiltersComponent } from "./_components/FiltersComponent"
import { Suspense } from "react"

export default function MealsPageLayout({ children }) {
  return (
    <section className="pt-nav-height">
      <div className="container relative py-4 lg:py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[320px,_minmax(0,_1fr)]">
          {/* Sidebar with filters */}
          <FiltersComponent />
          {/* Product grid */}
          {children}
        </div>
      </div>
    </section>
  )
}
