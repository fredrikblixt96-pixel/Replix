'use client'

import { useState } from 'react'
import Hoot from '@/components/Hoot'

export default function SettingsPage() {
  const [tone, setTone] = useState('professional')
  const [signOff, setSignOff] = useState('/Teamet')
  const [language, setLanguage] = useState('sv')
  const [saved, setSaved] = useState(false)

  const handleSave = async () => {
    // Simulate save
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Inställningar</h1>
        <p className="text-gray-600">Anpassa hur AI:n skapar svar åt dig</p>
      </div>

      <div className="max-w-2xl space-y-8">
        {/* Brand Voice */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Tonalitet</h2>
          <p className="text-gray-600 mb-4">Välj hur du vill att svaren ska låta</p>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { id: 'professional', label: 'Professionell', desc: 'Formellt och seriöst' },
              { id: 'friendly', label: 'Vänlig', desc: 'Varmt och personligt' },
              { id: 'casual', label: 'Avslappnad', desc: 'Informellt och ledigt' },
              { id: 'formal', label: 'Formell', desc: 'Mycket korrekt och artigt' },
            ].map(option => (
              <button
                key={option.id}
                onClick={() => setTone(option.id)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  tone === option.id
                    ? 'border-primary bg-primary-light/50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-medium text-gray-900">{option.label}</div>
                <div className="text-sm text-gray-500">{option.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Sign off */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Signatur</h2>
          <p className="text-gray-600 mb-4">Läggs till i slutet av varje svar</p>
          
          <input
            type="text"
            value={signOff}
            onChange={(e) => setSignOff(e.target.value)}
            placeholder="T.ex. /Teamet eller /Lisa"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Language */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Svarsspråk</h2>
          <p className="text-gray-600 mb-4">Vilket språk ska svaren skrivas på?</p>
          
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="sv">Svenska</option>
            <option value="en">Engelska</option>
            <option value="auto">Automatiskt (samma som recensionen)</option>
          </select>
        </div>

        {/* Google Connection */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Google-koppling</h2>
          <p className="text-gray-600 mb-4">Hantera koppling till Google Business Profile</p>
          
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div>
                <div className="font-medium text-gray-900">Kopplad till Google</div>
                <div className="text-sm text-gray-600">Min Restaurang AB</div>
              </div>
            </div>
            <span className="text-green-600 text-sm font-medium">✓ Aktiv</span>
          </div>
        </div>

        {/* Save button */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Spara ändringar
          </button>
          {saved && (
            <div className="flex items-center gap-2 text-green-600">
              <Hoot variant="happy" size="sm" />
              <span>Sparat!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
