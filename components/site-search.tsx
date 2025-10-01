"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import { useRouter } from "next/navigation"

export function SiteSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  // Listen for Ctrl+F or Cmd+F
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "f") {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const searchableContent = [
    { title: "Home", path: "/", keywords: "translation real-time AI interpreter languages" },
    { title: "Features", path: "/#features", keywords: "features capabilities real-time translation accuracy" },
    { title: "Testimonials", path: "/#testimonials", keywords: "reviews testimonials users feedback" },
    { title: "Pricing", path: "/#pricing", keywords: "pricing plans cost subscription free pro business" },
    { title: "FAQ", path: "/#faq", keywords: "questions answers help support faq" },
    { title: "Download", path: "/download", keywords: "download install windows mac linux chrome extension" },
    { title: "Guide", path: "/guide", keywords: "guide tutorial help documentation how to use" },
    { title: "Careers", path: "/careers", keywords: "careers jobs work opportunities team" },
    { title: "Privacy Policy", path: "/privacy", keywords: "privacy policy data security GDPR" },
    { title: "Terms of Service", path: "/terms", keywords: "terms service legal agreement" },
    { title: "Blog", path: "/blog", keywords: "blog articles news updates" },
  ]

  const filteredResults = searchQuery
    ? searchableContent.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.keywords.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : []

  const handleResultClick = (path: string) => {
    router.push(path)
    setIsOpen(false)
    setSearchQuery("")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-start justify-center pt-20 px-4 animate-fade-in">
      <div className="w-full max-w-2xl">
        <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="flex items-center gap-3 p-4 border-b border-border">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search the site... (Ctrl+F)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-card-foreground placeholder:text-muted-foreground focus:outline-none text-lg"
              autoFocus
            />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Close search"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {searchQuery && filteredResults.length > 0 ? (
              <div className="p-2">
                {filteredResults.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleResultClick(result.path)}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="font-medium text-card-foreground">{result.title}</div>
                    <div className="text-sm text-muted-foreground">{result.path}</div>
                  </button>
                ))}
              </div>
            ) : searchQuery ? (
              <div className="p-8 text-center text-muted-foreground">No results found for "{searchQuery}"</div>
            ) : (
              <div className="p-8 text-center text-muted-foreground">Start typing to search the site...</div>
            )}
          </div>

          {/* Keyboard Shortcuts */}
          <div className="p-4 border-t border-border bg-muted/30">
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <span>
                <kbd className="px-2 py-1 bg-background rounded border border-border">Ctrl</kbd> +{" "}
                <kbd className="px-2 py-1 bg-background rounded border border-border">F</kbd> to search
              </span>
              <span>
                <kbd className="px-2 py-1 bg-background rounded border border-border">Esc</kbd> to close
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
