'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FloatingButtons from '@/components/floating-buttons'
import AccessibilityToolbar from '@/components/accessibility-toolbar'

const galleryImages = [
  { image: '/images/elephant-kilimanjaro.webp', alt: 'Maasai Mara Safari Kenya buffalo herd at sunset', isPlaceholder: false },
  { image: '/images/amboseli-elephants.webp', alt: 'Amboseli National Park elephants with Mount Kilimanjaro', isPlaceholder: false },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2816%29-okv68gOhxJpXw4n1wmi6LzVWsS5NI3.webp', alt: 'Lake Nakuru flamingos and wildlife reserve Kenya', isPlaceholder: false },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2812%29-s02sGMy6RmxVwGRkXsuExT87bOTlVI.webp', alt: 'Lake Nakuru National Park scenic landscape', isPlaceholder: false },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2815%29-3ELJ3hQTT33H8nK1hqEBM53zsX5JEk.webp', alt: 'Kenyan wildlife safari photography Big Five', isPlaceholder: false },
  { image: '/images/beach-diving.webp', alt: 'Diani Beach coastal Kenya Indian Ocean', isPlaceholder: false },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-loren-nelson-iii-393937649-14779646-JNYFWwU42lFLNOQPguKoXD6t0DPdE7.webp', alt: 'Adventure safari Kenya hiking and exploration', isPlaceholder: false },
  { image: '/images/cultural-gathering.webp', alt: 'Cultural expeditions Kenya local traditions', isPlaceholder: false },
  { image: '/images/cheetah-resting.webp', alt: 'Kenya wildlife cheetah resting in savanna', isPlaceholder: false },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2814%29-PPbHtHwWOiOCF897LhCVKG6lE946GY.webp', alt: 'Kenyan safari wildlife spotting experience', isPlaceholder: false },
  { image: '/images/zebras-savanna.webp', alt: 'Zebra herd Kenya savanna landscape', isPlaceholder: false },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2813%29-dvsdfGxqdqYzb94D6e93B8K10dhmKW.webp', alt: 'Diani Beach escapes coastal resort Kenya', isPlaceholder: false },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-27%20091948-biQwM7Q4NGVZhod3fPu11cfeAmNkch.webp', alt: 'Meru National Park sunset acacia trees Kenya', isPlaceholder: false },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2817%29-Cqk060woGnPsSL466intzq9kOsG3WA.webp', alt: 'Aberdare National Park waterfalls highland forest Kenya', isPlaceholder: false },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-03%20104911-swbjNVoqCHnEWJmaJx9kyU1T75H9Wv.webp', alt: 'Samburu National Reserve Milky Way stargazing Kenya', isPlaceholder: false },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-31%20at%2022.58.01-CLCCC7SKHsOzZrZZbCo84McmWU3mT7.webp', alt: 'Professional Car Hire Kenya 4x4 Land Cruiser safari vehicle', isPlaceholder: false },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-31%20at%2010.39.00-zWbc5Kff8Ov83PkpY3KGpLCAFeWlks.webp', alt: 'Custom Safaris Kenya luxury travel experience', isPlaceholder: false },
]

const heroSlideImages = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2812%29-s02sGMy6RmxVwGRkXsuExT87bOTlVI.webp',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2813%29-dvsdfGxqdqYzb94D6e93B8K10dhmKW.webp',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2814%29-PPbHtHwWOiOCF897LhCVKG6lE946GY.webp',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2815%29-3ELJ3hQTT33H8nK1hqEBM53zsX5JEk.webp',
]

export default function GalleryPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroSlideImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          {heroSlideImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: index === currentImageIndex ? 1 : 0,
              }}
            >
              <Image
                src={image}
                alt={`Kenya destinations slideshow ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(28,18,8,0.72) 0%, rgba(28,18,8,0.2) 100%)',
            zIndex: 1,
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-cormorant text-5xl md:text-6xl text-white mb-4 leading-tight">
            Kenya Through Our Lens
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto" style={{ opacity: 0.85 }}>
            Explore the beauty, wildlife, and moments that await you.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                style={{
                  aspectRatio: '4/3',
                  position: 'relative',
                }}
              >
                {item.isPlaceholder ? (
                  <div
                    style={{
                      backgroundColor: '#C4A882',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '16px',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        fontStyle: 'italic',
                        color: '#6B5240',
                        textAlign: 'center',
                      }}
                    >
                      {item.image}
                    </p>
                  </div>
                ) : (
                  <Image
                    src={item.image}
                    alt={item.alt || 'Gallery image'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={index > 3 ? 'lazy' : 'eager'}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <AccessibilityToolbar />
    </main>
  )
}
