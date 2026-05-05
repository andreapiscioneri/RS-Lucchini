// tailwind.config.ts
// Tema Lucchini RS — palette industriale premium dark + light.
// I colori semantici usano CSS custom properties per il tema switch.
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './composables/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem'
      }
    },
    extend: {
      colors: {
        // These use CSS vars so they flip between dark/light automatically.
        // Format: rgb(var(--x) / <alpha-value>) enables opacity modifiers (bg-bg/40).
        bg: {
          DEFAULT: 'rgb(var(--color-bg) / <alpha-value>)',
          deep: 'rgb(var(--color-bg-deep) / <alpha-value>)',
          soft: 'rgb(var(--color-bg-soft) / <alpha-value>)'
        },
        steel: {
          50: '#F5F7FA',
          100: '#E5E9EF',
          200: '#C9D0DC',
          300: '#94A3B8',
          400: '#64748B',
          500: 'rgb(var(--color-steel-500) / <alpha-value>)',
          600: 'rgb(var(--color-steel-600) / <alpha-value>)',
          700: 'rgb(var(--color-steel-700) / <alpha-value>)',
          800: 'rgb(var(--color-steel-800) / <alpha-value>)',
          900: '#11141C'
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          50: '#FFF1E6',
          100: '#FFE0C7',
          200: '#FFC089',
          300: '#FDA052',
          400: '#FB8530',
          500: 'rgb(var(--color-accent) / <alpha-value>)',
          600: '#D55F0F',
          700: '#A8480A',
          800: '#7A3406'
        },
        ink: {
          DEFAULT: 'rgb(var(--color-ink) / <alpha-value>)',
          muted: 'rgb(var(--color-ink-muted) / <alpha-value>)',
          dim: 'rgb(var(--color-ink-dim) / <alpha-value>)'
        },
        // Light mode brand blues
        brand: {
          DEFAULT: '#1F3A5F',
          mid: '#2C5B8A',
          accent: '#4A90E2'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      fontSize: {
        '7xl': ['4.75rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        display: ['clamp(2.75rem, 6vw, 5.75rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        hero: ['clamp(3.25rem, 8vw, 7rem)', { lineHeight: '1', letterSpacing: '-0.035em' }]
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(var(--color-accent) / 0.20), 0 20px 80px -20px rgba(var(--color-accent) / 0.45)',
        'glow-soft': '0 10px 40px -10px rgba(var(--color-accent) / 0.25)',
        elevate: '0 30px 80px -30px rgba(0,0,0,0.6)',
        'elevate-light': '0 20px 60px -20px rgba(31,58,95,0.18)',
        inset: 'inset 0 1px 0 0 rgba(255,255,255,0.06)'
      },
      backgroundImage: {
        'grad-radial':
          'radial-gradient(1200px 600px at 50% -10%, rgba(249,115,22,0.18), transparent 60%)',
        'grad-radial-light':
          'radial-gradient(1200px 600px at 50% -10%, rgba(44,91,138,0.12), transparent 60%)',
        'grad-steel':
          'linear-gradient(180deg, rgba(26,31,41,0.6) 0%, rgba(11,15,20,0.0) 100%)',
        'grad-steel-light':
          'linear-gradient(180deg, rgba(242,242,242,0.8) 0%, rgba(255,255,255,0.0) 100%)',
        'grad-shine':
          'linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 70%)',
        noise:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")"
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(var(--color-accent) / 0.45)' },
          '50%': { boxShadow: '0 0 0 12px rgba(var(--color-accent) / 0)' }
        },
        scrollHint: {
          '0%': { transform: 'translateY(-4px)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(8px)', opacity: '0' }
        },
        slowZoom: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.08)' }
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shine: 'shine 2.4s linear infinite',
        glowPulse: 'glowPulse 2.6s ease-in-out infinite',
        scrollHint: 'scrollHint 1.8s ease-in-out infinite',
        slowZoom: 'slowZoom 18s ease-out forwards'
      }
    }
  },
  plugins: []
}
