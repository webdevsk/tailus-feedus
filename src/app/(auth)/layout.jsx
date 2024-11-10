export default function Layout({ children }) {
  return (
    <section className="pt-nav-height">
      <div className="container my-12 grid min-h-[80dvh] justify-center md:my-24 lg:my-32">
        {children}
      </div>
    </section>
  )
}
