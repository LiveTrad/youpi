"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function MinimalHero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const handleGetStarted = () => {
    setIsModalOpen(false)
    router.push("/guide")
  }

  return (
    <section className="min-h-[calc(100vh-120px)] bg-background flex items-center justify-center px-4 sm:px-6 pt-28 sm:pt-32 md:pt-36 lg:pt-40">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-poppins font-light text-foreground mb-6 sm:mb-8 animate-fade-in-up text-balance">
          Translate in <span className="text-primary font-medium">Real-Time</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up text-balance px-4">
          Break language barriers in your meetings and videos with Youpi. Seamless real-time translation for any audio
          source.
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary text-primary-foreground px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium mb-12 sm:mb-20 animate-fade-in-up inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <span>Watch Demo</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-10V4a2 2 0 00-2-2H5a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2V4z"
            />
          </svg>
        </button>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto animate-fade-in-up px-4">
          <div className="bg-card border border-border rounded-lg p-4 sm:p-6 md:p-8 text-center hover:border-primary/50 transition-colors">
            <div className="text-2xl sm:text-3xl md:text-4xl font-poppins font-light text-foreground mb-2 sm:mb-3">
              50+
            </div>
            <div className="text-muted-foreground text-xs sm:text-sm uppercase tracking-wider">Languages</div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 sm:p-6 md:p-8 text-center hover:border-accent/50 transition-colors">
            <div className="text-2xl sm:text-3xl md:text-4xl font-poppins font-light text-accent mb-2 sm:mb-3">All</div>
            <div className="text-muted-foreground text-xs sm:text-sm uppercase tracking-wider">Platforms</div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 sm:p-6 md:p-8 text-center hover:border-primary/50 transition-colors">
            <div className="text-2xl sm:text-3xl md:text-4xl font-poppins font-light text-foreground mb-2 sm:mb-3">
              1000+
            </div>
            <div className="text-muted-foreground text-xs sm:text-sm uppercase tracking-wider">Users</div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 sm:p-6 md:p-8 text-center hover:border-primary/50 transition-colors">
            <div className="text-2xl sm:text-3xl md:text-4xl font-poppins font-light text-primary mb-2 sm:mb-3">
              {"<"} 1s
            </div>
            <div className="text-muted-foreground text-xs sm:text-sm uppercase tracking-wider">Latency</div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-start justify-center p-4 sm:p-6 md:p-8 animate-fade-in overflow-y-auto"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-card border border-border rounded-2xl p-0 max-w-6xl w-full overflow-hidden transform animate-modal-enter shadow-2xl mt-4 sm:mt-8 md:mt-12 mb-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-muted/30 p-4 sm:p-6 md:p-8 border-b border-border">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-poppins font-light text-foreground mb-2">
                    Experience Youpi
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                    Real-time translation in action
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 p-2 sm:p-3 rounded-full hover:bg-muted flex-shrink-0"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative p-4 sm:p-6 md:p-8">
              <div className="aspect-video bg-muted rounded-xl mb-6 flex items-center justify-center border border-border relative overflow-hidden">
                <video
                  className="w-full h-full rounded-lg relative z-10"
                  controls
                  poster="/youpi-demo-video-thumbnail.jpg"
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>

              <div className="text-center">
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 animate-fade-in-up">
                  Discover how Youpi translates your meetings and videos in real-time
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-muted/50 border border-border rounded-lg p-4">
                    <div className="text-accent text-sm font-medium mb-1">INSTANT</div>
                    <div className="text-muted-foreground text-xs">Sub-second latency</div>
                  </div>
                  <div className="bg-muted/50 border border-border rounded-lg p-4">
                    <div className="text-primary text-sm font-medium mb-1">ACCURATE</div>
                    <div className="text-muted-foreground text-xs">95%+ precision</div>
                  </div>
                  <div className="bg-muted/50 border border-border rounded-lg p-4">
                    <div className="text-foreground text-sm font-medium mb-1">SEAMLESS</div>
                    <div className="text-muted-foreground text-xs">Any audio source</div>
                  </div>
                </div>

                <button
                  onClick={handleGetStarted}
                  className="bg-primary text-primary-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:opacity-90 transition-opacity"
                >
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
