/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors: {
        'purple': "#AD1FEA",
        'purple-500': "#C75AF6",
        'blue': "#4661E6",
        'blue-800': "#7C91F9",
        'blue-500': "#62BCFA",
        'red': "#D73737",
        'red-800': "#E98888",
        'red-500': "#F49F85",
        'dark': '#373F68',
        'dark-800': '#3A4374',
        'dark-500': '#647196',
        'light': '#FFFFFF',
        'light-800': '#F7F8FD',
        'light-500': '#F2F4FF'
      },
      fontFamily: {
        jost: ['Jost']
      },
      backgroundImage: {
        'mobile': "url('/assets/suggestions/mobile/background-header.png')",
        'tablet': "url('/assets/suggestions/tablet/background-header.png')",
        'desktop': "url('/assets/suggestions/desktop/background-header.png')",

      },
      borderRadius: {
        '10': '0.625rem'
      }
    },
  },
  plugins: [],
}

