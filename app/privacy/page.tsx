import { MinimalHeader } from "@/components/minimal-header"
import { MinimalFooter } from "@/components/minimal-footer"
import { AnnouncementBanner } from "@/components/announcement-banner"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBanner />
      <MinimalHeader />

      <main className="pt-[108px] sm:pt-[120px] pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12 pt-12">
            <h1 className="text-4xl sm:text-5xl font-poppins font-light text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Account information (name, email address, password)</li>
                <li>Profile information (language preferences, settings)</li>
                <li>Usage data (translation history, feature usage)</li>
                <li>Audio data processed for translation (not stored unless you opt-in)</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your translations in real-time</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns to improve our AI models</li>
                <li>Detect and prevent fraud and abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">3. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We take data security seriously and implement industry-standard measures to protect your information.
                All audio data is encrypted in transit using TLS 1.3. Translation processing happens in real-time and
                audio is not stored on our servers unless you explicitly enable the conversation history feature.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">4. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your account information for as long as your account is active. Translation history is
                retained according to your subscription plan (Pro and Business plans only). You can delete your
                translation history at any time from your account settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">5. Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal information. We may share your information only in the following
                circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>With your consent</li>
                <li>With service providers who assist in our operations</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Export your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">7. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our service and hold certain
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">
                9. International Transfers
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and maintained on computers located outside of your state,
                province, country, or other governmental jurisdiction where data protection laws may differ. We ensure
                appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">10. GDPR Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you are a resident of the European Economic Area (EEA), you have certain data protection rights. We
                comply with GDPR requirements and provide mechanisms for you to exercise your rights under GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">
                11. Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-medium text-card-foreground mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@youpi.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <MinimalFooter />
    </div>
  )
}
