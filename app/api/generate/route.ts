import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { review, businessName, tone = 'professional', language = 'sv' } = await request.json()

    if (!review) {
      return NextResponse.json({ error: 'Review is required' }, { status: 400 })
    }

    const toneDescriptions: Record<string, string> = {
      professional: 'professionell och vänlig',
      friendly: 'varm och personlig',
      casual: 'avslappnad och jordnära',
      formal: 'formell och respektfull'
    }

    const prompt = `Du är en expert på att skriva svar på Google-recensioner för svenska företag.

Företagsnamn: ${businessName || 'Vårt företag'}
Ton: ${toneDescriptions[tone] || 'professionell och vänlig'}
Språk: Svenska

Recension att svara på:
Betyg: ${review.rating}/5 stjärnor
Namn: ${review.reviewer_name}
Kommentar: "${review.comment}"

Skriv ett ${toneDescriptions[tone]} svar på denna recension. Svaret ska:
- Vara personligt och nämna recensentens namn
- Tacka för feedbacken
- Adressera specifika punkter från recensionen
- Vara lagom långt (2-4 meningar)
- Avslutas med en vänlig hälsning
- INTE innehålla "Med vänliga hälsningar" eller liknande formella avslutningar
- Avslutas med "/Teamet" eller liknande kort signatur

Skriv ENDAST svaret, inget annat.`

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 300,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    })

    const responseText = message.content[0].type === 'text' 
      ? message.content[0].text 
      : ''

    return NextResponse.json({ response: responseText })
  } catch (error) {
    console.error('Error generating response:', error)
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    )
  }
}
