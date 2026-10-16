/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        boer: {
          copper: '#8B321D',      // Primary Boer Copper
          copperHover: '#742715',
          copperLight: '#B94A2F',
          copperSoft: '#F6EAE6',
          green: '#2E5A27',       // Secondary Pasture Green
          greenHover: '#23461E',
          greenLight: '#437F39',
          greenSoft: '#EBF4EA',
          gold: '#D49A37',        // Accent Gold Trophy
          goldHover: '#B8822B',
          goldLight: '#F3C472',
          goldSoft: '#FCF5E8',
          cream: '#FAF7F2',       // Leather Off-White
          surface: '#FFFFFF',     // Clean White
          bark: '#1F1917',        // Deep Bark
          barkLight: '#382F2D',
          muted: '#736B66',
          border: '#E8E1D8',
          borderLight: '#F0ECE6'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'boer-sm': '0 1px 3px rgba(31, 25, 23, 0.05), 0 1px 2px rgba(31, 25, 23, 0.03)',
        'boer-md': '0 4px 6px -1px rgba(31, 25, 23, 0.07), 0 2px 4px -2px rgba(31, 25, 23, 0.05)',
        'boer-lg': '0 10px 15px -3px rgba(31, 25, 23, 0.08), 0 4px 6px -4px rgba(31, 25, 23, 0.04)',
        'boer-glow': '0 0 15px rgba(212, 154, 55, 0.25)',
      }
    },
  },
  plugins: [],
}
