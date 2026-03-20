'use client'

import { Star, FileText, Badge, Globe, MapPin } from 'lucide-react'

export default function TrustBar() {
  const items = [
    { icon: Star, label: '5.0/5 on SafariBookings' },
    { icon: FileText, label: '23 Verified Reviews' },
    { icon: Badge, label: 'TRA Licensed Operator' },
    { icon: Globe, label: 'Guides in 4 Languages' },
    { icon: MapPin, label: 'Based in Nairobi since 2023' },
  ]

  return (
    <section
      className="py-8 px-4 border-t border-b"
      style={{
        backgroundColor: '#F2E8D5',
        borderColor: 'rgba(212, 135, 10, 0.2)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                <Icon size={24} style={{ color: '#D4870A' }} />
                <span className="text-[#1C1208] font-montserrat text-sm font-medium">
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
