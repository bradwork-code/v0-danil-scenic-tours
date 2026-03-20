'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FloatingButtons from '@/components/floating-buttons'
import AccessibilityToolbar from '@/components/accessibility-toolbar'

const galleryImages = [
  '[Photo: Maasai Mara savannah at golden hour — wide open plains, acacia trees, warm light]',
  '[Photo: Elephant herd against Mt. Kilimanjaro backdrop, Amboseli National Park]',
  '[Photo: 4x4 pop-up roof safari jeep on open savannah game drive]',
  '[Photo: Flamingos in flight over Lake Nakuru, pink sky reflection]',
  '[Photo: Tourists laughing and watching wildlife from open jeep roof]',
  '[Photo: Diani Beach — white sand, turquoise Indian Ocean, palm trees]',
  '[Photo: Hot air balloon at sunrise over Maasai Mara, golden mist below]',
  '[Photo: Kenyan cultural experience — traditional attire, warm community gathering]',
  '[Photo: Leopard resting in tree, Tsavo National Park]',
  '[Photo: Lake Bogoria hot springs and flamingo colony]',
  '[Photo: Mt. Kenya highland peak — dramatic clouds, greenery]',
  '[Photo: Samburu landscape — reticulated giraffe against dry acacia brush]',
  '[Photo: Family group on Kenya safari, smiling, binoculars out]',
  '[Photo: Meru National Park remote wilderness at dusk]',
  '[Photo: Aberdare National Park highland waterfalls and forest]',
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-96 flex flex-col items-center justify-center pt-20">
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
      <section className="py-20 px-4 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{
                  backgroundColor: '#C4A882',
                  aspectRatio: '3/2',
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
                  {image}
                </p>
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
