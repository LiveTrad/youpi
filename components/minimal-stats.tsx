"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Users, Clock, Globe, Zap } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function MinimalStats() {
  const { ref, isVisible } = useScrollReveal()
  const [stats, setStats] = useState({
    users: 0,
    hours: 0,
    languages: 0,
    accuracy: 0,
  })

  const finalStats = {
    users: 50000,
    hours: 2500000,
    languages: 50,
    accuracy: 95,
  }

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setStats({
        users: Math.floor(finalStats.users * progress),
        hours: Math.floor(finalStats.hours * progress),
        languages: Math.floor(finalStats.languages * progress),
        accuracy: Math.floor(finalStats.accuracy * progress),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setStats(finalStats)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible])

  const statItems = [
    {
      icon: Users,
      value: stats.users.toLocaleString() + "+",
      label: "Active Users",
      color: "text-primary",
    },
    {
      icon: Clock,
      value: (stats.hours / 1000000).toFixed(1) + "M+",
      label: "Hours Translated",
      color: "text-accent",
    },
    {
      icon: Globe,
      value: stats.languages + "+",
      label: "Languages",
      color: "text-primary",
    },
    {
      icon: Zap,
      value: stats.accuracy + "%",
      label: "Accuracy",
      color: "text-accent",
    },
  ]

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-bold text-2xl sm:text-3xl text-foreground mb-4">
            Trusted by <span className="text-primary">Thousands</span> Worldwide
          </h2>
          <p className="text-muted-foreground">Real-time statistics from our global community</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((item, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-card rounded-full border border-border">
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
              </div>
              <div className="font-bold text-2xl sm:text-3xl text-foreground mb-2">{item.value}</div>
              <div className="text-muted-foreground text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
