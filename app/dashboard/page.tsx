'use client'
import { useState } from 'react'
import Hoot from '@/components/Hoot'

const demoReviews = [
  { id: '1', name: 'Anna S.', rating: 5, comment: 'Fantastisk service!', date: '2026-04-01', response: 'Tack så mycket Anna! Vi är glada att du är nöjd. /Teamet' },
  { id: '2', name: 'Erik L.', rating: 4, comment: 'Bra mat, lite långsam service.', date: '2026-03-30', response: 'Hej Erik! Tack för feedbacken, vi jobbar på att förbättra oss. /Teamet' },
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
        <div className="p-6 border-b font-semibold">Recensioner att besvara</div>
        {reviews.length === 0 ? (
          <div className="p-12 text-center">
            <Hoot size="lg" className="mx-auto mb-4" />
            <p className="font-medium">Alla recensioner besvarade!</p>
          </div>
        ) : (
          reviews.map(r => (
            <div key={r.id} className="p-6 border-b">
              <div className="flex justify-between mb-3">
                <div><span className="font-medium">{r.name}</span> <span className="text-gray-500 text-sm">{r.date}</span></div>
                <div className="text-yellow-500">{'★'.repeat(r.rating)}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded mb-3 italic">"{r.comment}"</div>
              <div className="bg-indigo-50 p-3 rounded mb-3 border border-indigo-200">
                <div className="flex items-center gap-2 mb-2"><Hoot size="sm" /><span className="text-sm font-medium text-indigo-700">AI-förslag</span></div>
                <p>{r.response}</p>
              </div>
              <button onClick={() => publish(r.id)} disabled={publishing === r.id} className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium disabled:opacity-50">
                {publishing === r.id ? '⏳ Publicerar...' : '✓ Godkänn & publicera'}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
