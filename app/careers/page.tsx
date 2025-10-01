import { MinimalHeader } from "@/components/minimal-header"
import { MinimalFooter } from "@/components/minimal-footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { Button } from "@/components/ui/button"
import { Briefcase, MapPin, Clock, Users } from "lucide-react"

export default function CareersPage() {
  const openings = [
    {
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Help us build the future of real-time translation. Work with cutting-edge AI and web technologies.",
    },
    {
      title: "Machine Learning Engineer",
      department: "AI/ML",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Improve our translation models and develop new AI capabilities for multilingual communication.",
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create beautiful, intuitive experiences that make translation seamless for millions of users.",
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "New York, NY / Remote",
      type: "Full-time",
      description: "Help our enterprise customers succeed with Youpi and build lasting relationships.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBanner />
      <MinimalHeader />

      <main className="pt-[108px] sm:pt-[120px] pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <div className="text-center mb-16 pt-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-light text-foreground mb-6 text-balance">
              Join the <span className="text-primary font-medium">Youpi</span> Team
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Help us break down language barriers and connect people around the world
            </p>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-poppins font-light text-center text-foreground mb-8">
              Why Work at Youpi?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-poppins font-medium text-card-foreground mb-2">Cutting-Edge Technology</h3>
                <p className="text-sm text-muted-foreground">
                  Work with the latest AI and real-time communication technologies
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="font-poppins font-medium text-card-foreground mb-2">Global Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Your work helps millions of people communicate across languages
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="font-poppins font-medium text-card-foreground mb-2">Innovation First</h3>
                <p className="text-sm text-muted-foreground">
                  We encourage experimentation and creative problem-solving
                </p>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-poppins font-light text-center text-foreground mb-8">
              Open Positions
            </h2>
            <div className="space-y-4">
              {openings.map((job, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-poppins font-medium text-card-foreground mb-2">{job.title}</h3>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="lg:w-auto">Apply Now</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Beta Tester Section */}
          <div className="mb-16">
            <div className="bg-primary/10 border-2 border-primary rounded-2xl p-8 text-center">
              <div className="inline-block p-4 bg-primary/20 rounded-full mb-4">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-poppins font-medium text-foreground mb-4">
                Become a Beta Tester
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Want to help shape the future of Youpi? Join our beta testing program and get early access to new
                features. Your feedback directly influences our product development.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90">
                Join Beta Program
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Note: Beta tester application link will be available soon
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-poppins font-light text-center text-foreground mb-8">
              Benefits & Perks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="text-3xl mb-3">🏥</div>
                <h3 className="font-poppins font-medium text-foreground mb-2">Health Coverage</h3>
                <p className="text-sm text-muted-foreground">Comprehensive medical, dental, and vision insurance</p>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl mb-3">🏖️</div>
                <h3 className="font-poppins font-medium text-foreground mb-2">Unlimited PTO</h3>
                <p className="text-sm text-muted-foreground">Take the time you need to recharge</p>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-poppins font-medium text-foreground mb-2">Competitive Salary</h3>
                <p className="text-sm text-muted-foreground">Plus equity in a fast-growing company</p>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl mb-3">🏠</div>
                <h3 className="font-poppins font-medium text-foreground mb-2">Remote Friendly</h3>
                <p className="text-sm text-muted-foreground">Work from anywhere in the world</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Don't see a position that fits?</p>
            <Button variant="outline" size="lg">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </main>

      <MinimalFooter />
    </div>
  )
}
