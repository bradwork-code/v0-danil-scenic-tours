'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="py-16 px-4"
      style={{
        backgroundColor: '#1C3028',
        color: '#FDF8F0',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-cormorant font-bold">Danil Scenic Tours</h3>
            <p className="font-inter text-sm leading-relaxed opacity-90">
              Creating Unforgettable Experiences
            </p>
            <p className="font-inter text-xs opacity-75">
              To create unforgettable experiences that connect our clientele to the stunning landscapes, magnificent wildlife, and rich cultures across Kenya.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-montserrat font-semibold text-[#F97316]">Navigation</h4>
            <nav className="space-y-2" aria-label="Footer navigation">
              {[
                { label: 'Home', href: '/' },
                { label: 'Our Safaris', href: '/safaris' },
                { label: 'Destinations', href: '/destinations' },
                { label: 'About Us', href: '/about' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Book Now', href: '/book' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-inter text-sm hover:text-[#F97316] transition-colors"
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-montserrat font-semibold text-[#F97316]">Contact</h4>
            <div className="space-y-3 font-inter text-sm">
              <div>
                <p className="opacity-75">Phone / WhatsApp</p>
                <Link 
                  href="tel:+254722919249" 
                  className="hover:text-[#F97316] transition-colors"
                  aria-label="Call us at +254 722 919 249"
                >
                  +254 722 919 249
                </Link>
              </div>
              <div>
                <p className="opacity-75">Address</p>
                <p>P.O. Box 49377-00100, Nairobi, Kenya</p>
              </div>
              <div>
                <p className="opacity-75">Email</p>
                <Link 
                  href="mailto:info@danilscenictours.com" 
                  className="hover:text-[#F97316] transition-colors"
                  aria-label="Email us at info@danilscenictours.com"
                >
                  info@danilscenictours.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t"
          style={{
            borderColor: 'rgba(249, 115, 22, 0.2)',
          }}
        >
          <p className="text-center font-inter text-sm opacity-75">
            © 2026 Danil Scenic Tours. Licensed by the Tourism Regulatory Authority of Kenya.
          </p>
        </div>
      </div>
    </footer>
  )
}
