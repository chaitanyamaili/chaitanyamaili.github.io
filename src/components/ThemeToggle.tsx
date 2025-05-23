import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() =>
    localStorage.getItem("theme") === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  )

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full border border-gray-500 hover:bg-gray-200/20 transition-colors"
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
    </button>
  )
}

export default ThemeToggle