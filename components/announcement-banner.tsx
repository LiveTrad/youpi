"use client"

import { X } from "lucide-react"
import { useState, useEffect } from "react"

interface Announcement {
  id: string
  text: string
  link?: string
  linkText?: string
}

export function AnnouncementBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const announcements: Announcement[] = [
    {
      id: "beta-testers",
      text: "We're looking for beta testers!",
      link: "#download",
      linkText: "Join now",
    },
    {
      id: "hiring",
      text: "We're hiring! Join our team of innovators.",
      link: "#",
      linkText: "View positions",
    },
  ]

  useEffect(() => {
    if (announcements.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [announcements.length])

  useEffect(() => {
    const stored = localStorage.getItem("announcement-banner-visible")
    if (stored === "false") {
      setIsVisible(false)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem("announcement-banner-visible", "false")
    // Emit custom event so header can adjust
    window.dispatchEvent(new Event("banner-visibility-changed"))
  }

  if (!isVisible) return null

  const currentAnnouncement = announcements[currentIndex]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-2.5 sm:py-3 px-4 sm:px-6 text-center overflow-hidden h-[44px] sm:h-[48px]">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent/20 to-primary opacity-50"></div>

      <div className="relative max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4">
        <p className="text-xs sm:text-sm md:text-base font-medium pr-6 sm:pr-0">
          <span className="hidden sm:inline">{currentAnnouncement.text}</span>
          <span className="sm:hidden">{currentAnnouncement.text.replace("We're looking for", "Need")}</span>
          {currentAnnouncement.link && (
            <>
              {" "}
              <a href={currentAnnouncement.link} className="underline hover:no-underline font-semibold">
                {currentAnnouncement.linkText}
              </a>
            </>
          )}
        </p>

        <button
          onClick={handleClose}
          className="absolute right-2 sm:right-4 p-1 hover:bg-primary-foreground/20 rounded-full transition-colors"
          aria-label="Close announcement"
        >
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>

      {announcements.length > 1 && (
        <div className="absolute bottom-0.5 sm:bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1">
          {announcements.map((_, index) => (
            <div
              key={index}
              className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-all ${
                index === currentIndex ? "bg-primary-foreground" : "bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
