import Link from 'next/link'
import Hoot from '@/components/Hoot'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full">
        <div className="p-6">
          <Link href="/dashboard" className="flex items-center gap-2 text-xl font-bold">
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
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="bg-indigo-100 p-4 rounded-lg">
            <div className="text-sm font-semibold text-indigo-700">Starter-plan</div>
            <div className="text-xs text-gray-600">99 kr/mån</div>
          </div>
        </div>
      </aside>
      <main className="ml-64 flex-1 p-8">{children}</main>
    </div>
  )
}
