"use client"

import { useState } from "react"
import { ChevronDown, Search } from "lucide-react"

export function MinimalFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0)
  const [searchTerm, setSearchTerm] = useState("")

  const faqs = [
    {
      question: "How accurate is Youpi's real-time translation?",
      answer:
        "Youpi achieves 95%+ accuracy across 50+ languages using advanced AI models. Our system continuously learns and improves, with specialized models for technical, medical, and business terminology.",
    },
    {
      question: "What's the latency for real-time translation?",
      answer:
        "Youpi delivers translations with sub-second latency (typically 200-500ms), ensuring natural conversation flow. This makes it perfect for live meetings, calls, and interactive discussions.",
    },
    {
      question: "Which languages are supported?",
      answer:
        "We support 50+ languages including English, Spanish, French, German, Chinese, Japanese, Korean, Arabic, Portuguese, Russian, and many more. New languages are added regularly based on user demand.",
    },
    {
      question: "Can I use Youpi offline?",
      answer:
        "Yes! Youpi offers offline mode for essential languages. While online mode provides the highest accuracy and latest features, offline mode ensures you're never without translation capabilities.",
    },
    {
      question: "Is my data secure and private?",
      answer:
        "Absolutely. We use end-to-end encryption for all translations. Your conversations are processed securely and never stored permanently. We're GDPR compliant and prioritize your privacy.",
    },
    {
      question: "What platforms does Youpi work with?",
      answer:
        "Youpi integrates with Zoom, Teams, Google Meet, Slack, and works as a standalone app on Windows, Mac, iOS, and Android. Browser extension available for web-based meetings.",
    },
    {
      question: "How much does Youpi cost?",
      answer:
        "We offer a free tier with basic features, Pro plans starting at $9/month for individuals, and Enterprise solutions for teams. All plans include core translation features with varying usage limits.",
    },
    {
      question: "Can I try Youpi before purchasing?",
      answer:
        "Yes! Start with our free tier that includes 100 minutes of translation per month. No credit card required. Upgrade anytime as your needs grow.",
    },
  ]

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl sm:text-4xl text-foreground mb-6 text-balance">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">Everything you need to know about Youpi</p>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-card-foreground"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenItem(openItem === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted transition-colors"
              >
                <span className="font-medium text-card-foreground">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                    openItem === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openItem === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No FAQs found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
