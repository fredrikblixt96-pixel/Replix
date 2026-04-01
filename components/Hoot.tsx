interface HootProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'waving' | 'thinking' | 'happy'
  className?: string
  loading?: boolean
}

const sizes = {
  sm: 40,
  md: 80,
  lg: 120,
  xl: 180
}

export default function Hoot({ size = 'md', variant = 'default', className = '', loading = false }: HootProps) {
  const dimension = sizes[size]
  
  // Default Hoot
  if (variant === 'default') {
    return (
      <svg 
        viewBox="0 0 120 130" 
        width={dimension} 
        height={dimension} 
        className={`${className} ${loading ? 'hoot-loading' : ''}`}
      >
        {/* Body */}
        <ellipse cx="60" cy="65" rx="45" ry="50" fill="#6366F1"/>
        {/* Belly */}
        <ellipse cx="60" cy="75" rx="28" ry="32" fill="#E0E7FF"/>
        {/* Eyes */}
        <circle cx="42" cy="45" r="18" fill="white"/>
        <circle cx="78" cy="45" r="18" fill="white"/>
        <circle cx="44" cy="47" r="10" fill="#1F2937"/>
        <circle cx="80" cy="47" r="10" fill="#1F2937"/>
        <circle cx="47" cy="44" r="4" fill="white"/>
        <circle cx="83" cy="44" r="4" fill="white"/>
        {/* Beak */}
        <path d="M52 62 L60 75 L68 62 Z" fill="#F59E0B"/>
        {/* Ear tufts */}
        <path d="M25 20 L32 35 L20 35 Z" fill="#6366F1"/>
        <path d="M95 20 L88 35 L100 35 Z" fill="#6366F1"/>
        {/* Wings */}
        <ellipse cx="18" cy="70" rx="12" ry="20" fill="#4F46E5"/>
        <ellipse cx="102" cy="70" rx="12" ry="20" fill="#4F46E5"/>
      </svg>
    )
  }

  // Waving Hoot
  if (variant === 'waving') {
    return (
      <svg 
        viewBox="0 0 140 130" 
        width={dimension * 1.2} 
        height={dimension} 
        className={`${className} ${loading ? 'hoot-loading' : ''}`}
      >
        {/* Body */}
        <ellipse cx="70" cy="65" rx="45" ry="50" fill="#6366F1"/>
        {/* Belly */}
        <ellipse cx="70" cy="75" rx="28" ry="32" fill="#E0E7FF"/>
        {/* Eyes */}
        <circle cx="52" cy="45" r="18" fill="white"/>
        <circle cx="88" cy="45" r="18" fill="white"/>
        <circle cx="54" cy="47" r="10" fill="#1F2937"/>
        <circle cx="90" cy="47" r="10" fill="#1F2937"/>
        <circle cx="57" cy="44" r="4" fill="white"/>
        <circle cx="93" cy="44" r="4" fill="white"/>
        {/* Beak */}
        <path d="M62 62 L70 75 L78 62 Z" fill="#F59E0B"/>
        {/* Ear tufts */}
        <path d="M35 20 L42 35 L30 35 Z" fill="#6366F1"/>
        <path d="M105 20 L98 35 L110 35 Z" fill="#6366F1"/>
        {/* Left wing */}
        <ellipse cx="28" cy="70" rx="12" ry="20" fill="#4F46E5"/>
        {/* Right wing waving */}
        <ellipse cx="122" cy="45" rx="12" ry="20" fill="#4F46E5" transform="rotate(-30 122 45)"/>
        {/* Stars */}
        <circle cx="135" cy="25" r="4" fill="#FCD34D"/>
        <circle cx="125" cy="15" r="3" fill="#FCD34D"/>
      </svg>
    )
  }

  // Thinking Hoot (for loading states)
  if (variant === 'thinking') {
    return (
      <svg 
        viewBox="0 0 140 150" 
        width={dimension * 1.2} 
        height={dimension * 1.2} 
        className={`${className} ${loading ? 'hoot-loading' : ''}`}
      >
        {/* Body */}
        <ellipse cx="70" cy="85" rx="45" ry="50" fill="#6366F1"/>
        {/* Belly */}
        <ellipse cx="70" cy="95" rx="28" ry="32" fill="#E0E7FF"/>
        {/* Eyes - looking up */}
        <circle cx="52" cy="65" r="18" fill="white"/>
        <circle cx="88" cy="65" r="18" fill="white"/>
        <circle cx="54" cy="60" r="10" fill="#1F2937"/>
        <circle cx="90" cy="60" r="10" fill="#1F2937"/>
        <circle cx="57" cy="57" r="4" fill="white"/>
        <circle cx="93" cy="57" r="4" fill="white"/>
        {/* Beak */}
        <path d="M62 82 L70 95 L78 82 Z" fill="#F59E0B"/>
        {/* Ear tufts */}
        <path d="M35 40 L42 55 L30 55 Z" fill="#6366F1"/>
        <path d="M105 40 L98 55 L110 55 Z" fill="#6366F1"/>
        {/* Wings */}
        <ellipse cx="28" cy="90" rx="12" ry="20" fill="#4F46E5"/>
        <ellipse cx="112" cy="90" rx="12" ry="20" fill="#4F46E5"/>
        {/* Thought bubbles */}
        <circle cx="120" cy="30" r="8" fill="#E0E7FF"/>
        <circle cx="130" cy="15" r="12" fill="#E0E7FF"/>
        <text x="125" y="20" fontSize="14" fill="#6366F1" textAnchor="middle">?</text>
      </svg>
    )
  }

  // Happy Hoot (for success states)
  if (variant === 'happy') {
    return (
      <svg 
        viewBox="0 0 120 130" 
        width={dimension} 
        height={dimension} 
        className={`${className} ${loading ? 'hoot-loading' : ''}`}
      >
        {/* Body */}
        <ellipse cx="60" cy="65" rx="45" ry="50" fill="#6366F1"/>
        {/* Belly */}
        <ellipse cx="60" cy="75" rx="28" ry="32" fill="#E0E7FF"/>
        {/* Eyes - happy closed */}
        <path d="M30 45 Q42 35 54 45" stroke="#1F2937" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <path d="M66 45 Q78 35 90 45" stroke="#1F2937" strokeWidth="4" fill="none" strokeLinecap="round"/>
        {/* Beak - smiling */}
        <path d="M52 58 L60 72 L68 58 Z" fill="#F59E0B"/>
        {/* Blush */}
        <ellipse cx="35" cy="55" rx="8" ry="5" fill="#FCA5A5" opacity="0.5"/>
        <ellipse cx="85" cy="55" rx="8" ry="5" fill="#FCA5A5" opacity="0.5"/>
        {/* Ear tufts */}
        <path d="M25 20 L32 35 L20 35 Z" fill="#6366F1"/>
        <path d="M95 20 L88 35 L100 35 Z" fill="#6366F1"/>
        {/* Wings up in celebration */}
        <ellipse cx="15" cy="50" rx="12" ry="20" fill="#4F46E5" transform="rotate(30 15 50)"/>
        <ellipse cx="105" cy="50" rx="12" ry="20" fill="#4F46E5" transform="rotate(-30 105 50)"/>
        {/* Stars */}
        <circle cx="10" cy="25" r="4" fill="#FCD34D"/>
        <circle cx="110" cy="25" r="4" fill="#FCD34D"/>
        <circle cx="60" cy="10" r="5" fill="#FCD34D"/>
      </svg>
    )
  }

  return null
}
