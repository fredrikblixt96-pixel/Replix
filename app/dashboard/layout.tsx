import Link from 'next/link'
import Hoot from '@/components/Hoot'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Hoot size="sm" />
            Replix
          </Link>
        </div>
        <nav className="px-4 space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-indigo-100 text-indigo-700 rounded-lg font-medium">
            📊 Översikt
          </Link>
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg">
            💬 Recensioner
          </Link>
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg">
            ⚙️ Inställningar
          </Link>
        </nav>
      </aside>
      <main className="ml-64 flex-1 p-8">{children}</main>
    </div>
  )
}
