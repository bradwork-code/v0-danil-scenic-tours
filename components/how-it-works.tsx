'use client'

import { MapPin, Pencil, Lion } from 'lucide-react'

const steps = [
  {
    icon: MapPin,
    title: 'Choose Your Experience',
    description: 'Safari, cultural, adventure, beach, or fully custom',
  },
  {
    icon: Pencil,
    title: 'We Craft Your Itinerary',
    description: 'Our team builds it around your dates, group, and budget',
  },
  {
    icon: Lion,
    title: 'Experience Kenya',
    description: 'We handle everything. You just arrive and be present.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-[#F2E8D5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair text-[#2A4A35] text-center mb-16">
          Your Journey, In Three Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="flex flex-col items-center text-center relative">
                <div className="mb-6 w-16 h-16 rounded-full bg-[#D4870A] flex items-center justify-center">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-playfair text-[#2A4A35] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#1C1208] font-inter text-sm leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-[#D4870A] opacity-30" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
