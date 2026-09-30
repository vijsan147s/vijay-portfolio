/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--c-bg)',
        bg2: 'var(--c-bg2)',
        bg3: 'var(--c-bg3)',
        ink: 'var(--c-ink)',
        ink2: 'var(--c-ink2)',
        ink3: 'var(--c-ink3)',
        accent: 'var(--c-accent)',
        accent2: 'var(--c-accent2)',
        accent3: 'var(--c-accent3)',
        rule: 'var(--c-rule)',
        rule2: 'var(--c-rule2)',
        onaccent: 'var(--c-onaccent)',
      },
      fontFamily: {
        display: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['Instrument Sans', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
