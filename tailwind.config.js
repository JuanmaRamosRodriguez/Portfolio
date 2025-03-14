/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Cinzel': ['Cinzel', 'sans-serif'],
        'Quantify': ['Quantify', 'sans-serif'],
        'Hand': ['RedHand', 'sans-serif'],
        'Orbitron': ['Orbitron', 'sans-serif']
      },
      backgroundImage: {
        'fondo': "url('src/assets/images/imagenDeFondo.png')",
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite alternate', // Define la animación
      },
      keyframes: {
        glow: {
          '0%': {
            textShadow: '0 0 5px #39F2AE, 0 0 10px #39F2AE', // Estado inicial
          },
          '100%': {
            textShadow: '0 0 10px #39F2AE, 0 0 20px #39F2AE, 0 0 30px #39F2AE', // Estado final
          },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    function({ addUtilities }) {
      addUtilities({
        '.animate-glow': {
          animation: 'glow 2s ease-in-out infinite alternate', // Clase personalizada
        },
      });
    },
  ],
};
