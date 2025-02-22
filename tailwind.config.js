/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { // removido o extend(padrão) e somente personalizado
    colors: {
      blue: '#6F9DE2',
      purple: '#9871F3',
      danger: '#F05D6C',
      gray: {
        100: '#DAE4F2',
        200: '#C8D0DA',
        300: '#95A1B1',
        400: '#6F7D90',
        500: '#2A313C',
        600: '#21252C',
        700: '#191D24',
        800: '#13161B',
        900: '#0F1216',
      },
    },
    fontFamily: {
      heading: 'var(--font-heading)', 
      sans: 'var(--font-sans)',  // fonte padrão      
    },
    borderRadius: {
      'xl': '0.625rem',
    }
  },
  plugins: [],
}


