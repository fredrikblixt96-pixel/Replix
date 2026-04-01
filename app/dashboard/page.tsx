'use client'
import { useState } from 'react'
import Hoot from '@/components/Hoot'

const demoReviews = [
  { id: '1', name: 'Anna Svensson', rating: 5, comment: 'Fantastisk service! Personalen var otroligt hjälpsamma och maten var utsökt. Kommer definitivt tillbaka!', date: '2026-04-01', response: 'Tack så mycket för dina fina ord, Anna! Vi är så glada att du hade en bra upplevelse hos oss. Vi ser fram emot att välkomna dig tillbaka snart! /Teamet' },
  { id: '2', name: 'Erik Lindqvist', rating: 4, comment: 'Bra mat och trevlig atmosfär. Servicen var lite långsam men inget att klaga på egentligen.', date: '2026-03-30', response: 'Hej Erik! Tack för din recension. Vi tar till oss din feedback om servicen och jobbar ständigt på att förbättra oss. Hoppas vi ses igen! /Teamet' },
]

export default function Dashboard() {
  const [reviews, setReviews] = useState(demoReviews)
  const [publishing, setPublishing] = useState<string | null>(null)

  const publish = async (id: string) => {
    setPublishing(id)
    await new Promise(r => setTimeout(r, 1500))
    setReviews(reviews.filter(r => r.id !== id))
    setPublishing(null)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Välkommen tillbaka! 👋</h1>
      <p className="text-gray-600 mb-8">Här är dina recensioner att besvara</p>
      
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-xl border"><div className="text-sm text-gray-600">Att besvara</div><div className="text-3xl font-bold text-indigo-500">{reviews.length}</div></div>
        <div className="bg-white p-6 rounded-xl border"><div className="text-sm text-gray-600">Publicerade</div><div className="text-3xl font-bold text-green-500">12</div></div>
        <div className="bg-white p-6 rounded-xl border"><div className="text-sm text-gray-600">Snittbetyg</div><div className="text-3xl font-bold text-yellow-500">4.7 ★</div></div>
        <div className="bg-white p-6 rounded-xl border"><div className="text-sm text-gray-600">Tid sparad</div><div className="text-3xl font-bold">3.5h</div></div>
      </div>

      <div className="bg-white rounded-xl border">
        <div className="p-6 border-b font-semibold flex justify-between items-center">
          <span>Recensioner att besvara</span>
          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">{reviews.length} nya</span>
        </div>
        {reviews.length === 0 ? (
          <div className="p-12 text-center">
            <Hoot size="lg" className="mx-auto mb-4" />
            <p className="font-medium text-lg">Alla recensioner besvarade! 🎉</p>
            <p className="text-gray-500">Du har inga väntande recensioner just nu.</p>
          </div>
        ) : (
          reviews.map(r => (
            <div key={r.id} className="p-6 border-b last:border-b-0">
              <div className="flex justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-semibold">{r.name.charAt(0)}</div>
                  <div>
                    <div className="font-medium">{r.name}</div>
                    <div className="text-sm text-gray-500">{r.date}</div>
                  </div>
                </div>
                <div className="text-yellow-500 text-lg">{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-4 italic text-gray-700">&quot;{r.comment}&quot;</div>
              <div className="bg-indigo-50 p-4 rounded-lg mb-4 border border-indigo-200">
                <div className="flex items-center gap-2 mb-2">
                  <Hoot size="sm" />
                  <span className="text-sm font-semibold text-indigo-700">AI-förslag</span>
                </div>
                <p className="text-gray-700">{r.response}</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => publish(r.id)} disabled={publishing === r.id} className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium disabled:opacity-50 flex items-center gap-2">
                  {publishing === r.id ? <><Hoot size="sm" loading /> Publicerar...</> : '✓ Godkänn & publicera'}
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg font-medium">✏️ Redigera</button>
                <button className="px-4 py-2 text-indigo-600 font-medium">🔄 Generera nytt</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
