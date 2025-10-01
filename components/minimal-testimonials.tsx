"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function MinimalTestimonials() {
  const { ref, isVisible } = useScrollReveal()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "International Business Manager",
      company: "TechGlobal Inc.",
      avatar: "/placeholder.svg?height=60&width=60&text=SC",
      rating: 5,
      text: "Youpi has revolutionized our international meetings. The real-time translation is so accurate that our Japanese partners feel completely comfortable speaking in their native language.",
    },
    {
      name: "Miguel Rodriguez",
      role: "Remote Team Lead",
      company: "StartupHub",
      avatar: "/placeholder.svg?height=60&width=60&text=MR",
      rating: 5,
      text: "As someone who manages a distributed team across 6 countries, Youpi is absolutely essential. The sub-second latency means conversations flow naturally.",
    },
    {
      name: "Dr. Amara Okafor",
      role: "Research Director",
      company: "Global Health Initiative",
      avatar: "/placeholder.svg?height=60&width=60&text=AO",
      rating: 5,
      text: "In medical research, precision is everything. Youpi's translation accuracy for technical terminology is outstanding.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={ref as React.RefObject<HTMLElement>} className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 md:mb-6 text-balance">
            What Our <span className="text-primary">Users Say</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Join thousands of satisfied users who have transformed their global communication with Youpi.
          </p>
        </div>

        <div
          className={`relative max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-border shadow-xl relative overflow-hidden">
            {/* Decorative quote icon */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 text-primary/10">
              <Quote className="h-16 w-16 md:h-24 md:w-24" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-1 md:gap-2 mb-4 md:mb-6 animate-fade-in">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 md:h-6 md:w-6 text-primary fill-current animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>

              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-card-foreground mb-6 md:mb-8 leading-relaxed font-light animate-fade-in">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center gap-3 md:gap-4 animate-slide-in-left">
                <div className="relative flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover border-2 md:border-4 border-primary/20"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-0.5 md:p-1">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-base md:text-xl text-card-foreground truncate">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium truncate">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-xs md:text-sm text-primary truncate">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute -left-2 sm:-left-4 lg:-left-6 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 md:p-4 bg-card rounded-full border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute -right-2 sm:-right-4 lg:-right-6 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 md:p-4 bg-card rounded-full border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </button>

          <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-2 md:h-3 rounded-full transition-all duration-500 ${
                  index === currentTestimonial
                    ? "bg-primary w-8 md:w-12"
                    : "bg-muted w-2 md:w-3 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
