@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --bg: #FAFAFA;
  --bg-white: #FFFFFF;
  --text: #171717;
  --text-secondary: #525252;
  --text-muted: #737373;
  --border: #E5E5E5;
  --primary: #6366F1;
  --primary-dark: #4F46E5;
  --primary-light: #E0E7FF;
  --accent: #F59E0B;
  --success: #10B981;
  --star: #FBBF24;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg);
}

::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--text-muted);
}

/* Loading animation for Hoot */
@keyframes hoot-bounce {
  0%, 100% {
    transform: translateY(0) rotate(-5deg);
  }
  25% {
    transform: translateY(-15px) rotate(5deg);
  }
  50% {
    transform: translateY(0) rotate(-5deg);
  }
  75% {
    transform: translateY(-10px) rotate(5deg);
  }
}

.hoot-loading {
  animation: hoot-bounce 1.5s ease-in-out infinite;
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Card hover effect */
.card-hover {
  transition: all 0.2s ease;
}

.card-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.15);
}

/* Star rating */
.star-rating {
  color: var(--star);
}
