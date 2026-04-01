import Link from 'next/link'
import Hoot from '@/components/Hoot'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <Hoot size="sm" />
            Replix
          </Link>
          <div className="flex items-center gap-6">
            <a href="#funktioner" className="text-sm text-gray-600 hover:text-gray-900">Funktioner</a>
            <a href="#priser" className="text-sm text-gray-600 hover:text-gray-900">Priser</a>
            <Link href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900">Logga in</Link>
            <Link href="/dashboard" className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm font-medium hover:bg-indigo-600">
              Kom igång
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Hoot size="xl" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
            🌍 Fungerar på alla språk
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Svara på varje recension<br/>på sekunder
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            AI-drivna recensionssvar som låter som du. Spara timmar varje vecka och missa aldrig en kund igen.
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <Link href="/dashboard" className="px-8 py-4 bg-indigo-500 text-white rounded-lg font-medium text-lg hover:bg-indigo-600">
              Kom igång — 99 kr/mån
            </Link>
            <a href="#demo" className="px-8 py-4 bg-white border border-gray-300 text-gray-900 rounded-lg font-medium text-lg hover:bg-gray-50">
              Se hur det fungerar
            </a>
          </div>
          <p className="text-sm text-gray-500">
            ✓ Avsluta när som helst · ✓ Inga bindningstider · ✓ Igång på 2 minuter
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-500 mb-2">18%</div>
              <div className="text-gray-600">Mer omsättning från att svara på recensioner</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-500 mb-2">95%</div>
              <div className="text-gray-600">Av företag svarar aldrig på recensioner</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-500 mb-2">10s</div>
              <div className="text-gray-600">Genomsnittlig tid att svara med Replix</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="funktioner" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Allt du behöver för att hantera recensioner
            </h2>
            <p className="text-lg text-gray-600">Sluta förlora kunder på obesvarade recensioner</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-gray-200 rounded-2xl">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-3">AI-genererade svar</h3>
              <p className="text-gray-600">Få perfekt utformade svar i din ton. Vänlig, professionell eller personlig — du väljer.</p>
            </div>
            <div className="p-8 bg-white border border-gray-200 rounded-2xl">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Publicera med ett klick</h3>
              <p className="text-gray-600">Granska, redigera vid behov och publicera direkt till Google med ett enda klick.</p>
            </div>
            <div className="p-8 bg-white border border-gray-200 rounded-2xl">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">Direkta notifikationer</h3>
              <p className="text-gray-600">Få SMS eller e-postvarningar direkt när en ny recension kommer in.</p>
            </div>
            <div className="p-8 bg-white border border-gray-200 rounded-2xl">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-3">Alla språk</h3>
              <p className="text-gray-600">Svar på perfekt svenska, engelska, tyska, franska — eller vilket språk dina kunder talar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="demo" className="py-20 px-6 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Så fungerar det</h2>
            <p className="text-lg text-gray-600">Från ny recension till publicerat svar på under en minut</p>
          </div>
          <div className="flex justify-center gap-8">
            <div className="text-center max-w-xs">
              <div className="w-14 h-14 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-semibold mx-auto mb-6">1</div>
              <h3 className="text-lg font-semibold mb-3">Koppla Google</h3>
              <p className="text-gray-600">Koppla ditt Google Business-konto med ett klick.</p>
            </div>
            <div className="text-3xl text-gray-300 pt-4">→</div>
            <div className="text-center max-w-xs">
              <div className="w-14 h-14 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-semibold mx-auto mb-6">2</div>
              <h3 className="text-lg font-semibold mb-3">AI föreslår svar</h3>
              <p className="text-gray-600">Vår AI skapar ett personligt svar i din ton.</p>
            </div>
            <div className="text-3xl text-gray-300 pt-4">→</div>
            <div className="text-center max-w-xs">
              <div className="w-14 h-14 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-semibold mx-auto mb-6">3</div>
              <h3 className="text-lg font-semibold mb-3">Godkänn & publicera</h3>
              <p className="text-gray-600">Granska och publicera med ett klick.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="priser" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enkel prissättning</h2>
            <p className="text-lg text-gray-600">Ingen bindningstid. Avsluta när som helst.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-8 bg-white border border-gray-200 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <div className="text-4xl font-bold mb-2">99 kr<span className="text-lg font-normal text-gray-500">/mån</span></div>
              <p className="text-gray-600 mb-6">Perfekt för att komma igång</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Obegränsade AI-svar</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Alla språk</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> E-postnotifikationer</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> 1 verksamhet</li>
              </ul>
              <Link href="/dashboard" className="block w-full py-3 text-center bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200">
                Kom igång
              </Link>
            </div>
            <div className="p-8 bg-white border-2 border-indigo-500 rounded-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-500 text-white text-sm font-medium rounded-full">
                Populär
              </div>
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-2">199 kr<span className="text-lg font-normal text-gray-500">/mån</span></div>
              <p className="text-gray-600 mb-6">För växande företag</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Allt i Starter</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Veckorapporter</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> SMS-notifikationer</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> 3 verksamheter</li>
              </ul>
              <Link href="/dashboard" className="block w-full py-3 text-center bg-indigo-500 text-white rounded-lg font-medium hover:bg-indigo-600">
                Kom igång
              </Link>
            </div>
            <div className="p-8 bg-white border border-gray-200 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Managed</h3>
              <div className="text-4xl font-bold mb-2">499 kr<span className="text-lg font-normal text-gray-500">/mån</span></div>
              <p className="text-gray-600 mb-6">Vi sköter allt åt dig</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Allt i Pro</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Vi svarar åt dig</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Dedikerad kontaktperson</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Obegränsade verksamheter</li>
              </ul>
              <Link href="/dashboard" className="block w-full py-3 text-center bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200">
                Kontakta oss
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <Hoot size="lg" className="mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Redo att spara tid?</h2>
          <p className="text-lg text-gray-600 mb-8">Kom igång på 2 minuter. Inga bindningstider.</p>
          <Link href="/dashboard" className="inline-block px-8 py-4 bg-indigo-500 text-white rounded-lg font-medium text-lg hover:bg-indigo-600">
            Kom igång — 99 kr/mån
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Hoot size="sm" />
            <span className="font-bold">Replix</span>
          </div>
          <div className="text-sm text-gray-500">
            © 2026 Replix. Alla rättigheter förbehållna.
          </div>
        </div>
      </footer>
    </main>
  )
}
