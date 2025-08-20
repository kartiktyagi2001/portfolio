"use client"

import { useEffect } from "react"

export function Navbar() {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        event.target instanceof HTMLInputElement
      ) return

      let targetId: string | null = null
      switch (event.key.toLowerCase()) {
        case "h": targetId = "home"; break
        case "b": targetId = "blogs"; break
        case "p": targetId = "projects"; break
      }

      if (targetId) {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  return (
    <nav className="flex items-center justify-between mb-12 text-sm">
      <div className="flex space-x-6">
        <a
          href="#home"
          className="hover:text-purple-500 transition-colors duration-200"
        >
          [h] home
        </a>
        <a
          href="#blogs"
          className="hover:text-purple-500 transition-colors duration-200"
        >
          [p] projects
        </a>
        <a
          href="#projects"
          className="hover:text-purple-500 transition-colors duration-200"
        >
          [b] blogs
        </a>
      </div>
    </nav>
  )
}
