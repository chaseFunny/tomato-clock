/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-green-400',
    'bg-green-500',
    'bg-green-600',
    'bg-red-400',
    'bg-red-500',
    'bg-red-600',
    'bg-yellow-400',
    'bg-yellow-500',
    'bg-yellow-600',
    'bg-blue-400',
    'bg-blue-500',
    'bg-blue-600',
    'bg-indigo-400',
    'bg-indigo-500',
    'bg-indigo-600',
    'bg-purple-400',
    'bg-purple-500',
    'bg-purple-600',
    'text-green-500',
    'text-red-500',
    'text-yellow-500',
    'text-blue-500',
    'border-green-500',
    'border-red-500',
    'border-yellow-500',
    'border-blue-500',
    'hover:bg-green-500',
    'hover:bg-red-500',
    'hover:bg-yellow-500',
    'hover:bg-blue-500',
    'hover:bg-green-600',
    'hover:bg-red-600',
    'hover:bg-yellow-600',
    'hover:bg-blue-600',
    'from-green-400',
    'from-red-400',
    'from-yellow-400',
    'from-blue-400',
    'from-indigo-400',
    'from-purple-400',
    'to-green-600',
    'to-red-600',
    'to-yellow-600',
    'to-blue-600',
    'to-indigo-600',
    'to-purple-600'
  ]
}