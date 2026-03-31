'use client'

// Optimized Safari Experiences Page with Dynamic Image Slideshow - v2
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FloatingButtons from '@/components/floating-buttons'
import AccessibilityToolbar from '@/components/accessibility-toolbar'
import { ArrowRight } from 'lucide-react'

const heroSlideImages = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2816%29-okv68gOhxJpXw4n1wmi6LzVWsS5NI3.webp',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2812%29-s02sGMy6RmxVwGRkXsuExT87bOTlVI.webp',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2813%29-dvsdfGxqdqYzb94D6e93B8K10dhmKW.webp',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-loren-nelson-iii-393937649-14779646-JNYFWwU42lFLNOQPguKoXD6t0DPdE7.webp',
]

const safariPackages = [
  {
    title: 'Amboseli Elephant Watching',
    tag: 'Safari Tours',
    duration: '4 Days',
    description: 'Witness majestic elephants against the backdrop of Mount Kilimanjaro in Amboseli National Park.',
    price: 'Starting from $706 pp',
    image: '/images/amboseli-elephants.webp',
    isPlaceholder: false,
  },
  {
    title: 'Masai Mara Safari',
    tag: 'Safari Tours',
    duration: '4 Days',
    description: 'Experience the world-famous Masai Mara, home to the Big Five and the Great Migration.',
    price: 'Starting from $1,599 pp',
    image: '/images/elephant-kilimanjaro.webp',
    isPlaceholder: false,
  },
  {
    title: 'Kenyan Coastal Retreat',
    tag: 'Beach',
    duration: '5 Days',
    description: 'Unwind on the pristine shores of Kenya\'s Indian Ocean coast — Diani, Watamu, or Malindi.',
    price: 'Starting from $1,799 pp',
    image: '/images/beach-diving.webp',
    isPlaceholder: false,
  },
  {
    title: 'Adventure Safari - Great Rift Valley',
    tag: 'Adventure',
    duration: '6 Days',
    description: 'For thrill-seekers: hiking, biking, and hot air ballooning across Kenya\'s spectacular Rift Valley terrain.',
    price: 'Starting from $1,899 pp',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-loren-nelson-iii-393937649-14779646-JNYFWwU42lFLNOQPguKoXD6t0DPdE7.webp',
    isPlaceholder: false,
  },
  {
    title: 'Big Five Special',
    tag: 'Safari Tours',
    duration: '8 Days',
    description: 'The ultimate Big Five experience across Kenya\'s premier national parks and reserves.',
    price: 'Starting from $2,035 pp',
    image: '/images/leopard-cub.webp',
    isPlaceholder: false,
  },
  {
    title: 'Cultural Exploration in Samburu',
    tag: 'Cultural',
    duration: '7 Days',
    description: 'Immerse yourself in Kenya\'s vibrant traditions. Meet local communities, learn their customs, and savour authentic cuisine.',
    price: 'Starting from $2,099 pp',
    image: '/images/cultural-gathering.webp',
    isPlaceholder: false,
  },
  {
    title: 'Southern Parks & Coast',
    tag: 'Safari Tours',
    duration: '10 Days',
    description: 'Explore Tsavo, Amboseli, and the stunning Kenyan coast in one comprehensive journey.',
    price: 'Starting from $2,203 pp',
    image: '/images/cheetah-resting.webp',
    isPlaceholder: false,
  },
  {
    title: 'The Grand Safari',
    tag: 'Safari Tours',
    duration: '14 Days',
    description: 'The ultimate Kenya experience — wildlife, culture, adventure, and relaxation all in one epic journey.',
    price: 'Starting from $3,087 pp',
    image: '/images/zebras-savanna.webp',
    isPlaceholder: false,
  },
]

const customSafari = {
  title: 'Custom Safari Adventure',
  tag: 'All',
  description: 'Fully tailor-made itineraries built around your interests, group size, timeline, and budget — whether you\'re travelling solo, as a family, with friends, or on honeymoon.',
  price: 'Bespoke Pricing',
  image: '/images/impala-herd.webp',
  isPlaceholder: false,
}

const filters = ['All', 'Safari Tours', 'Cultural', 'Adventure', 'Beach']

const SafarisPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedFilter, setSelectedFilter] = useState('All')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroSlideImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const filteredPackages = selectedFilter === 'All'
    ? safariPackages
    : safariPackages.filter((pkg) => pkg.tag === selectedFilter)

  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />
      
      {/* Hero with Slideshow */}
      <section className="relative h-[600px] md:h-screen flex flex-col items-center justify-center pt-20">
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
                alt={`Kenya safaris slideshow ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
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
            Safari Experiences Built Around You.
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto" style={{ opacity: 0.85 }}>
            Private & group tours across Kenya. Fully customizable.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-12 px-4 bg-[#F2E8D5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-full font-montserrat font-semibold transition-colors ${
                  selectedFilter === filter
                    ? 'bg-[#D4870A] text-white'
                    : 'bg-white text-[#2A4A35] hover:bg-[#E8DCC5]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Safari Packages */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, index) => (
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#F97316] text-white text-xs font-montserrat font-semibold px-3 py-1 rounded-full">
                    {pkg.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-playfair text-[#1A1F2C]">
                    {pkg.title}
                  </h2>
                  <p className="text-[#1A1F2C] font-inter leading-relaxed text-sm opacity-80">
                    {pkg.description}
                  </p>
                  
                  {/* Price */}
                  <p className="text-[#F97316] font-montserrat font-bold text-lg">
                    {pkg.price}
                  </p>
                  
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 text-[#F97316] font-montserrat font-semibold hover:gap-3 transition-all"
                    aria-label={`Inquire about ${pkg.title}`}
                  >
                    Inquire Now <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Custom Safari - Final CTA Card */}
          {selectedFilter === 'All' && (
            <div className="mt-16">
              <article 
                className="bg-[#1A1F2C] rounded-[2rem] overflow-hidden shadow-xl"
                aria-label="Custom Safari Adventure - Request a personalized quote"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
                  <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                    <Image
                      src={customSafari.image}
                      alt={customSafari.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8 md:p-12 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-playfair text-white">
                      {customSafari.title}
                    </h2>
                    <p className="text-white/90 font-inter leading-relaxed text-lg">
                      {customSafari.description}
                    </p>
                    <p className="text-[#F97316] font-montserrat font-bold text-xl">
                      {customSafari.price}
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
          )}
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="py-16 px-4 bg-[#F2E8D5]">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-playfair text-[#1A1F2C]">
            Honest Pricing. No Surprises.
          </h2>
          <p className="text-lg text-[#1A1F2C] font-inter leading-relaxed">
            All prices shown are per person and exclude international flights. Your final quote depends on the park, duration, accommodation level, and group size. Contact us for a custom quote — it&apos;s free and there&apos;s no commitment.
          </p>
          <Link
            href="/book"
            className="inline-block px-8 py-3 bg-[#F97316] text-white font-montserrat font-semibold rounded-lg hover:bg-[#EA580C] hover:shadow-lg transition-all"
            aria-label="Request a free safari quote"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>

      {/* Vehicle Info */}
      <section
        className="py-8 px-4"
        style={{
          backgroundColor: '#2A4A35',
          color: '#FDF8F0',
        }}
      >
        <div className="max-w-7xl mx-auto text-center font-inter">
          <p>
            ✓ All safaris are conducted in our regularly serviced 4x4 pop-up roof jeeps — equipped for optimal wildlife viewing, built for your comfort, and maintained for your safety.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <AccessibilityToolbar />
    </main>
  )
}

export default SafarisPage
