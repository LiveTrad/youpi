import { MinimalHeader } from "@/components/minimal-header"
import { MinimalFooter } from "@/components/minimal-footer"
import { AnnouncementBanner } from "@/components/announcement-banner"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBanner />
      <MinimalHeader />

      <main className="pt-[108px] sm:pt-[120px] pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-20">
            <div className="text-6xl mb-6 animate-float">🚀</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-light text-foreground mb-6 text-balance">
              Blog <span className="text-primary font-medium">Coming Soon</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance mb-8">
              We're working on bringing you insightful articles about translation technology, language learning, and
              global communication. Stay tuned!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:contact@youpi.com?subject=Blog Updates"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Get Notified
              </a>
              <a
                href="/"
                className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </main>

      <MinimalFooter />
    </div>
  )
}
