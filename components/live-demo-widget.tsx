"use client"

import { useState } from "react"
import { Play, Mic, Volume2, Languages, Loader2 } from "lucide-react"

export function LiveDemoWidget() {
  const [isRecording, setIsRecording] = useState(false)
  const [isTranslating, setIsTranslating] = useState(false)
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [fromLanguage, setFromLanguage] = useState("en")
  const [toLanguage, setToLanguage] = useState("es")

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "ja", name: "Japanese" },
    { code: "zh", name: "Chinese" },
    { code: "ar", name: "Arabic" },
    { code: "pt", name: "Portuguese" },
  ]

  const simulateTranslation = async (text: string) => {
    setIsTranslating(true)
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock translations
    const translations: Record<string, Record<string, string>> = {
      en: {
        es: "Hola, ¿cómo estás hoy?",
        fr: "Bonjour, comment allez-vous aujourd'hui?",
        de: "Hallo, wie geht es dir heute?",
        ja: "こんにちは、今日はいかがですか？",
        zh: "你好，你今天怎么样？",
        ar: "مرحبا، كيف حالك اليوم؟",
        pt: "Olá, como você está hoje?",
      },
    }

    const result = translations[fromLanguage]?.[toLanguage] || "Translation completed successfully!"
    setOutputText(result)
    setIsTranslating(false)
  }

  const handleTranslate = () => {
    if (inputText.trim()) {
      simulateTranslation(inputText)
    }
  }

  const handleVoiceInput = () => {
    setIsRecording(!isRecording)
    if (!isRecording) {
      // Simulate voice input
      setTimeout(() => {
        setInputText("Hello, how are you today?")
        setIsRecording(false)
      }, 2000)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
            Try <span className="gradient-text">Youpi</span> Live
          </h2>
          <p className="font-body text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience real-time translation in action. Type or speak, and watch Youpi translate instantly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
            {/* Language Selection */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Languages className="h-5 w-5 text-gray-500" />
                <select
                  value={fromLanguage}
                  onChange={(e) => setFromLanguage(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="text-gray-400">→</div>

              <select
                value={toLanguage}
                onChange={(e) => setToLanguage(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white">Input</h3>
                  <button
                    onClick={handleVoiceInput}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      isRecording
                        ? "bg-red-500 text-white animate-pulse"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    <Mic className="h-5 w-5" />
                  </button>
                </div>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type something or click the microphone to speak..."
                  className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
                <button
                  onClick={handleTranslate}
                  disabled={!inputText.trim() || isTranslating}
                  className="mt-4 w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl transition-colors duration-200 font-body font-semibold flex items-center justify-center gap-2"
                >
                  {isTranslating ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Translating...
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      Translate
                    </>
                  )}
                </button>
              </div>

              {/* Output Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white">Translation</h3>
                  {outputText && (
                    <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                      <Volume2 className="h-5 w-5" />
                    </button>
                  )}
                </div>
                <div className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white flex items-center justify-center">
                  {isTranslating ? (
                    <div className="flex items-center gap-2 text-gray-500">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Translating...</span>
                    </div>
                  ) : outputText ? (
                    <p className="text-center">{outputText}</p>
                  ) : (
                    <p className="text-gray-400 text-center">Translation will appear here...</p>
                  )}
                </div>
                {outputText && (
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Translated in 0.8s
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
