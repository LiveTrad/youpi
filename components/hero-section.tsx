"use client"

import { useState, useEffect } from "react"
import { Globe, Zap, CheckCircle, Heart, Play } from "lucide-react"
import { ConfettiButton } from "./confetti-button"

export function HeroSection() {
  const [counters, setCounters] = useState({
    languages: 0,
    latency: 0,
    accuracy: 0,
    users: 0,
  })

  const [showModal, setShowModal] = useState(false)

  // Animate counters on mount
  useEffect(() => {
    const animateCounters = () => {
      const targets = { languages: 50, latency: 1, accuracy: 95, users: 1000 }
      const duration = 2000
      const steps = 60
      const stepTime = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps

        setCounters({
          languages: Math.floor(targets.languages * progress),
          latency: Math.floor(targets.latency * progress * 10) / 10,
          accuracy: Math.floor(targets.accuracy * progress),
          users: Math.floor(targets.users * progress),
        })

        if (step >= steps) {
          clearInterval(timer)
          setCounters(targets)
        }
      }, stepTime)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    const heroElement = document.getElementById("hero")
    if (heroElement) {
      observer.observe(heroElement)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
          <div className="absolute inset-0">
            {/* Floating speech bubbles */}
            <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-float"></div>
            <div
              className="absolute top-40 right-20 w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-40 left-20 w-20 h-20 bg-green-200 dark:bg-green-800 rounded-full opacity-20 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-20 right-10 w-14 h-14 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20 animate-float"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Headline */}
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 dark:text-white mb-6 animate-fade-in-up">
            Translate Conversations
            <br />
            <span className="gradient-text">in Real-Time</span>
          </h1>

          {/* Subheadline */}
          <p
            className="font-body text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Your AI-powered personal interpreter for meetings, videos, and more. Break language barriers effortlessly.
          </p>

          {/* Key Stats */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Globe className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <div className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-1">
                {counters.languages}+
              </div>
              <div className="font-body text-sm text-gray-600 dark:text-gray-400">Languages</div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Zap className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <div className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-1">
                &lt;{counters.latency}s
              </div>
              <div className="font-body text-sm text-gray-600 dark:text-gray-400">Latency</div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <div className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-1">
                {counters.accuracy}%
              </div>
              <div className="font-body text-sm text-gray-600 dark:text-gray-400">Accuracy</div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <div className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-1">
                {counters.users.toLocaleString()}+
              </div>
              <div className="font-body text-sm text-gray-600 dark:text-gray-400">Happy Users</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <ConfettiButton className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-body font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[200px]">
              Get Started Free
            </ConfettiButton>
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 font-body font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[200px] flex items-center justify-center gap-2"
            >
              <Play className="h-5 w-5" />
              Watch Demo
            </button>
          </div>

          {/* Hero Image Placeholder */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
              <img
                src="/diverse-people-in-a-meeting-with-speech-bubbles-sh.jpg"
                alt="Real-time translation in action"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white">Youpi Demo</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-6">
              <div className="text-center">
                <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="font-body text-gray-600 dark:text-gray-400">
                  Demo video placeholder
                  <br />
                  <span className="text-sm">30-second real-time translation demo</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-body font-semibold rounded-xl transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
