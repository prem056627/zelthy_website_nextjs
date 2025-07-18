/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          60: '#B8FF33',
          80: '#DBFF99',
          90: '#EDFFCC',
        },
        dark: {
          5: '#0D0D0D',
          6: '#0E0E10',
          10: '#1A1A1A',
          15: '#262626',
          20: '#333333',
          24: '#3D3D3D',
          30: '#4D4D4D',
          34: '#575757',
          38: '#616161',
        },
        light: {
          88: '#DADEE7',
          94: '#EDEFF3',
          96: '#F3F4F7',
          97: '#F6F7F9',
          98: '#F9FAFB',
          99: '#FCFCFD',
        },
        grey: {
          40: '#666666',
          45: '#737373',
          50: '#808080',
          60: '#999999',
          70: '#B3B3B3',
          80: '#CCCCCC',
          100: '#F0F2F5',
          200: '#E4E7EC',
          400: '#98A2B3',
          500: '#667185',
          600: '#475367',
          700: '#344054',
          900: '#101928',
        },
        primary: {
          600: '#CC400C',
        },
        secondary: {
          400: '#1671D9',
        },
        success: {
          50: '#E7F6EC',
          400: '#0F973D',
          600: '#04802E',
        },
        error: {
          400: '#D42620',
        },
      },
      fontFamily: {
       'sans': ['Instrument Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

