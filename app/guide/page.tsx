"use client"

import { useState } from "react"
import { Play, BookOpen, Settings, Mic, Globe, Zap } from "lucide-react"
import { MinimalHeader } from "@/components/minimal-header"
import { MinimalFooter } from "@/components/minimal-footer"
import { AnnouncementBanner } from "@/components/announcement-banner"

export default function GuidePage() {
  const [activeSection, setActiveSection] = useState("getting-started")

  const sections = [
    { id: "getting-started", title: "Getting Started", icon: <Play className="w-5 h-5" /> },
    { id: "basic-usage", title: "Basic Usage", icon: <BookOpen className="w-5 h-5" /> },
    { id: "settings", title: "Settings & Configuration", icon: <Settings className="w-5 h-5" /> },
    { id: "advanced", title: "Advanced Features", icon: <Zap className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBanner />
      <MinimalHeader />

      <main className="pt-[108px] sm:pt-[120px] pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <div className="text-center mb-12 pt-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-light text-foreground mb-6 text-balance">
              <span className="text-primary font-medium">Youpi</span> User Guide
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Everything you need to know to get the most out of Youpi
            </p>
          </div>

          {/* Video Guide */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center relative">
                <video className="w-full h-full" controls poster="/youpi-guide-thumbnail.jpg">
                  <source src="/guide-video.mp4" type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-2">Complete Video Tutorial</h2>
                <p className="text-muted-foreground">
                  Watch our comprehensive guide to learn how to use all of Youpi's features in just 10 minutes.
                </p>
              </div>
            </div>
          </div>

          {/* Guide Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-xl p-4 sticky top-24">
                <h3 className="font-poppins font-medium text-card-foreground mb-4">Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeSection === section.id
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {section.icon}
                      <span className="text-sm">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-xl p-8">
                {activeSection === "getting-started" && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-poppins font-medium text-card-foreground mb-4">Getting Started</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Welcome to Youpi! This guide will help you set up and start using real-time translation in
                        minutes.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-poppins font-medium text-card-foreground mb-3">
                        1. Download and Install
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Download Youpi for your operating system from our download page. The installation process is
                        straightforward and takes less than a minute.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Windows: Run the .exe installer and follow the prompts</li>
                        <li>macOS: Open the .dmg file and drag Youpi to Applications</li>
                        <li>Linux: Use the .deb or .rpm package for your distribution</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-poppins font-medium text-card-foreground mb-3">
                        2. Create Your Account
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Launch Youpi and create a free account. You'll need an email address to get started. Your
                        account syncs across all your devices automatically.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-poppins font-medium text-card-foreground mb-3">
                        3. Select Your Languages
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Choose your source language (what you speak) and target language (what you want to translate
                        to). You can change these at any time.
                      </p>
                    </div>
                  </div>
                )}

                {activeSection === "basic-usage" && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-poppins font-medium text-card-foreground mb-4">Basic Usage</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Learn the fundamentals of using Youpi for real-time translation.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-poppins font-medium text-card-foreground mb-3">Voice Translation</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Click the microphone button to start translating. Speak naturally and Youpi will translate in
                        real-time with sub-second latency.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-poppins font-medium text-card-foreground mb-3">
                        System Audio Translation
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Youpi can translate any audio playing on your computer, including:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Video conferencing apps (Zoom, Teams, Google Meet)</li>
                        <li>Streaming services (YouTube, Netflix, etc.)</li>
                        <li>Any other audio source on your system</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-poppins font-medium text-card-foreground mb-3">Conversation Mode</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Enable conversation mode for multi-person discussions. Youpi will automatically detect different
                        speakers and translate each person's speech separately.
                      </p>
                    </div>
                  </div>
                )}

                {activeSection === "settings" && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-poppins font-medium text-card-foreground mb-4">
                        Settings & Configuration
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Customize Youpi to match your preferences and workflow.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-poppins font-medium text-card-foreground mb-3">Language Settings</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Configure your preferred languages and dialects. You can save multiple language pairs for quick
                        switching.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-poppins font-medium text-card-foreground mb-3">Audio Settings</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Adjust microphone input, speaker output, and audio quality settings. Test your audio setup to
                        ensure optimal translation quality.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-poppins font-medium text-card-foreground mb-3">Display Options</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Customize how translations are displayed, including font size, overlay position, and color
                        themes. Choose between light and dark modes.
                      </p>
                    </div>
                  </div>
                )}

                {activeSection === "advanced" && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-poppins font-medium text-card-foreground mb-4">Advanced Features</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Unlock the full potential of Youpi with these advanced capabilities.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-poppins font-medium text-card-foreground mb-3">Custom Vocabulary</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Add industry-specific terms, names, and phrases to improve translation accuracy for your
                        specific use case.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-poppins font-medium text-card-foreground mb-3">
                        Translation History
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Access your complete translation history. Search, export, and review past conversations.
                        Available on Pro and Business plans.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-poppins font-medium text-card-foreground mb-3">API Integration</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Integrate Youpi's translation capabilities into your own applications using our REST API.
                        Available on Business plans.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-poppins font-medium text-card-foreground mb-3">Keyboard Shortcuts</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Master these keyboard shortcuts for faster workflow:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl/Cmd + M</kbd> - Toggle microphone
                        </li>
                        <li>
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl/Cmd + L</kbd> - Switch languages
                        </li>
                        <li>
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl/Cmd + S</kbd> - Open settings
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-poppins font-light text-center text-foreground mb-8">
              Quick Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="text-primary mb-4">
                  <Mic className="w-8 h-8" />
                </div>
                <h3 className="font-poppins font-medium text-card-foreground mb-2">Speak Clearly</h3>
                <p className="text-sm text-muted-foreground">
                  For best results, speak at a normal pace in a quiet environment. Youpi works best with clear audio
                  input.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="text-primary mb-4">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="font-poppins font-medium text-card-foreground mb-2">Try Different Languages</h3>
                <p className="text-sm text-muted-foreground">
                  Experiment with different language pairs. Youpi supports 100+ languages with regional dialect
                  variations.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="text-primary mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="font-poppins font-medium text-card-foreground mb-2">Use Shortcuts</h3>
                <p className="text-sm text-muted-foreground">
                  Learn keyboard shortcuts to speed up your workflow and switch between features quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MinimalFooter />
    </div>
  )
}
