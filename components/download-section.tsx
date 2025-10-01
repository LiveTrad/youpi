"use client"

import type React from "react"

import { useState } from "react"
import { Download, Chrome, FileBox as Firefox, Monitor, Smartphone, QrCode, Mail, X } from "lucide-react"

export function DownloadSection() {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false)
  const [email, setEmail] = useState("")
  const [selectedIntegration, setSelectedIntegration] = useState("")

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle waitlist signup
    console.log("Waitlist signup:", { email, integration: selectedIntegration })
    setShowWaitlistModal(false)
    setEmail("")
    setSelectedIntegration("")
  }

  const integrations = [
    { name: "Microsoft Teams", logo: "/placeholder.svg?height=40&width=40&text=Teams", status: "Beta Coming Q4 2025" },
    { name: "Google Meet", logo: "/placeholder.svg?height=40&width=40&text=Meet", status: "Beta Coming Q4 2025" },
    { name: "Zoom", logo: "/placeholder.svg?height=40&width=40&text=Zoom", status: "Beta Coming Q4 2025" },
    { name: "Slack", logo: "/placeholder.svg?height=40&width=40&text=Slack", status: "Beta Coming Q4 2025" },
  ]

  return (
    <>
      <section id="download" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
              Get <span className="gradient-text">Youpi</span> on Your Device
            </h2>
            <p className="font-body text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Download Youpi for seamless real-time translation across all your devices and platforms.
            </p>
          </div>

          {/* Download Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Desktop App Card */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                  <Monitor className="h-8 w-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white">Desktop App</h3>
                  <p className="font-body text-gray-600 dark:text-gray-300">Seamless integration for your workflow</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold">W</span>
                  </div>
                  <span className="font-body text-gray-700 dark:text-gray-300">Windows 10/11</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold">M</span>
                  </div>
                  <span className="font-body text-gray-700 dark:text-gray-300">macOS 11+</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold">L</span>
                  </div>
                  <span className="font-body text-gray-700 dark:text-gray-300">Linux (Ubuntu, Fedora)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors duration-200 font-body font-semibold">
                  <Download className="h-4 w-4" />
                  .exe
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-xl transition-colors duration-200 font-body font-semibold">
                  <Download className="h-4 w-4" />
                  .dmg
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-colors duration-200 font-body font-semibold">
                  <Download className="h-4 w-4" />
                  .deb
                </button>
              </div>
            </div>

            {/* Browser Extension Card */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-2xl">
                  <Chrome className="h-8 w-8 text-green-500" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white">Browser Extension</h3>
                  <p className="font-body text-gray-600 dark:text-gray-300">Instant translation in any tab</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Chrome className="h-8 w-8 text-blue-500" />
                  <span className="font-body text-gray-700 dark:text-gray-300">Google Chrome</span>
                </div>
                <div className="flex items-center gap-3">
                  <Firefox className="h-8 w-8 text-orange-500" />
                  <span className="font-body text-gray-700 dark:text-gray-300">Mozilla Firefox</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-500">E</span>
                  </div>
                  <span className="font-body text-gray-700 dark:text-gray-300">Microsoft Edge</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors duration-200 font-body font-semibold">
                  <Chrome className="h-4 w-4" />
                  Chrome
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-colors duration-200 font-body font-semibold">
                  <Firefox className="h-4 w-4" />
                  Firefox
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200 font-body font-semibold">
                  <span className="text-sm font-bold">E</span>
                  Edge
                </button>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="text-center mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md mx-auto shadow-lg">
              <QrCode className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-2">Quick Mobile Access</h3>
              <p className="font-body text-gray-600 dark:text-gray-300 mb-4">
                Scan to install browser extension on mobile
              </p>
              <div className="w-32 h-32 bg-gray-100 dark:bg-gray-700 rounded-xl mx-auto flex items-center justify-center">
                <span className="text-xs text-gray-500 dark:text-gray-400">QR Code</span>
              </div>
            </div>
          </div>

          {/* Coming Soon Banner */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-center text-white mb-16">
            <Smartphone className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-heading font-bold text-xl mb-2">Coming Soon: Native Mobile Apps</h3>
            <p className="font-body">Native apps for iOS & Android – Stay tuned for the ultimate mobile experience!</p>
          </div>
        </div>
      </section>

      {/* Integrations Teaser Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
              Exciting <span className="gradient-text">Updates</span> Ahead
            </h2>
            <p className="font-body text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're working on native integrations with your favorite platforms. Join the waitlist to be the first to
              know when they're ready!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <img
                  src={integration.logo || "/placeholder.svg"}
                  alt={`${integration.name} logo`}
                  className="w-12 h-12 mx-auto mb-4 rounded-lg"
                />
                <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-2">
                  {integration.name}
                </h3>
                <p className="font-body text-sm text-gray-600 dark:text-gray-300 mb-4">{integration.status}</p>
                <button
                  onClick={() => {
                    setSelectedIntegration(integration.name)
                    setShowWaitlistModal(true)
                  }}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-body font-semibold transition-colors duration-200"
                >
                  Join Waitlist
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      {showWaitlistModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white">
                Join {selectedIntegration} Waitlist
              </h3>
              <button
                onClick={() => setShowWaitlistModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <p className="font-body text-gray-600 dark:text-gray-300 mb-6">
              Be the first to know when {selectedIntegration} integration is available. We'll send you an email as soon
              as it's ready!
            </p>

            <form onSubmit={handleWaitlistSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block font-body font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowWaitlistModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-body font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors duration-200 font-body font-semibold flex items-center justify-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Join Waitlist
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
