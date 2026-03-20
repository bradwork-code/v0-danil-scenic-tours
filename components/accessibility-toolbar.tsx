'use client'

import { useState, useEffect } from 'react'
import { ChevronUp, Plus, Minus } from 'lucide-react'

export default function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontLarge, setFontLarge] = useState(false)
  const [fontSmall, setFontSmall] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [dyslexiaFont, setDyslexiaFont] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load from localStorage
    if (typeof window !== 'undefined') {
      const savedFontLarge = localStorage.getItem('font-large') === 'true'
      const savedFontSmall = localStorage.getItem('font-small') === 'true'
      const savedHighContrast = localStorage.getItem('high-contrast') === 'true'
      const savedDyslexia = localStorage.getItem('dyslexia-font') === 'true'

      setFontLarge(savedFontLarge)
      setFontSmall(savedFontSmall)
      setHighContrast(savedHighContrast)
      setDyslexiaFont(savedDyslexia)

      // Apply saved preferences
      const html = document.documentElement
      if (savedFontLarge) html.classList.add('font-large')
      if (savedFontSmall) html.classList.add('font-small')
      if (savedHighContrast) html.classList.add('high-contrast')
      if (savedDyslexia) html.classList.add('dyslexia-font')

      // Load OpenDyslexic if needed
      if (savedDyslexia) {
        const link = document.createElement('link')
        link.href = 'https://fonts.googleapis.com/css2?family=OpenDyslexic&display=swap'
        link.rel = 'stylesheet'
        document.head.appendChild(link)
      }
    }
  }, [])

  const toggleFontLarge = () => {
    const newState = !fontLarge
    setFontLarge(newState)
    setFontSmall(false)
    const html = document.documentElement
    html.classList.toggle('font-large', newState)
    html.classList.remove('font-small')
    localStorage.setItem('font-large', String(newState))
    localStorage.setItem('font-small', 'false')
  }

  const toggleFontSmall = () => {
    const newState = !fontSmall
    setFontSmall(newState)
    setFontLarge(false)
    const html = document.documentElement
    html.classList.toggle('font-small', newState)
    html.classList.remove('font-large')
    localStorage.setItem('font-small', String(newState))
    localStorage.setItem('font-large', 'false')
  }

  const toggleHighContrast = () => {
    const newState = !highContrast
    setHighContrast(newState)
    document.documentElement.classList.toggle('high-contrast', newState)
    localStorage.setItem('high-contrast', String(newState))
  }

  const toggleDyslexia = () => {
    const newState = !dyslexiaFont
    setDyslexiaFont(newState)
    document.documentElement.classList.toggle('dyslexia-font', newState)
    localStorage.setItem('dyslexia-font', String(newState))

    if (newState) {
      const link = document.createElement('link')
      link.href = 'https://fonts.googleapis.com/css2?family=OpenDyslexic&display=swap'
      link.rel = 'stylesheet'
      document.head.appendChild(link)
    }
  }

  if (!mounted) return null

  return (
    <div className="fixed bottom-8 left-8 z-40">
      {/* Expanded Panel */}
      {isOpen && (
        <div
          className="absolute bottom-20 left-0 bg-white rounded-lg shadow-xl p-4 min-w-48 animate-in fade-in slide-in-from-bottom-2"
          style={{
            backgroundColor: '#FDF8F0',
            border: '2px solid #2A4A35',
          }}
        >
          <h3 className="font-montserrat font-semibold text-[#2A4A35] mb-4 text-sm">
            Accessibility
          </h3>

          <div className="space-y-3">
            {/* Font Size Controls */}
            <div>
              <p className="font-inter text-xs text-[#1C1208] mb-2 font-semibold">
                Font Size
              </p>
              <div className="flex gap-2">
                <button
                  onClick={toggleFontSmall}
                  className={`p-2 rounded transition-colors ${
                    fontSmall
                      ? 'bg-[#2A4A35] text-white'
                      : 'bg-[#F2E8D5] text-[#1C1208] hover:bg-[#E8DCC5]'
                  }`}
                  title="Decrease font size"
                >
                  <Minus size={16} />
                </button>
                <button
                  onClick={toggleFontLarge}
                  className={`p-2 rounded transition-colors ${
                    fontLarge
                      ? 'bg-[#2A4A35] text-white'
                      : 'bg-[#F2E8D5] text-[#1C1208] hover:bg-[#E8DCC5]'
                  }`}
                  title="Increase font size"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* High Contrast */}
            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={toggleHighContrast}
                  className="w-4 h-4"
                />
                <span className="font-inter text-xs text-[#1C1208]">
                  High Contrast
                </span>
              </label>
            </div>

            {/* Dyslexia Font */}
            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={dyslexiaFont}
                  onChange={toggleDyslexia}
                  className="w-4 h-4"
                />
                <span className="font-inter text-xs text-[#1C1208]">
                  Dyslexia-Friendly Font
                </span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#2A4A35] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="Open accessibility options"
      >
        <ChevronUp
          size={24}
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
    </div>
  )
}
