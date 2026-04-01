import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Replix</h1>
        <p className="text-gray-600 mb-8">AI-drivna recensionssvar</p>
        <Link href="/dashboard" className="px-6 py-3 bg-indigo-500 text-white rounded-lg">
          Gå till Dashboard
        </Link>
      </div>
    </main>
  )
}
