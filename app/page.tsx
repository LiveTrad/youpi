import { AnnouncementBanner } from "@/components/announcement-banner"
import { MinimalHeader } from "@/components/minimal-header"
import { MinimalHero } from "@/components/minimal-hero"
import { MinimalFeatures } from "@/components/minimal-features"
import { MinimalStats } from "@/components/minimal-stats"
import { MinimalTestimonials } from "@/components/minimal-testimonials"
import { MinimalPricing } from "@/components/minimal-pricing"
import { MinimalFAQ } from "@/components/minimal-faq"
import { MinimalDownload } from "@/components/minimal-download"
import { MinimalFooter } from "@/components/minimal-footer"

export default function Home() {
  return (
    <>
      <AnnouncementBanner />
      <main className="min-h-screen bg-background">
        <MinimalHeader />
        <MinimalHero />
        <MinimalFeatures />
        <MinimalStats />
        <MinimalTestimonials />
        <MinimalPricing />
        <MinimalFAQ />
        <MinimalDownload />
        <MinimalFooter />
      </main>
    </>
  )
}
