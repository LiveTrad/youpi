"use client"

import type React from "react"

import { useState } from "react"

export function ConfettiButton({
  children,
  className,
  onClick,
  ...props
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const [showConfetti, setShowConfetti] = useState(false)

  const handleClick = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 1000)
    onClick?.()
  }

  return (
    <button className={`relative overflow-hidden ${className}`} onClick={handleClick} {...props}>
      {children}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: "1s",
              }}
            />
          ))}
        </div>
      )}
    </button>
  )
}
