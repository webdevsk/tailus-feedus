export default function Layout({ children }) {
  return (
    <section>
      <div className="container my-12 grid justify-center md:my-24 lg:my-32">
        {children}
      </div>
    </section>
  )
}
