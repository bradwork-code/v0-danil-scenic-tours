'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Safari Tours',
    description: 'Big Five game drives through Kenya\'s greatest national parks.',
    image: '[Photo: 4x4 pop-up roof safari jeep on open savannah game drive]',
  },
  {
    title: 'Cultural Expeditions',
    description: 'Live the traditions, taste the cuisine, meet the people.',
    image: '[Photo: Kenyan cultural experience — traditional attire, warm community gathering]',
  },
  {
    title: 'Adventure Safaris',
    description: 'Hiking, biking, and hot air ballooning for the thrill-seeker.',
    image: '[Photo: Hot air balloon at sunrise over Maasai Mara, golden mist below]',
  },
  {
    title: 'Beach Escapes',
    description: 'Unwind on Kenya\'s pristine Indian Ocean coastline.',
    image: '[Photo: Diani Beach — white sand, turquoise Indian Ocean, palm trees]',
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 px-4 bg-[#F2E8D5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair text-[#2A4A35] text-center mb-16">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Placeholder Image */}
              <div
                style={{
                  backgroundColor: '#C4A882',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  aspectRatio: '4/3',
                  width: '100%',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontStyle: 'italic',
                  color: '#6B5240',
                  textAlign: 'center',
                  padding: '16px',
                }}
              >
                {service.image}
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-playfair text-[#2A4A35]">
                  {service.title}
                </h3>
                <p className="text-[#1C1208] font-inter leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/safaris"
                  className="inline-flex items-center gap-2 text-[#D4870A] font-montserrat font-semibold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
