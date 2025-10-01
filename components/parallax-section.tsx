"use client"

import { useEffect, useState } from "react"

export function ParallaxSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background elements with parallax */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-accent rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="text-center z-10">
        <div
          className="mb-8"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
          }}
        >
          <h2 className="text-8xl md:text-9xl font-poppins font-light text-white mb-4">
            <span className="text-white">Youp</span>
            <span className="text-yellow-accent">i</span>
          </h2>
        </div>

        <div
          className="text-2xl md:text-3xl font-poppins font-light text-gray-300 tracking-wider"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`,
          }}
        >
          <span className="text-cyan-accent">Your</span> <span className="text-white">Personal</span>{" "}
          <span className="text-yellow-accent">Interpreter</span>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
    </section>
  )
}
