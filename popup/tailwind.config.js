// /** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    // Add this plugin to handle scrollbar styling
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          scrollbarWidth: 'none', /* For Firefox */
          '-ms-overflow-style': 'none' /* For Internet Explorer and Edge */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none' /* For Chrome, Safari, and Opera */
        },
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(155, 155, 155, 0.5) transparent',
        },
        '.scrollbar-thin::-webkit-scrollbar': {
          width: '12px',
        },
        '.scrollbar-thin::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '.scrollbar-thin::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(155, 155, 155, 0.5)',
          borderRadius: '20px',
          border: '3px solid transparent',
          backgroundClip: 'content-box',
        },
      }
      addUtilities(newUtilities)
    }
  ],
  content: ["./popup/*.{ts,tsx}"] // your popup files
}
