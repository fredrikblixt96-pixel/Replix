# Replix - AI-drivna recensionssvar

Replix hjälper företag att svara på Google-recensioner snabbt och enkelt med hjälp av AI.

## Kom igång

### 1. Installera dependencies

```bash
npm install
```

### 2. Konfigurera miljövariabler

Kopiera `.env.local.example` till `.env.local` och fyll i dina API-nycklar:

```bash
cp .env.local.example .env.local
```

### 3. Starta utvecklingsservern

```bash
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

## Teknisk stack

- **Frontend:** Next.js 14, React, Tailwind CSS
- **Backend:** Next.js API Routes
- **Databas:** Supabase (PostgreSQL)
- **Auth:** NextAuth.js med Google OAuth
- **AI:** Anthropic Claude API
- **Betalning:** Stripe

## Priser

- **Starter:** 99 kr/mån
- **Pro:** 199 kr/mån  
- **Managed:** 499 kr/mån
