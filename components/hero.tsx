'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Placeholder Background */}
      <div
        className="absolute inset-0 flex items-center justify-center text-center ken-burns-zoom"
        style={{
          backgroundColor: '#C4A882',
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          fontStyle: 'italic',
          color: '#6B5240',
          zIndex: 0,
        }}
      >
        [Photo: Maasai Mara savannah at golden hour — wide open plains, acacia trees, warm light]
      </div>

      {/* Dark Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(28,18,8,0.72) 0%, rgba(28,18,8,0.2) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="text-[#D4870A] text-sm font-montserrat tracking-widest mb-4">
          NAIROBI, KENYA · EST. 2023
        </div>
        
        <h1 className="font-cormorant text-6xl md:text-7xl text-white mb-6 leading-tight">
          Kenya Is Calling.
        </h1>
        
        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ opacity: 0.85 }}>
          Guided safaris, cultural expeditions, adventure tours & beach escapes — tailored entirely to you.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/safaris"
            className="px-8 py-3 bg-[#D4870A] text-[#1C1208] font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all pulse-glow"
          >
            Explore Our Safaris
          </Link>
          <Link
            href="/book"
            className="px-8 py-3 border-2 border-white text-white font-montserrat font-semibold rounded-lg hover:bg-white hover:text-[#2A4A35] transition-all"
          >
            Plan My Trip
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 z-10 animate-bounce">
        <ChevronDown size={32} className="text-white" />
      </div>
    </section>
  )
}
