"use client"

import { useState } from "react"
import { Menu, FileText, Briefcase, Shield, Mail, BookOpen } from "lucide-react"
import Link from "next/link"

export function QuickLinksMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: "Guide", href: "/guide", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Careers", href: "/careers", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Privacy", href: "/privacy", icon: <Shield className="w-4 h-4" /> },
    { name: "Terms", href: "/terms", icon: <FileText className="w-4 h-4" /> },
    { name: "Blog", href: "/blog", icon: <FileText className="w-4 h-4" /> },
    { name: "Contact", href: "mailto:contact@youpi.com", icon: <Mail className="w-4 h-4" /> },
  ]

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-primary text-primary-foreground p-2 rounded-r-md shadow-lg hover:pl-3 transition-all duration-300"
          aria-label="Open quick links menu"
        >
          <Menu className="w-4 h-4" />
        </button>
      )}

      {/* Menu Panel */}
      <div
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-card border border-border rounded-r-2xl shadow-2xl transition-all duration-300 ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="p-4 min-w-[200px]">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-2">
            Quick Links
          </h3>
          <nav className="space-y-1">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-card-foreground hover:bg-muted hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                <span className="text-sm font-medium">{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30" onClick={() => setIsOpen(false)} />
      )}
    </>
  )
}
