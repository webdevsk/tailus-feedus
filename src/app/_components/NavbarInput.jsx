"use client"

import { useSelectedLayoutSegment } from "next/navigation"
import { useEffect, useRef } from "react"

export function NavbarInput() {
  const layout = useSelectedLayoutSegment()
  const inputRef = useRef(null)

  useEffect(() => {
    if (!inputRef) return
    // Close navbar on route change
    inputRef.current.checked = false
  }, [layout, inputRef])

  return (
    <input
      ref={inputRef}
      type="checkbox"
      name="toggle_nav"
      id="toggle_nav"
      className="peer hidden"
    />
  )
}
