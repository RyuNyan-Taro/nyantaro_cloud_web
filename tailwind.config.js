/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './src/app/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			sm: '0.25rem',
  			DEFAULT: '0.5rem',
  			md: '0.75rem',
  			lg: '1rem',
  			xl: '1.5rem',
  			full: '9999px',
  		},
  		spacing: {
  			'wild-xs': '0.43rem',
  			'wild-sm': '1.12rem',
  			'wild-md': '2.67rem',
  			'wild-lg': '4.89rem',
  			'wild-xl': '7.31rem',
  		},
  		fontFamily: {
  			headline: ['var(--font-newsreader)', 'serif'],
  			body: ['var(--font-work-sans)', 'sans-serif'],
  		},
  		fontSize: {
  			'headline-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
  			'headline-lg': ['3rem', { lineHeight: '1.2', fontWeight: '500' }],
  			'headline-md': ['2rem', { lineHeight: '1.3', fontWeight: '500' }],
  			'body-lg': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],
  			'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
  			'label-sm': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '600' }],
  		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			card: {
  				DEFAULT: 'var(--card)',
  				foreground: 'var(--card-foreground)'
  			},
  			popover: {
  				DEFAULT: 'var(--popover)',
  				foreground: 'var(--popover-foreground)'
  			},
  			primary: {
  				DEFAULT: 'var(--primary)',
  				foreground: 'var(--primary-foreground)'
  			},
  			secondary: {
  				DEFAULT: 'var(--secondary)',
  				foreground: 'var(--secondary-foreground)'
  			},
  			muted: {
  				DEFAULT: 'var(--muted)',
  				foreground: 'var(--muted-foreground)'
  			},
  			accent: {
  				DEFAULT: 'var(--accent)',
  				foreground: 'var(--accent-foreground)'
  			},
  			destructive: {
  				DEFAULT: 'var(--destructive)',
  				foreground: 'var(--destructive-foreground)'
  			},
  			border: 'var(--border)',
  			input: 'var(--input)',
  			ring: 'var(--ring)',
  			chart: {
  				'1': 'var(--chart-1)',
  				'2': 'var(--chart-2)',
  				'3': 'var(--chart-3)',
  				'4': 'var(--chart-4)',
  				'5': 'var(--chart-5)'
  			},
  			surface: {
  				DEFAULT: 'var(--surface)',
  				dim: 'var(--surface-dim)',
  				bright: 'var(--surface-bright)',
  				variant: 'var(--surface-variant)',
  				tint: 'var(--surface-tint)',
  				'container-lowest': 'var(--surface-container-lowest)',
  				'container-low': 'var(--surface-container-low)',
  				'container': 'var(--surface-container)',
  				'container-high': 'var(--surface-container-high)',
  				'container-highest': 'var(--surface-container-highest)',
  			},
  			'on-surface': 'var(--on-surface)',
  			'on-surface-variant': 'var(--on-surface-variant)',
  			'inverse-surface': 'var(--inverse-surface)',
  			'inverse-on-surface': 'var(--inverse-on-surface)',
  			'inverse-primary': 'var(--inverse-primary)',
  			outline: {
  				DEFAULT: 'var(--outline)',
  				variant: 'var(--outline-variant)',
  			},
  			tertiary: {
  				DEFAULT: 'var(--tertiary)',
  				container: 'var(--tertiary-container)',
  				fixed: 'var(--tertiary-fixed)',
  				'fixed-dim': 'var(--tertiary-fixed-dim)',
  			},
  			'on-tertiary': 'var(--on-tertiary)',
  			'on-tertiary-container': 'var(--on-tertiary-container)',
  			'on-tertiary-fixed': 'var(--on-tertiary-fixed)',
  			'on-tertiary-fixed-variant': 'var(--on-tertiary-fixed-variant)',
  			error: {
  				DEFAULT: 'var(--error)',
  				container: 'var(--error-container)',
  			},
  			'on-error': 'var(--on-error)',
  			'on-error-container': 'var(--on-error-container)',
  			'primary-container': 'var(--primary-container)',
  			'on-primary-container': 'var(--on-primary-container)',
  			'primary-fixed': 'var(--primary-fixed)',
  			'primary-fixed-dim': 'var(--primary-fixed-dim)',
  			'on-primary-fixed': 'var(--on-primary-fixed)',
  			'on-primary-fixed-variant': 'var(--on-primary-fixed-variant)',
  			'secondary-container': 'var(--secondary-container)',
  			'on-secondary-container': 'var(--on-secondary-container)',
  			'secondary-fixed': 'var(--secondary-fixed)',
  			'secondary-fixed-dim': 'var(--secondary-fixed-dim)',
  			'on-secondary-fixed': 'var(--on-secondary-fixed)',
  			'on-secondary-fixed-variant': 'var(--on-secondary-fixed-variant)',
  			'on-background': 'var(--on-background)',
  		}
  	}
  },
	// eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
}

