"use client"

import type React from "react"

import { Download, Smartphone, Monitor, Chrome, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function MinimalDownload() {
  const [email, setEmail] = useState("")
  const [isWaitlistSubmitted, setIsWaitlistSubmitted] = useState(false)

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsWaitlistSubmitted(true)
    setEmail("")
  }

  return (
    <section id="download" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-light text-foreground mb-4 sm:mb-6 text-balance">
            Get Started with <span className="text-primary font-medium">Youpi</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-balance">
            Download the app or join the waitlist for native integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 lg:p-10 text-center group hover:border-primary/50 transition-colors">
            <div className="mb-6 sm:mb-8 flex justify-center text-primary group-hover:text-accent transition-colors duration-300">
              <Monitor className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
            </div>
            <h3 className="text-xl sm:text-2xl font-poppins font-medium text-foreground mb-2 sm:mb-3">Desktop App</h3>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg">Windows, macOS, Linux</p>
            <Button className="w-full py-3 sm:py-4 text-base sm:text-lg font-medium mb-3 sm:mb-4">
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              Download Now
            </Button>
            <p className="text-muted-foreground text-sm">Free • 50MB • All versions supported</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 lg:p-10 text-center group hover:border-primary/50 transition-colors">
            <div className="mb-6 sm:mb-8 flex justify-center text-primary group-hover:text-accent transition-colors duration-300">
              <Chrome className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
            </div>
            <h3 className="text-xl sm:text-2xl font-poppins font-medium text-foreground mb-2 sm:mb-3">
              Browser Extension
            </h3>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg">Chrome, Firefox, Safari</p>
            <Button className="w-full py-3 sm:py-4 text-base sm:text-lg font-medium mb-3 sm:mb-4">
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              Install Extension
            </Button>
            <p className="text-muted-foreground text-sm">Free • Works with desktop app</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="bg-card border border-accent/30 rounded-xl p-6 sm:p-8 lg:p-10 text-center">
            <div className="mb-6 sm:mb-8 flex justify-center text-accent">
              <Smartphone className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
            </div>
            <h3 className="text-xl sm:text-2xl font-poppins font-medium text-foreground mb-3 sm:mb-4">
              Native Integrations
            </h3>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg text-balance px-2">
              Zoom, Teams, Meet, Discord... Coming soon directly in your favorite apps.
            </p>

            {!isWaitlistSubmitted ? (
              <form
                onSubmit={handleWaitlistSubmit}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 h-12 sm:h-14 px-4 sm:px-6 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm sm:text-base"
                  required
                />
                <Button type="submit" className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Join Waitlist
                </Button>
              </form>
            ) : (
              <div className="text-accent font-medium text-base sm:text-lg px-4">
                ✓ Thank you! You'll be notified as soon as integrations are available.
              </div>
            )}
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg">Or access instantly:</p>
          <div className="inline-block bg-card border border-border rounded-xl p-6 sm:p-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-foreground rounded-lg mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <div className="text-background text-xs sm:text-sm font-mono text-center font-bold">
                QR
                <br />
                YOUPI
              </div>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base">Instant web version</p>
          </div>
        </div>
      </div>
    </section>
  )
}
