import Link from "next/link"
import { Auth } from "./Auth"
import { Button } from "@/components/ui/button"
import HolyLoader from "holy-loader"
import { NavbarInput } from "./NavbarInput"

const Navbar = () => {
  return (
    <>
      <div className="fixed left-0 top-0 z-[999]">
        <HolyLoader
          // color="#fde047"
          color="#854d0e"
          height="4px"
          easing="ease"
          showSpinner={false}
          speed={300}
          initialPosition={0.08}
        />
      </div>
      <nav className="fixed left-0 top-0 z-50 flex h-nav-height w-full bg-white md:absolute md:bg-transparent">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between py-3 md:py-4">
            <NavbarInput />
            <div className="z-30 flex w-full justify-between px-6 md:px-0 lg:w-max">
              <Link
                href="/"
                aria-label="logo"
                className="flex items-center space-x-2"
              >
                <span className="text-2xl font-bold text-yellow-900">
                  Tailus <span className="text-yellow-700">Feedus</span>
                </span>
              </Link>

              <div className="flex max-h-10 items-center lg:hidden">
                <label
                  role="button"
                  htmlFor="toggle_nav"
                  aria-label="hamburger"
                  id="hamburger"
                  className="relative h-auto w-10 p-2"
                >
                  <div
                    id="line"
                    className="m-auto h-0.5 w-6 rounded bg-yellow-900 transition duration-300"
                  ></div>
                  <div
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-yellow-900 transition duration-300"
                  ></div>
                </label>
              </div>
            </div>

            <label
              role="button"
              htmlFor="toggle_nav"
              className="fixed left-0 top-0 z-10 hidden h-full w-full bg-yellow-200 bg-opacity-30 backdrop-blur backdrop-filter peer-checked:block"
            ></label>
            <div
              style={{ marginTop: "calc(var(--navbar-height) / 2 - 32px / 2)" }}
              className="z-30 hidden w-full flex-col items-center justify-end gap-y-6 rounded-xl bg-white p-6 peer-checked:flex md:flex-nowrap lg:!mt-0 lg:flex lg:w-7/12 lg:flex-row lg:gap-y-0 lg:bg-transparent lg:p-0"
            >
              <div className="w-full text-gray-600 lg:pr-4">
                <ul className="flex w-full flex-col items-center gap-y-6 text-sm font-medium tracking-wide lg:flex-row lg:gap-y-0">
                  <Button className="max-lg:w-full" variant="link" asChild>
                    <Link href="/meals">All meals</Link>
                  </Button>
                  <Button className="max-lg:w-full" variant="link" asChild>
                    <Link href="/cart">Cart</Link>
                  </Button>
                </ul>
              </div>
              <Auth />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
