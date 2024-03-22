/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        architect: "'Architects Daughter', cursive",
        robert: "'Lovers Quarrel', cursive",
        east: "'East Sea Dokdo', cursive",
        kalam: "'Kalam', cursive",
        orbit: "'Orbitron', cursive",
        rubik: "'Rubik 80s Fade', cursive",
        chakra: "'Chakra Petch', sans-serif",
        michro: "'Michroma', sans-serif",
        mont: "'Montserrat', sans-serif",
        bai: "'Bai Jamjuree', sans-serif",
        montserrat: "'Montserrat', sans-serif;",
        fawk: "'Fahkwang', sans-serif",
        gruppo: "'Gruppo', sans-serif",
        marcel: "'Marcellus', serif",
        prata: "'Prata', serif",
        sync: "'Syncopate', sans-serif",
        tenor: "'Tenor Sans', sans-serif",
        cors: "'Cormorant Garamond', serif",
      },
    },
  },
  plugins: [],
}
