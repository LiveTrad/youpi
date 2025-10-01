"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "International Business Manager",
      company: "TechGlobal Inc.",
      avatar: "/placeholder.svg?height=60&width=60&text=SC",
      rating: 5,
      text: "Youpi has revolutionized our international meetings. The real-time translation is so accurate that our Japanese partners feel completely comfortable speaking in their native language. It's like having a professional interpreter in every call.",
    },
    {
      name: "Miguel Rodriguez",
      role: "Remote Team Lead",
      company: "StartupHub",
      avatar: "/placeholder.svg?height=60&width=60&text=MR",
      rating: 5,
      text: "As someone who manages a distributed team across 6 countries, Youpi is absolutely essential. The sub-second latency means conversations flow naturally, and the accuracy is incredible. Best investment we've made for team communication.",
    },
    {
      name: "Dr. Amara Okafor",
      role: "Research Director",
      company: "Global Health Initiative",
      avatar: "/placeholder.svg?height=60&width=60&text=AO",
      rating: 5,
      text: "In medical research, precision is everything. Youpi's translation accuracy for technical terminology is outstanding. We can now collaborate seamlessly with research teams worldwide without losing critical details in translation.",
    },
  ]

  // Auto-advance testimonials
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
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
            What Our <span className="gradient-text">Users Say</span>
          </h2>
          <p className="font-body text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their global communication with Youpi.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="flex items-center gap-2 mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>

            <blockquote className="font-body text-lg lg:text-xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="font-heading font-bold text-lg text-gray-900 dark:text-white">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="font-body text-gray-600 dark:text-gray-300">
                  {testimonials[currentTestimonial].role}
                </div>
                <div className="font-body text-sm text-gray-500 dark:text-gray-400">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-blue-500 scale-125" : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
