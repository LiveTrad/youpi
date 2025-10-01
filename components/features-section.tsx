import { Mic, Globe, Monitor, Settings, Shield, Rocket, CheckCircle, Clock, Users } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Mic className="h-8 w-8 text-blue-500" />,
      title: "Real-Time Audio Translation",
      description: "Translate any audio source instantly",
      bullets: ["Live meetings and conferences", "Video calls and webinars", "Podcasts and media content"],
    },
    {
      icon: <Globe className="h-8 w-8 text-green-500" />,
      title: "50+ Languages Supported",
      description: "Comprehensive language coverage",
      bullets: [
        "95% accuracy across all languages",
        "Sub-second translation speed",
        "Continuous learning and improvement",
      ],
    },
    {
      icon: <Monitor className="h-8 w-8 text-purple-500" />,
      title: "Cross-Platform Compatibility",
      description: "Works everywhere you need it",
      bullets: ["Browser extension for any website", "Desktop app for Windows, Mac, Linux", "Mobile apps coming soon"],
    },
    {
      icon: <Settings className="h-8 w-8 text-orange-500" />,
      title: "Easy Setup & Use",
      description: "Get started in minutes",
      bullets: ["One-click installation process", "Intuitive user interface", "No technical knowledge required"],
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "Secure & Private",
      description: "Your conversations stay protected",
      bullets: ["End-to-end encryption", "No data stored on servers", "GDPR and SOC2 compliant"],
    },
    {
      icon: <Rocket className="h-8 w-8 text-indigo-500" />,
      title: "Native Integrations",
      description: "Seamless workflow integration",
      bullets: ["Microsoft Teams integration", "Google Meet and Zoom support", "Slack and Discord compatibility"],
      comingSoon: true,
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
            Why Choose <span className="gradient-text">Youpi</span>?
          </h2>
          <p className="font-body text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the future of real-time translation with cutting-edge AI technology that breaks down language
            barriers instantly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              {/* Coming Soon Badge */}
              {feature.comingSoon && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Rocket className="h-3 w-3" />
                  Coming Soon
                </div>
              )}

              {/* Icon */}
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>

              {/* Title */}
              <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-3">{feature.title}</h3>

              {/* Description */}
              <p className="font-body text-gray-600 dark:text-gray-300 mb-6">{feature.description}</p>

              {/* Bullet Points */}
              <ul className="space-y-3">
                {feature.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="font-body text-sm text-gray-600 dark:text-gray-300">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Stats Section */}
        <div className="mt-20 bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-2">&lt;1s</div>
              <div className="font-body text-gray-600 dark:text-gray-300">Average translation latency</div>
            </div>

            <div className="group">
              <Users className="h-12 w-12 text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-2">24/7</div>
              <div className="font-body text-gray-600 dark:text-gray-300">Customer support available</div>
            </div>

            <div className="group">
              <Globe className="h-12 w-12 text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-2">99.9%</div>
              <div className="font-body text-gray-600 dark:text-gray-300">Service uptime guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
