"use client"

import { useState, useEffect } from "react"

export function LanguageProgressBar() {
  const [progress, setProgress] = useState(0)
  const totalLanguages = 50

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= totalLanguages) {
          return 0 // Reset animation
        }
        return prev + 1
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white">Languages Supported</h3>
        <span className="font-heading font-bold text-2xl text-blue-500">{progress}</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${(progress / totalLanguages) * 100}%` }}
        />
      </div>
      <p className="font-body text-sm text-gray-600 dark:text-gray-300 mt-2">
        And growing every month with new language additions!
      </p>
    </div>
  )
}
