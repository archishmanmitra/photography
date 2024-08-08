/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
      },
      transitionDuration: {
        '1s': '1000ms',
      },
    },
    fontFamily: {
      'grotesk': ['Grotesk'],
      'serif': ['Rosalindale', 'Georgia'],
      'newserif':['Rosalindale Regular', 'Rosalindale']
    }
  },
  plugins: [],
}
