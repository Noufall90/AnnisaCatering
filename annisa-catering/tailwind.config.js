/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,vue}"
  ],
  theme: {
    extend: {
      colors: {
        linen: "#f8ede3",
        black: "#000",
        gray: {
          100: "#380b01",
          200: "#080808",
          300: "rgba(16, 16, 16, 0.6)"
        },
        silver: "#d0b8a8",
        maroon: "#75200d",
        "neutral-07": "#2c2f24",
        "neutral-01": "#fff",
        "neutral-02": "#f9f9f7",
        gainsboro: "#d9d9d9",
        dimgray: "#555",
        sienna: "#8d493a"
      },
      spacing: {},
      fontFamily: {
        poppins: ['Poppins'],  // Pastikan Poppins ada disini
        "dm-sans": "'DM Sans'",
        inter: "Inter",
        "playfair-display": "'Playfair Display'"
      },
      borderRadius: {
        xl: "20px"
      }
    },
    fontSize: {
      "11xl": "30px",
      "51xl": "70px",
      "13xl": "32px",
      "5xl": "24px",
      xl: "20px",
      "17xl": "36px",
      inherit: "inherit"
    }
  },
  corePlugins: {
    preflight: false
  },
  plugins: [
    require('daisyui')
  ]
}
