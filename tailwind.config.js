/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        boer: {
          soil: '#68452F',
          soilHover: '#513624',
          soilDark: '#3C2A20',
          soilSoft: '#F2E6D8',
          copper: '#8A5A3C',
          copperHover: '#70452D',
          copperLight: '#B47A53',
          copperSoft: '#F2E6D8',
          green: '#55733E',
          greenHover: '#3E5B2D',
          greenLight: '#78975D',
          greenSoft: '#E8F0DF',
          gold: '#C59A50',
          goldHover: '#946D2E',
          goldLight: '#E4C985',
          goldSoft: '#F8F0D8',
          cream: '#F7F1E5',
          surface: '#FFFDF8',
          bark: '#34271F',
          barkLight: '#4A382C',
          muted: '#806F60',
          border: '#DFD1BC',
          borderLight: '#EEE4D4'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif']
      },
      boxShadow: {
        'boer-sm': '0 2px 6px rgba(88, 61, 39, .07)',
        'boer-md': '0 8px 18px rgba(88, 61, 39, .10)',
        'boer-lg': '0 16px 30px rgba(88, 61, 39, .13)',
        'boer-glow': '0 0 18px rgba(197, 154, 80, .25)'
      }
    }
  },
  plugins: []
};
