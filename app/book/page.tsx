'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FloatingButtons from '@/components/floating-buttons'
import AccessibilityToolbar from '@/components/accessibility-toolbar'

const heroSlideImages = [
  '/images/cheetah-resting.webp',
  '/images/impala-herd.webp',
  '/images/leopard-cub.webp',
  '/images/crowned-crane.webp',
  '/images/elephant-kilimanjaro.webp',
  '/images/amboseli-elephants.webp',
  '/images/beach-diving.webp',
  '/images/zebras-savanna.webp',
  '/images/cultural-gathering.webp',
]

export default function BookPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [submittedName, setSubmittedName] = useState('')

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      tourType: '',
      destination: '',
      dates: '',
      groupSize: '',
      message: '',
    },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroSlideImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const onSubmit = async (data: BookingFormData) => {
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setSubmittedName(data.name)
        setShowSuccessModal(true)
        form.reset()
      } else {
        console.error('Booking failed:', result.message)
      }
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const inputClassName = "w-full px-4 py-2 border border-[#D4870A] rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-[#D4870A]"
  const labelClassName = "block text-sm font-montserrat font-semibold text-[#2A4A35]"

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
                alt={`Safari slide ${index + 1}`}
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
            Plan Your Safari
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto" style={{ opacity: 0.85 }}>
            Tell us about your dream trip and let&apos;s make it happen.
          </p>
        </div>
      </section>

      {/* Contact Action Hub */}
      <section className="py-20 px-4 bg-[#FAF4E8]">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12" id="booking-form">
          <h2 className="text-3xl md:text-4xl font-playfair text-[#2A4A35] text-center mb-8">
            Ready to Book Your Safari?
          </h2>
          <p className="text-center text-[#1C1208] font-inter mb-12 text-base md:text-lg">
            Connect with our team directly via WhatsApp or phone to plan your perfect safari adventure.
          </p>
          
          <div className="flex flex-col gap-6">
            {/* WhatsApp Button */}
            <Link
              href="https://wa.me/254722919249"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 bg-[#25D366] text-white font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 text-lg"
            >
              Chat with us on WhatsApp
            </Link>

            {/* Call Button */}
            <Link
              href="tel:+254722919249"
              className="w-full py-4 px-6 bg-[#F97316] text-white font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 text-lg"
            >
              Call Now: +254 722 919 249
            </Link>
          </div>

          <p className="text-xs text-[#1C1208] opacity-75 font-inter text-center mt-8">
            Our team is available to help you plan your dream safari experience.
          </p>
        </div>
      </section>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="bg-white border-[#D4870A]">
          <DialogHeader className="text-center items-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#2A4A35]/10">
              <CheckCircle className="h-10 w-10 text-[#2A4A35]" />
            </div>
            <DialogTitle className="text-2xl font-playfair text-[#2A4A35]">
              Success!
            </DialogTitle>
            <DialogDescription className="text-[#1C1208] font-inter text-base pt-2">
              Thank you{submittedName ? `, ${submittedName}` : ''}! Your booking inquiry has been received. Our team will contact you within 24 hours via email or WhatsApp to discuss your dream safari.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="px-8 py-2 bg-[#D4870A] text-[#1C1208] font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Continue Exploring
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
      <FloatingButtons />
      <AccessibilityToolbar />
    </main>
  )
}
