import { MinimalHeader } from "@/components/minimal-header"
import { MinimalFooter } from "@/components/minimal-footer"
import { AnnouncementBanner } from "@/components/announcement-banner"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBanner />
      <MinimalHeader />

      <main className="pt-[108px] sm:pt-[120px] pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12 pt-12">
            <h1 className="text-4xl sm:text-5xl font-poppins font-light text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Youpi's services, you accept and agree to be bound by the terms and provision of
                this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of Youpi for personal, non-commercial transitory
                viewing only. This is the grant of a license, not a transfer of title, and under this license you may
                not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained in Youpi</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">3. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you create an account with us, you must provide accurate, complete, and current information at all
                times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of
                your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">4. Service Usage</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to use Youpi's services only for lawful purposes and in accordance with these Terms. You agree
                not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Use the service in any way that violates any applicable law or regulation</li>
                <li>Transmit any harmful or malicious code</li>
                <li>Attempt to gain unauthorized access to any portion of the service</li>
                <li>Interfere with or disrupt the service or servers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">5. Subscription and Fees</h2>
              <p className="text-muted-foreground leading-relaxed">
                Some parts of the service are billed on a subscription basis. You will be billed in advance on a
                recurring and periodic basis. Billing cycles are set on a monthly or annual basis, depending on the type
                of subscription plan you select.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">6. Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                We offer a 30-day money-back guarantee for all paid subscriptions. If you are not satisfied with our
                service, you may request a full refund within 30 days of your initial purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">7. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The service and its original content, features, and functionality are and will remain the exclusive
                property of Youpi and its licensors. The service is protected by copyright, trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">8. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use
                the service will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Youpi, nor its directors, employees, partners, agents, suppliers, or affiliates, be
                liable for any indirect, incidental, special, consequential or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">10. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms, please contact us at legal@youpi.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <MinimalFooter />
    </div>
  )
}
