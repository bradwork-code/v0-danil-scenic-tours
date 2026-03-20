'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'When we were supposed to leave at 7, the jeep and driver were ready at 06:50, every day, not one day late. If we go back, we know who to call.',
    author: 'Chris',
    country: 'Belgium',
    date: 'March 2025',
    rating: 5,
  },
  {
    quote: 'Danson was more than a driver — he was an entertainer. He was very patient and good with the kids. 10/10 value for money.',
    author: 'Daria',
    country: 'Germany',
    date: 'January 2025',
    rating: 5,
  },
  {
    quote: 'The package they offered was budget friendly. Dan the tour guide was amazing — he knew the park like the back of his hand.',
    author: 'Lyeel',
    country: 'Kenya',
    date: 'January 2025',
    rating: 5,
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const current = testimonials[currentIndex]

  return (
    <section
      className="py-20 px-4"
      style={{
        backgroundColor: '#1C3028',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair text-[#FDF8F0] text-center mb-2">
          What Our Travellers Say
        </h2>
        <p className="text-center text-[#D4870A] font-montserrat font-semibold mb-12">
          Verified reviews from SafariBookings.com
        </p>

        <div
          className="bg-[#2A4A35] rounded-2xl p-8 md:p-12 min-h-96 flex flex-col justify-between"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <div>
            <Quote size={40} className="text-[#D4870A] mb-6" />
            <p className="text-[#FDF8F0] font-inter text-lg md:text-xl leading-relaxed mb-6 italic">
              "{current.quote}"
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-[#D4870A] text-[#D4870A]" />
              ))}
            </div>
            <div className="text-[#FDF8F0] font-montserrat font-semibold">
              {current.author}, {current.country} • {current.date}
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-[#D4870A] w-8'
                  : 'bg-[#D4870A] bg-opacity-40 w-2'
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-[#FDF8F0] font-inter text-sm mb-4">
            Source: safaribookings.com/p6036
          </p>
          <Link
            href="https://www.safaribookings.com/p6036"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#D4870A] text-[#1C1208] font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all pulse-glow"
          >
            Read All 23 Reviews on SafariBookings
          </Link>
        </div>
      </div>
    </section>
  )
}
