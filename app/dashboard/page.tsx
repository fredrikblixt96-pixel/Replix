'use client'

import { useState } from 'react'
import Hoot from '@/components/Hoot'

// Demo data
const demoReviews = [
  {
    id: '1',
    reviewer_name: 'Anna Svensson',
    rating: 5,
    comment: 'Fantastisk service! Personalen var otroligt hjälpsamma och maten var utsökt. Kommer definitivt tillbaka!',
    review_date: '2026-04-01',
    status: 'pending',
    ai_response: 'Tack så mycket för dina fina ord, Anna! Vi är så glada att du hade en bra upplevelse hos oss. Det värmer att höra att både service och mat uppskattades. Vi ser fram emot att välkomna dig tillbaka snart! /Teamet'
  },
  {
    id: '2',
    reviewer_name: 'Erik Lindqvist',
    rating: 4,
    comment: 'Bra mat och trevlig atmosfär. Servicen var lite långsam men inget att klaga på egentligen.',
    review_date: '2026-03-30',
    status: 'pending',
    ai_response: 'Hej Erik! Tack för din recension. Vi är glada att maten och atmosfären föll dig i smaken. Vi tar till oss din feedback om servicen och jobbar ständigt på att förbättra oss. Hoppas vi ses igen snart! /Teamet'
  },
  {
    id: '3',
    reviewer_name: 'Maria Johansson',
    rating: 5,
    comment: 'Bästa frisören i stan! Klippningen blev precis som jag ville ha den.',
    review_date: '2026-03-28',
    status: 'published',
    ai_response: 'Wow, tack Maria! Det gör oss så glada att höra. Vi strävar alltid efter att ge våra kunder exakt det de önskar. Välkommen tillbaka nästa gång du behöver en ny fräsch look! /Teamet'
  }
]

export default function DashboardPage() {
  const [reviews, setReviews] = useState(demoReviews)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editText, setEditText] = useState('')
  const [generatingId, setGeneratingId] = useState<string | null>(null)
  const [publishingId, setPublishingId] = useState<string | null>(null)

  const handleEdit = (reviewId: string, currentResponse: string) => {
    setEditingId(reviewId)
    setEditText(currentResponse)
  }

  const handleSaveEdit = (reviewId: string) => {
    setReviews(reviews.map(r => 
      r.id === reviewId ? { ...r, ai_response: editText } : r
    ))
    setEditingId(null)
    setEditText('')
  }

  const handleRegenerate = async (reviewId: string) => {
    setGeneratingId(reviewId)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setGeneratingId(null)
  }

  const handlePublish = async (reviewId: string) => {
    setPublishingId(reviewId)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setReviews(reviews.map(r => 
      r.id === reviewId ? { ...r, status: 'published' } : r
    ))
    setPublishingId(null)
  }

  const pendingCount = reviews.filter(r => r.status === 'pending').length
  const publishedCount = reviews.filter(r => r.status === 'published').length
  const avgRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Välkommen tillbaka! 👋</h1>
        <p className="text-gray-600">Här är en översikt av dina recensioner</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200 card-hover">
          <div className="text-sm text-gray-600 mb-1">Att besvara</div>
          <div className="text-3xl font-bold text-primary">{pendingCount}</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 card-hover">
          <div className="text-sm text-gray-600 mb-1">Publicerade</div>
          <div className="text-3xl font-bold text-green-600">{publishedCount}</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 card-hover">
          <div className="text-sm text-gray-600 mb-1">Snittbetyg</div>
          <div className="text-3xl font-bold text-yellow-500">{avgRating} ★</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 card-hover">
          <div className="text-sm text-gray-600 mb-1">Tid sparad</div>
          <div className="text-3xl font-bold text-gray-900">2.5h</div>
        </div>
      </div>

      {/* Reviews list */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Recensioner att besvara</h2>
          <span className="px-3 py-1 bg-primary-light text-primary text-sm font-medium rounded-full">
            {pendingCount} nya
          </span>
        </div>

        {pendingCount === 0 ? (
          <div className="p-12 text-center">
            <Hoot variant="happy" size="lg" className="mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Alla recensioner besvarade!</h3>
            <p className="text-gray-600">Du har inga väntande recensioner just nu.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {reviews.filter(r => r.status === 'pending').map(review => (
              <div key={review.id} className="p-6">
                {/* Review header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary font-medium">
                      {review.reviewer_name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{review.reviewer_name}</div>
                      <div className="text-sm text-gray-500">{review.review_date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500 text-lg">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                    {Array.from({ length: 5 - review.rating }).map((_, i) => (
                      <span key={i} className="text-gray-300">★</span>
                    ))}
                  </div>
                </div>

                {/* Review comment */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700 italic">&quot;{review.comment}&quot;</p>
                </div>

                {/* AI Response */}
                <div className="bg-primary-light/50 p-4 rounded-lg mb-4 border border-primary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Hoot size="sm" />
                    <span className="text-sm font-medium text-primary-dark">AI-förslag</span>
                    {generatingId === review.id && (
                      <span className="text-sm text-gray-500 animate-pulse">Genererar nytt svar...</span>
                    )}
                  </div>
                  
                  {editingId === review.id ? (
                    <textarea
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                      rows={4}
                    />
                  ) : (
                    <p className="text-gray-700">{review.ai_response}</p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  {editingId === review.id ? (
                    <>
                      <button
                        onClick={() => handleSaveEdit(review.id)}
                        className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
                      >
                        Spara ändringar
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm"
                      >
                        Avbryt
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handlePublish(review.id)}
                        disabled={publishingId === review.id}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center gap-2"
                      >
                        {publishingId === review.id ? (
                          <>
                            <Hoot size="sm" loading /> Publicerar...
                          </>
                        ) : (
                          <>✓ Godkänn & publicera</>
                        )}
                      </button>
                      <button
                        onClick={() => handleEdit(review.id, review.ai_response)}
                        className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                      >
                        ✏️ Redigera
                      </button>
                      <button
                        onClick={() => handleRegenerate(review.id)}
                        disabled={generatingId === review.id}
                        className="px-4 py-2 text-primary text-sm font-medium hover:underline disabled:opacity-50"
                      >
                        🔄 Generera nytt
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recently published */}
      {publishedCount > 0 && (
        <div className="mt-8 bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Nyligen publicerade</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {reviews.filter(r => r.status === 'published').map(review => (
              <div key={review.id} className="p-6 opacity-75">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm">
                      ✓
                    </div>
                    <span className="font-medium text-gray-900">{review.reviewer_name}</span>
                    <span className="text-yellow-500">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </span>
                  </div>
                  <span className="text-sm text-green-600 font-medium">Publicerad</span>
                </div>
                <p className="text-sm text-gray-600 ml-11">&quot;{review.comment}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
