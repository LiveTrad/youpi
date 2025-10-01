"use client"

import { YoupiLogo } from "./youpi-logo"
import { Globe, Sun, Moon, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "./theme-provider"
import { useRouter, usePathname } from "next/navigation"

export function MinimalHeader() {
  const [language, setLanguage] = useState("EN")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const [bannerVisible, setBannerVisible] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkBannerVisibility = () => {
      const stored = localStorage.getItem("announcement-banner-visible")
      setBannerVisible(stored !== "false")
    }

    checkBannerVisibility()
    window.addEventListener("banner-visibility-changed", checkBannerVisibility)

    return () => {
      window.removeEventListener("banner-visibility-changed", checkBannerVisibility)
    }
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "FR" : "EN")
  }

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      router.push(`/#${sectionId}`)
      setMobileMenuOpen(false)
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const handleDownloadClick = () => {
    router.push("/download")
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300 ${
        bannerVisible ? "top-[44px] sm:top-[48px]" : "top-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <nav className="flex items-center justify-between">
          <YoupiLogo variant="logo-only" className="text-lg sm:text-xl" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">{language}</span>
            </button>

            <button
              onClick={handleDownloadClick}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Download
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 space-y-3">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              FAQ
            </button>
            <div className="flex items-center justify-between px-4 py-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{language}</span>
              </button>
              <button
                onClick={handleDownloadClick}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-medium"
              >
                Download
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
