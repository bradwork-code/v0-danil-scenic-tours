'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'

const services = [
  {
    title: 'Safari Tours',
    teaser: 'Big Five game drives through Kenya\'s greatest national parks.',
    fullDescription: 'Discover unforgettable Kenya safari tours with guided wildlife experiences across top destinations including Maasai Mara, Amboseli, and Lake Nakuru. Enjoy comfortable transport, expert guides, and tailored safari packages for every traveler.',
    image: '/images/elephant-kilimanjaro.webp',
    isPlaceholder: false,
    modalButton: 'Explore Full Safari Packages →',
    modalLink: '/safaris',
  },
  {
    title: 'Cultural Expeditions',
    teaser: 'Live the traditions, taste the cuisine, meet the people.',
    fullDescription: 'Experience authentic cultural expeditions that connect you with local communities, traditions, and heritage sites across Kenya. Explore meaningful journeys that blend culture, history, and unforgettable travel experiences.',
    image: '/images/cultural-gathering.webp',
    isPlaceholder: false,
    modalButton: 'Discover Our Cultural Tours →',
    modalLink: '/safaris#cultural',
  },
  {
    title: 'Adventure Safaris',
    teaser: 'Hiking, biking, and hot air ballooning for the thrill-seeker.',
    fullDescription: 'Take on thrilling adventure safaris with game drives, scenic landscapes, and exciting wildlife encounters across Kenya\'s iconic national parks and reserves.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-loren-nelson-iii-393937649-14779646-JNYFWwU42lFLNOQPguKoXD6t0DPdE7.webp',
    isPlaceholder: false,
    modalButton: 'View Adventure Itineraries →',
    modalLink: '/safaris#adventure',
  },
  {
    title: 'Beach Escapes',
    teaser: 'Unwind on Kenya\'s pristine Indian Ocean coastline.',
    fullDescription: 'Unwind with relaxing beach escapes along Kenya\'s beautiful coastline, combining luxury stays, ocean views, and seamless travel experiences after your safari adventure.',
    image: '/images/beach-diving.webp',
    isPlaceholder: false,
    modalButton: 'See Beach & Coast Options →',
    modalLink: '/safaris#beach',
  },
]

export default function ServicesGrid() {
  const [openModal, setOpenModal] = useState<string | null>(null)
  return (
    <section className="py-20 px-4 bg-[#F2E8D5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair text-[#2A4A35] text-center mb-16">
          Kenya Safari Tours, Kenya Safari Packages & Private Safari Tours
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <Dialog
              key={index}
              open={openModal === service.title}
              onOpenChange={(open) =>
                setOpenModal(open ? service.title : null)
              }
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Image */}
                {service.isPlaceholder ? (
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
                ) : (
                  <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                    <Image
                      src={service.image}
                      alt={`${service.title} - ${service.teaser} by Danil Scenic Tours Nairobi`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-playfair text-[#2A4A35]">
                    {service.title}
                  </h3>
                  <p className="text-[#1C1208] font-inter leading-relaxed">
                    {service.teaser}
                  </p>
                  <DialogTrigger asChild>
                    <button className="inline-flex items-center gap-2 text-[#D4870A] font-montserrat font-semibold hover:gap-3 transition-all">
                      Learn More <ArrowRight size={16} />
                    </button>
                  </DialogTrigger>
                </div>
              </div>

              {/* Modal */}
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-playfair text-[#2A4A35]">
                    {service.title}
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-[#1C1208] font-inter leading-relaxed text-base">
                  {service.fullDescription}
                </DialogDescription>
                <DialogFooter className="flex flex-col gap-3 mt-6">
                  <Link
                    href={service.modalLink}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F97316] text-white font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all"
                    onClick={() => setOpenModal(null)}
                  >
                    {service.modalButton}
                  </Link>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Travel & Transport Solutions Section */}
        <h2 className="text-4xl md:text-5xl font-playfair text-[#2A4A35] text-center mt-24 mb-16">
          Custom Safari Adventures & Professional Car Hire
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Custom Safaris Card */}
          <div
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Custom Safaris service"
          >
            {/* Custom Safaris Image */}
            <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-31%20at%2010.39.00-zWbc5Kff8Ov83PkpY3KGpLCAFeWlks.webp"
                alt="Custom Safaris - Luxury relaxation area with fruits and beachfront view by Danil Scenic Tours Nairobi"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-playfair text-[#2A4A35]">
                Custom Safaris
              </h3>
              <p className="text-[#1C1208] font-inter leading-relaxed">
                Tailor-made itineraries designed specifically for your interests, budget, and pace. From private family getaways to specialized photography expeditions.
              </p>
              <Link
                href="/book#booking-form"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all hover:gap-3"
              >
                Consult an Expert Planner → <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Professional Car Hire Card */}
          <div
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Professional Car Hire service"
          >
            {/* Car Hire Image */}
            <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-31%20at%2022.58.01-CLCCC7SKHsOzZrZZbCo84McmWU3mT7.webp"
                alt="Professional Car Hire - Safari 4x4 Land Cruiser vehicle by Danil Scenic Tours Nairobi"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-playfair text-[#2A4A35]">
                Professional Car Hire
              </h3>
              <p className="text-[#1C1208] font-inter leading-relaxed">
                Explore Kenya at your own pace with our fleet of reliable 4x4 Land Cruisers and Safari Vans. Available with professional drivers or as self-drive options.
              </p>
              <Link
                href="/book#booking-form"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all hover:gap-3"
              >
                Request a Transport Quote → <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
