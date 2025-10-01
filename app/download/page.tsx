"use client"

import { useEffect, useState } from "react"
import { Download, Monitor, Apple, Chrome } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MinimalHeader } from "@/components/minimal-header"
import { MinimalFooter } from "@/components/minimal-footer"
import { AnnouncementBanner } from "@/components/announcement-banner"

type OS = "windows" | "mac" | "linux" | "unknown"

export default function DownloadPage() {
  const [detectedOS, setDetectedOS] = useState<OS>("unknown")

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase()

    if (userAgent.indexOf("win") !== -1) {
      setDetectedOS("windows")
    } else if (userAgent.indexOf("mac") !== -1) {
      setDetectedOS("mac")
    } else if (userAgent.indexOf("linux") !== -1) {
      setDetectedOS("linux")
    }
  }, [])

  const downloads = [
    {
      os: "windows",
      name: "Windows",
      icon: <Monitor className="w-12 h-12" />,
      version: "v1.0.0",
      size: "85 MB",
      requirements: "Windows 10 or later",
      downloadUrl: "#",
    },
    {
      os: "mac",
      name: "macOS",
      icon: <Apple className="w-12 h-12" />,
      version: "v1.0.0",
      size: "92 MB",
      requirements: "macOS 11.0 or later",
      downloadUrl: "#",
    },
    {
      os: "linux",
      name: "Linux",
      icon: <Monitor className="w-12 h-12" />,
      version: "v1.0.0",
      size: "88 MB",
      requirements: "Ubuntu 20.04+ / Debian 11+",
      downloadUrl: "#",
    },
  ]

  const recommendedDownload = downloads.find((d) => d.os === detectedOS)

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBanner />
      <MinimalHeader />

      <main className="pt-[108px] sm:pt-[120px] pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <div className="text-center mb-16 pt-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-light text-foreground mb-6 text-balance">
              Download <span className="text-primary font-medium">Youpi</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Get started with real-time translation on your desktop or browser
            </p>
          </div>

          {/* Recommended Download */}
          {recommendedDownload && (
            <div className="mb-16 max-w-2xl mx-auto">
              <div className="bg-primary/10 border-2 border-primary rounded-2xl p-8 text-center">
                <div className="inline-block p-4 bg-primary/20 rounded-full mb-4">{recommendedDownload.icon}</div>
                <h2 className="text-2xl font-poppins font-medium text-foreground mb-2">Recommended for your system</h2>
                <p className="text-muted-foreground mb-6">
                  {recommendedDownload.name} • {recommendedDownload.version} • {recommendedDownload.size}
                </p>
                <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90 px-8 py-6 text-lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download for {recommendedDownload.name}
                </Button>
                <p className="text-sm text-muted-foreground mt-4">{recommendedDownload.requirements}</p>
              </div>
            </div>
          )}

          {/* All Downloads */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-poppins font-light text-center text-foreground mb-8">
              All Desktop Downloads
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {downloads.map((download) => (
                <div
                  key={download.os}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="text-primary mb-4">{download.icon}</div>
                  <h3 className="text-xl font-poppins font-medium text-card-foreground mb-2">{download.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {download.version} • {download.size}
                  </p>
                  <p className="text-xs text-muted-foreground mb-6">{download.requirements}</p>
                  <Button className="w-full" variant={download.os === detectedOS ? "default" : "outline"}>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Chrome Extension */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-accent/20 rounded-full">
                  <Chrome className="w-12 h-12 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-poppins font-medium text-card-foreground">Chrome Extension</h2>
                  <p className="text-muted-foreground">Translate directly in your browser</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Get real-time translation for any audio playing in your Chrome browser. Perfect for video calls, online
                meetings, and streaming content.
              </p>
              <Button size="lg" className="w-full bg-accent text-accent-foreground hover:opacity-90">
                <Chrome className="w-5 h-5 mr-2" />
                Add to Chrome
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-poppins font-medium text-foreground mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">Sub-second latency for real-time conversations</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-poppins font-medium text-foreground mb-2">Private & Secure</h3>
              <p className="text-sm text-muted-foreground">End-to-end encryption for all your translations</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="font-poppins font-medium text-foreground mb-2">100+ Languages</h3>
              <p className="text-sm text-muted-foreground">Support for the world's most spoken languages</p>
            </div>
          </div>
        </div>
      </main>

      <MinimalFooter />
    </div>
  )
}
