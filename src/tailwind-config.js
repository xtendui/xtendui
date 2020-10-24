module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      colors: {
        success: '#48bb78',
        error: '#f56565',
        accent: {
          50: '#F2F8FF',
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
      zIndex: {
        base: '0',
        active: '25',
        top: '50',
        backdrop: '500',
        drop: '600',
        sticky: '800', // same as javascript and decreses with sequential sticky
        overlay: '900',
        last: '1000',
      },
      inset: {
        100: '100%',
      },
      transitionTimingFunction: {
        ...require('./core/animation.css.js').transitionTimingFunction,
      },
      animation: {
        ...require('./core/animation.css.js').animation,
      },
      keyframes: theme => ({
        ...require('./core/animation.css.js').keyframes(theme),
      }),
    },
  },
  variants: {
    backgroundColor: ({ after }) => after(['active'], 'hover'),
    gradientColorStops: ({ after }) => after(['active'], 'hover'),
    backgroundOpacity: ({ after }) => after(['active'], 'hover'),
    borderColor: ({ after }) => after(['active'], 'hover'),
    borderOpacity: ({ after }) => after(['active'], 'hover'),
    boxShadow: ({ after }) => after(['active'], 'hover'),
    opacity: ({ after }) => after(['active'], 'hover'),
    textColor: ({ after }) => after(['active'], 'hover'),
    textOpacity: ({ after }) => after(['active'], 'hover'),
    textDecoration: ({ after }) => after(['active'], 'hover'),
    scale: ({ after }) => after(['active'], 'hover'),
    rotate: ({ after }) => after(['active'], 'hover'),
    translate: ({ after }) => after(['active'], 'hover'),
    skew: ({ after }) => after(['active'], 'hover'),
  },
  plugins: [require('./tailwind-plugin')],
}
