/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#9EFF00',
        secondary: '#00f6ff',
        hover: '#D4E458',
        'text-color': '#EAEAEA',
        'bg-color-1': '#000000',
        'bg-color-2': '#1D1D1D',
        buttons: {
          primary: '#D0C9A3',
          secondary: '#747373',
          'diamond-btn-bg-color': 'rgba(0, 0, 0, 0.4)',
          'diamond-btn-border-color': '#CBC5A2',
        },
      },
      fontSize: {
        title: '2.6rem;',
        paragraph: '1.2rem;',
      },
      fontFamily: {
        poppins: ['Poppins'],
        ranika: ['Ranika'],
      },
      backgroundImage: {
        'home-screen': "url('/src/assets/image/login-screen/bg-login.png')",
        'syllabus-bg-img': "url('/src/assets/logo/syllabusCard.svg')",
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};
