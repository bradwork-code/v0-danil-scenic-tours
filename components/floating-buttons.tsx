'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/254722919249"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform z-40 animate-bounce"
      >
        <MessageCircle size={24} />
      </Link>
    </>
  )
}
