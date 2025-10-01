"use client"

import type React from "react"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function MinimalPricing() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal()
  const { ref: freeRef, isVisible: freeVisible } = useScrollReveal()
  const { ref: proRef, isVisible: proVisible } = useScrollReveal()
  const { ref: businessRef, isVisible: businessVisible } = useScrollReveal()

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for discovering Youpi",
      features: [
        "10 minutes of translation/day",
        "5 languages available",
        "Basic voice translation",
        "Community support",
      ],
      cta: "Start for Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$9",
      period: "/month",
      description: "For intensive personal use",
      features: [
        "Unlimited translation",
        "100+ languages available",
        "Advanced conversation mode",
        "Conversation backup",
        "Priority support",
        "Multi-device sync",
      ],
      cta: "Try Pro",
      popular: true,
    },
    {
      name: "Business",
      price: "$29",
      period: "/month",
      description: "For teams and enterprises",
      features: [
        "Everything in Pro",
        "Unlimited team accounts",
        "Integration API",
        "Document translation",
        "Advanced analytics",
        "24/7 dedicated support",
        "GDPR compliance",
      ],
      cta: "Contact Team",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-light text-foreground mb-4 sm:mb-6 text-balance">
            <span className="text-accent font-medium">Simple</span> and transparent pricing
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-balance px-4">
            Choose the plan that fits your needs. Change or cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const ref = index === 0 ? freeRef : index === 1 ? proRef : businessRef
            const isVisible = index === 0 ? freeVisible : index === 1 ? proVisible : businessVisible
            return (
              <div
                key={index}
                ref={ref as React.RefObject<HTMLDivElement>}
                className={`relative bg-card border rounded-xl p-6 sm:p-8 text-center transition-all duration-700 ${
                  plan.popular ? "border-primary shadow-lg" : "border-border"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium">
                      Popular
                    </span>
                  </div>
                )}

                <div className="mb-8 sm:mb-10">
                  <h3 className="text-xl sm:text-2xl font-poppins font-medium text-card-foreground mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-3">
                    <span className="text-4xl sm:text-5xl font-poppins font-light text-card-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2 text-base sm:text-lg">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base">{plan.description}</p>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 mr-3 sm:mr-4 flex-shrink-0" />
                      <span className="text-card-foreground text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 sm:py-4 text-base sm:text-lg font-medium ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <p className="text-muted-foreground text-base sm:text-lg">All plans include a 30-day money-back guarantee</p>
        </div>
      </div>
    </section>
  )
}
