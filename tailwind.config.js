/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'grotesk': ['Grotesk'],
      'serif': ['Rosalindale', 'Georgia'],
      'newserif':['Rosalindale Regular', 'Rosalindale']
    }
  },
  plugins: [],
}
