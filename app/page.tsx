import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero section */}
      <section className="w-full h-200 relative">
        <Image
          src="/images/hero/hero-banner.jpg"
          alt="SELINO Fashion"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">SELINO</h1>
            <Link 
              href="/nouveautes" 
              className="inline-block bg-white text-black px-6 py-3 rounded-none font-medium hover:bg-gray-100 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

{/* Featured sections */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="relative h-64 overflow-hidden group">
            <Image
              src={`/images/featured/featured-${item}.jpg`}
              alt={`Featured collection ${item}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4">
              <button className="bg-white text-black px-4 py-2 text-sm font-medium">
                Shop
              </button>
            </div>
          </div>
        ))}
      </section>
      {/* New shop experience banner */}
      <section className="bg-gray-100 py-10 px-4 my-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">NEW SHOP EXPERIENCE</h2>
          <p className="text-lg mb-6">Découvrez notre nouvelle expérience de shopping en ligne</p>
          <button className="bg-black text-white px-6 py-3 font-medium">
            Découvrir
          </button>
        </div>
      </section>

      {/* Community section */}
      <section className="py-10 px-4">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">SELINO COMMUNITY</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-64 bg-gray-100"></div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="border border-black text-black px-6 py-3 font-medium">
              Voir plus de looks
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <section className="bg-gray-100 py-12 px-4 my-8">
        <div className="max-w-screen-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">LE COMPLÉMENT PARFAIT À LA MODE QUE TU AIMES</h2>
          <p className="mb-6">Abonne-toi à notre newsletter et sois le premier à découvrir nos nouveautés</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Adresse e-mail"
              className="px-4 py-3 border border-gray-300 focus:outline-none flex-grow max-w-md"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 font-medium"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}