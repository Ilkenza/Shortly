/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: 'hsl(180, 66%, 49%)',
          violet: 'hsl(257, 27%, 26%)',
        },
        secondary: {
          red: 'hsl(0, 87%, 67%)',
        },
        neutral: {
          gray: 'hsl(0, 0%, 75%)',
          grayishViolet: 'hsl(257, 7%, 63%)',
          veryDarkBlue: 'hsl(255, 11%, 22%)',
          veryDarkViolet: 'hsl(260, 8%, 14%)',
        },
      },
      fontFamily: {
        Poppins: ["Poppins", "serif"]
      },
      backgroundImage: {
        "bg_shorten_desktop": "url('./src/assets/images/bg-shorten-desktop.svg')",
        "bg_shorten_mobile": "url('./src/assets/images/bg-shorten-mobile.svg')",
        "bg_boost_desktop": "url('./src/assets/images/bg-boost-desktop.svg')",
        "bg_boost_mobile": "url('./src/assets/images/bg-boost-mobile.svg')",
      }
    },
  },
  plugins: [],
}