module.exports = {
  content: ['./index.html', './**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // Dark slate
        surface: '#1e293b',    // Lighter slate
        primary: '#3b82f6',    // Blue-500
        secondary: '#64748b',
        accent: '#f43f5e',     // Rose-500 (for chat/alerts)
      },
      fontFamily: {
        sans: ['Spline Sans', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      }
    }
  },
  plugins: [],
};
