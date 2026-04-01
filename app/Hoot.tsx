interface HootProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  className?: string
}

const sizes = { sm: 40, md: 80, lg: 120, xl: 180 }

export default function Hoot({ size = 'md', loading = false, className = '' }: HootProps) {
  const d = sizes[size]
  return (
    <svg viewBox="0 0 120 130" width={d} height={d} className={`${className} ${loading ? 'hoot-loading' : ''}`}>
      <ellipse cx="60" cy="65" rx="45" ry="50" fill="#6366F1"/>
      <ellipse cx="60" cy="75" rx="28" ry="32" fill="#E0E7FF"/>
      <circle cx="42" cy="45" r="18" fill="white"/>
      <circle cx="78" cy="45" r="18" fill="white"/>
      <circle cx="44" cy="47" r="10" fill="#1F2937"/>
      <circle cx="80" cy="47" r="10" fill="#1F2937"/>
      <circle cx="47" cy="44" r="4" fill="white"/>
      <circle cx="83" cy="44" r="4" fill="white"/>
      <path d="M52 62 L60 75 L68 62 Z" fill="#F59E0B"/>
      <path d="M25 20 L32 35 L20 35 Z" fill="#6366F1"/>
      <path d="M95 20 L88 35 L100 35 Z" fill="#6366F1"/>
      <ellipse cx="18" cy="70" rx="12" ry="20" fill="#4F46E5"/>
      <ellipse cx="102" cy="70" rx="12" ry="20" fill="#4F46E5"/>
    </svg>
  )
}
