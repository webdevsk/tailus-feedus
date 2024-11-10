import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const Footer = () => {
  return (
    <footer className="border-t bg-yellow-950 text-yellow-600">
      <div className="container mx-auto px-4 py-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <span className="text-2xl font-bold text-yellow-100">
              Tailus <span className="text-yellow-500">Feedus</span>
            </span>
            <p className="text-muted-foreground text-sm">
              Serving delicious meals since 1995. Experience the taste of
              tradition with a modern twist.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link href="/menu" className="hover:text-primary transition">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/reservations"
                  className="hover:text-primary transition"
                >
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>123 Restaurant Street</li>
              <li>Foodtown, FT 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@tastybites.com</li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hours</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>Mon - Fri: 11am - 10pm</li>
              <li>Saturday: 10am - 11pm</li>
              <li>Sunday: 10am - 9pm</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-yellow-600" />

        {/* Bottom section */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* Social Links */}
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition"
            >
              <Twitter size={20} />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Tailus Feedus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
