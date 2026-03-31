'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const featuredPackages = [
  {
    title: 'Masai Mara Safari',
    duration: '4 Days',
    description: 'Experience the world-famous Masai Mara, home to the Big Five.',
    price: 'Starting from $1,599 pp',
    image: '/images/elephant-kilimanjaro.webp',
  },
  {
    title: 'Big Five Special',
    duration: '8 Days',
    description: 'The ultimate Big Five experience across Kenya\'s premier parks.',
    price: 'Starting from $2,035 pp',
    image: '/images/leopard-cub.webp',
  },
  {
    title: 'Cultural Exploration in Samburu',
    duration: '7 Days',
    description: 'Immerse yourself in Kenya\'s vibrant traditions and communities.',
    price: 'Starting from $2,099 pp',
    image: '/images/cultural-gathering.webp',
  },
  {
    title: 'The Grand Safari',
    duration: '14 Days',
    description: 'The ultimate Kenya experience — wildlife, culture, and adventure.',
    price: 'Starting from $3,087 pp',
    image: '/images/zebras-savanna.webp',
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 px-4 bg-[#F2E8D5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair text-[#1A1F2C] text-center mb-16">
          Popular Safari Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPackages.map((pkg, index) => (
            <article
              key={index}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              aria-label={`${pkg.title} safari package`}
            >
              {/* Image */}
              <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-[#F97316] text-white text-xs font-montserrat font-semibold px-3 py-1 rounded-full">
                  {pkg.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-playfair text-[#1A1F2C]">
                  {pkg.title}
                </h3>
                <p className="text-[#1A1F2C] font-inter leading-relaxed opacity-80">
                  {pkg.description}
                </p>
                <p className="text-[#F97316] font-montserrat font-bold text-lg">
                  {pkg.price}
                </p>
                <Link
                  href="/safaris"
                  className="inline-flex items-center gap-2 text-[#F97316] font-montserrat font-semibold hover:gap-3 transition-all"
                  aria-label={`Learn more about ${pkg.title}`}
                >
                  Learn More <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Custom Safari CTA */}
        <div className="mt-12">
          <article 
            className="bg-[#1A1F2C] rounded-[2rem] overflow-hidden shadow-xl"
            aria-label="Custom Safari Adventure - Request a personalized quote"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
              <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/impala-herd.webp"
                  alt="Custom Safari Adventure"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 md:p-12 space-y-6">
                <h3 className="text-3xl md:text-4xl font-playfair text-white">
                  Custom Safari Adventure
                </h3>
                <p className="text-white/90 font-inter leading-relaxed text-lg">
                  Your dream safari, designed around you. Tell us what you want and we&apos;ll make it happen.
                </p>
                <p className="text-[#F97316] font-montserrat font-bold text-xl">
                  Bespoke Pricing
                </p>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F97316] text-white font-montserrat font-bold rounded-lg hover:bg-[#EA580C] hover:gap-3 transition-all"
                  aria-label="Request a custom safari quote"
                >
                  Request Quote <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
