"use client"

import type React from "react"

import { Mic, Globe, Zap, Shield, Users, Smartphone } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function MinimalFeatures() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal()
  const { ref: feature1Ref, isVisible: feature1Visible } = useScrollReveal()
  const { ref: feature2Ref, isVisible: feature2Visible } = useScrollReveal()
  const { ref: feature3Ref, isVisible: feature3Visible } = useScrollReveal()
  const { ref: feature4Ref, isVisible: feature4Visible } = useScrollReveal()
  const { ref: feature5Ref, isVisible: feature5Visible } = useScrollReveal()
  const { ref: feature6Ref, isVisible: feature6Visible } = useScrollReveal()

  const features = [
    {
      icon: <Mic className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Voice Translation",
      description: "Speak naturally, get instant translation with exceptional accuracy",
      ref: feature1Ref,
      isVisible: feature1Visible,
    },
    {
      icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "100+ Languages",
      description: "Complete support for the world's most spoken languages, with regional dialects",
      ref: feature2Ref,
      isVisible: feature2Visible,
    },
    {
      icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Real Time",
      description: "Instant translation with no perceptible delay thanks to our optimized AI",
      ref: feature3Ref,
      isVisible: feature3Visible,
    },
    {
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Private & Secure",
      description: "Your conversations remain confidential with end-to-end encryption",
      ref: feature4Ref,
      isVisible: feature4Visible,
    },
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Conversation Mode",
      description: "Fluid discussions between multiple people with speaker recognition",
      ref: feature5Ref,
      isVisible: feature5Visible,
    },
    {
      icon: <Smartphone className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Multi-Platform",
      description: "Available on all your devices with automatic synchronization",
      ref: feature6Ref,
      isVisible: feature6Visible,
    },
  ]

  return (
    <section id="features" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-light text-foreground mb-4 sm:mb-6 text-balance">
            Why choose <span className="text-primary font-medium">Youpi</span>?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-balance px-4">
            Cutting-edge technology for conversations without language barriers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                ref={feature.ref as React.RefObject<HTMLDivElement>}
                className={`bg-card border border-border rounded-xl p-6 sm:p-8 group hover:border-primary/50 transition-all duration-700 ${
                  feature.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-primary mb-4 sm:mb-6 group-hover:text-accent transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-poppins font-medium text-card-foreground mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
