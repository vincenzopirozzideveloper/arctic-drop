/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        arctic: {
          bg:        '#8EA1AB',
          bgDeep:    '#7E93A0',
          bgLight:   '#A1B3BC',
          panel:     '#94A6B0',
          ink:       '#0E141A',
          inkSoft:   '#1C242C',
          muted:     '#4A5964',
          mutedSoft: '#6B7985',
          line:      'rgba(14,20,26,0.18)',
          lineSoft:  'rgba(14,20,26,0.09)',
          white:     '#F2F4F5',
          silver:    '#C9D3D9',
          blue:      '#4E6F8A',
          black:     '#0A0E12',
        },
      },
      fontFamily: {
        display: ['Anton', 'Archivo', 'ui-sans-serif', 'sans-serif'],
        sans:    ['Archivo', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        display: '-0.02em',
        brand:   '0.14em',
        micro:   '0.18em',
      },
      maxWidth: {
        page: '1440px',
      },
    },
  },
  plugins: [],
}
