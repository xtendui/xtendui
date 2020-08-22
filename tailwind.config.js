module.exports = {
  theme: {
    extend: {
      // override theme waiting for https://github.com/tailwindlabs/tailwindcss/issues/660 https://github.com/tailwindlabs/tailwindcss/issues/677
      fontFamily: {
        sans: [
          '"Open Sans"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      /*
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.8' }],
        sm: ['0.875rem', { lineHeight: '1.6' }],
        base: ['1rem', { lineHeight: '1.6' }],
        lg: ['1.125rem', { lineHeight: '1.5' }],
        xl: ['1.25rem', { lineHeight: '1.4' }],
        '2xl': ['1.5rem', { lineHeight: '1.2' }],
        '3xl': ['1.875rem', { lineHeight: '1.2' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['4rem', { lineHeight: '1' }],
      },
      */
      container: {
        center: true,
        padding: {
          default: '1.5rem',
          md: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
      },
      borderWidth: {
        default: '1px',
        '0': '0',
        '1': '1px',
        '2': '2px',
        '3': '3px',
      },
      colors: {
        // https://javisperez.github.io/tailwindcolorshades/#/?hawkes-blue=bdd3ff
        gray: {
          100: '#F8FBFF',
          200: '#EFF4FF',
          300: '#E5EDFF',
          400: '#D1E0FF',
          500: '#BDD3FF',
          600: '#AABEE6',
          700: '#717F99',
          800: '#555F73',
          900: '#393F4D',
        },
        // https://javisperez.github.io/tailwindcolorshades/#/?Azure%20Radiance=0078ff&tv=1
        accent: {
          100: '#E6F2FF',
          200: '#BFDDFF',
          300: '#99C9FF',
          400: '#4DA1FF',
          500: '#0078FF',
          600: '#006CE6',
          700: '#004899',
          800: '#003673',
          900: '#00244D',
        },
      },
      gradients: theme => ({
        accent: `${theme('colors.accent.500')} 33%, ${theme('colors.accent.600')} 100%`,
      }),
      zIndex: {
        base: '0',
        active: '2',
        out: '1',
        top: '50',
        indicator: '510',
        backdrop: '600',
        sticky: '800', // same as javascript and decreses with sequential sticky
        overlay: '900',
        last: '1000',
      },
      transitionTimingFunction: {
        in: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        out: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
      },
    },
  },
  /*
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active'],
    textOpacity: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'active'],
  },
  */
  plugins: [require('./src/tailwind-plugin')],
  experimental: {
    applyComplexClasses: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    removeDeprecatedGapUtilities: true,
  },
}
