"use client"

import { useState } from "react"
import { Check, Star, ChevronDown, ChevronUp } from "lucide-react"

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const plans = [
    {
      name: "Free",
      description: "Perfect for trying out Youpi",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "10 minutes translation per day",
        "10 languages supported",
        "Basic audio quality",
        "Community support",
        "Web browser only",
      ],
      buttonText: "Start Free",
      buttonStyle:
        "border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700",
      popular: false,
    },
    {
      name: "Pro",
      description: "Best for individuals and freelancers",
      monthlyPrice: 9,
      annualPrice: 7.2, // 20% discount
      features: [
        "Unlimited translation minutes",
        "50+ languages supported",
        "High-quality audio processing",
        "Priority email support",
        "Desktop app included",
        "Browser extension",
        "Export transcripts",
      ],
      buttonText: "Get Pro",
      buttonStyle: "bg-blue-500 hover:bg-blue-600 text-white",
      popular: true,
    },
    {
      name: "Business",
      description: "Great for teams and small businesses",
      monthlyPrice: 29,
      annualPrice: 23.2, // 20% discount
      features: [
        "Everything in Pro",
        "Team accounts (up to 10 users)",
        "Advanced analytics dashboard",
        "Custom vocabulary",
        "API access",
        "Phone support",
        "SSO integration",
        "Admin controls",
      ],
      buttonText: "Get Business",
      buttonStyle: "bg-green-500 hover:bg-green-600 text-white",
      popular: false,
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: null,
      annualPrice: null,
      features: [
        "Everything in Business",
        "Unlimited team members",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "On-premise deployment",
        "Custom training",
        "24/7 phone support",
      ],
      buttonText: "Contact Sales",
      buttonStyle: "bg-purple-500 hover:bg-purple-600 text-white",
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "How accurate is the translation?",
      answer:
        "Our AI-powered translation achieves 95% accuracy across all supported languages, with continuous improvements through machine learning.",
    },
    {
      question: "Can I use Youpi offline?",
      answer:
        "Currently, Youpi requires an internet connection for real-time translation. We're working on offline capabilities for future releases.",
    },
    {
      question: "What languages are supported?",
      answer:
        "We support 50+ languages including English, Spanish, French, German, Chinese, Japanese, Arabic, and many more. New languages are added regularly.",
    },
    {
      question: "Is there a free trial for paid plans?",
      answer: "Yes! All paid plans come with a 14-day free trial. No credit card required to start your trial.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Absolutely. You can cancel your subscription at any time from your account settings. No cancellation fees or long-term commitments.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund.",
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
            Pick Your Plan – <span className="gradient-text">Simple & Flexible</span>
          </h2>
          <p className="font-body text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your translation needs. Upgrade or downgrade anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={`font-body font-medium ${!isAnnual ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
                isAnnual ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                  isAnnual ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`font-body font-medium ${isAnnual ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
            >
              Annual
            </span>
            {isAnnual && (
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? "ring-2 ring-blue-500 scale-105" : "hover:scale-105"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-2">{plan.name}</h3>

              {/* Plan Description */}
              <p className="font-body text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                {plan.monthlyPrice !== null ? (
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-bold text-4xl text-gray-900 dark:text-white">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="font-body text-gray-600 dark:text-gray-300">/month</span>
                  </div>
                ) : (
                  <div className="font-heading font-bold text-4xl text-gray-900 dark:text-white">Custom</div>
                )}
                {isAnnual && plan.monthlyPrice !== null && (
                  <p className="font-body text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Billed annually (${((isAnnual ? plan.annualPrice : plan.monthlyPrice) * 12).toFixed(0)}/year)
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="font-body text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full px-6 py-3 rounded-xl font-body font-semibold transition-all duration-200 ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <span className="font-body font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="font-body text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
