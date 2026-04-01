import Hoot from './Hoot'

interface LoadingProps {
  message?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Loading({ message = 'Laddar...', size = 'md' }: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Hoot variant="thinking" size={size === 'lg' ? 'xl' : size === 'sm' ? 'md' : 'lg'} loading />
      <p className="mt-4 text-gray-600 animate-pulse">{message}</p>
    </div>
  )
}

export function LoadingFullPage({ message = 'Laddar...' }: { message?: string }) {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <Hoot variant="thinking" size="xl" loading />
        <p className="mt-6 text-lg text-gray-600 animate-pulse">{message}</p>
      </div>
    </div>
  )
}

export function LoadingSpinner() {
  return (
    <div className="inline-block">
      <Hoot variant="default" size="sm" loading />
    </div>
  )
}
