"use client"

import type React from "react"

import { useState } from "react"
import { Twitter, Linkedin, Github, Mail, Send, Heart } from "lucide-react"

export function FooterSection() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle contact form submission
    console.log("Contact form submitted:", contactForm)
    setContactForm({ name: "", email: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
              Built for <span className="gradient-text">Global Connections</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <div>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="font-body text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Created by a passionate AI engineer who experienced firsthand the frustration of language barriers in
                  international business meetings. After missing crucial details in a client presentation due to poor
                  real-time translation, the vision for Youpi was born.
                </p>
                <p className="font-body text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Our mission is simple: make real-time, accurate translation accessible to everyone, everywhere.
                  Whether you're in a boardroom in Tokyo, attending a virtual conference from home, or collaborating
                  with international teammates, Youpi ensures you never miss a word.
                </p>
                <p className="font-body text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Today, Youpi serves thousands of users worldwide, breaking down language barriers and fostering global
                  collaboration one conversation at a time.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6">
                <span className="font-body font-semibold text-gray-700 dark:text-gray-300">Follow our journey:</span>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                  >
                    <Twitter className="h-5 w-5 text-blue-500 group-hover:text-blue-600" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                  >
                    <Linkedin className="h-5 w-5 text-blue-700 group-hover:text-blue-800" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                  >
                    <Github className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-6 w-6 text-blue-500" />
                <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white">Get in Touch</h3>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-body font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-body font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-body font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                    placeholder="Tell us about your translation needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors duration-200 font-body font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-heading font-bold text-2xl text-white">Youpi</h3>
                <span className="text-sm text-gray-400 font-body">(Your Personal Interpreter)</span>
              </div>
              <p className="font-body text-gray-300 mb-6 max-w-md">
                Breaking down language barriers with AI-powered real-time translation. Connect with the world, one
                conversation at a time.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h4 className="font-heading font-bold text-lg text-white mb-4">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#features"
                    className="font-body text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="font-body text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#download"
                    className="font-body text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Download
                  </a>
                </li>
                <li>
                  <a href="#" className="font-body text-gray-300 hover:text-white transition-colors duration-200">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="font-body text-gray-300 hover:text-white transition-colors duration-200">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="font-heading font-bold text-lg text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="font-body text-gray-300 hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="font-body text-gray-300 hover:text-white transition-colors duration-200">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="font-body text-gray-300 hover:text-white transition-colors duration-200">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="font-body text-gray-300 hover:text-white transition-colors duration-200">
                    GDPR Compliance
                  </a>
                </li>
                <li>
                  <a href="#about" className="font-body text-gray-300 hover:text-white transition-colors duration-200">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-body text-gray-400 text-center md:text-left">
                © 2025 Youpi – Your Personal Interpreter. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="font-body text-sm">Made with</span>
                <Heart className="h-4 w-4 text-red-500" />
                <span className="font-body text-sm">for global communication</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
