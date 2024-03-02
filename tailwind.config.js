/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        kodeMono: ["Kode Mono", "monospace"]
      },

      maxWidth:{
        MyW: "22.5rem"
      },
      width:{
        MyW: "22.5rem"
      },
    },
  },
  plugins: [],
}

