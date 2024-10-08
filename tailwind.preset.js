module.exports = {
  theme: {
    extend: {
      fontSize: {
        10: ['0.625rem', { lineHeight: '1rem' }],
        11: ['0.6875rem', { lineHeight: '1rem' }],
        12: ['0.75rem', { lineHeight: '1rem' }],
        13: ['0.8125rem', { lineHeight: '1rem' }],
        14: ['0.875rem', { lineHeight: '1.25rem' }],
        15: ['0.9375rem', { lineHeight: '1.25rem' }],
      },
      colors: {
        primary: {
          50: '#E0EFFF',
          100: '#C7E1FF',
          200: '#8AC0FF',
          300: '#52A3FF',
          400: '#1A85FF',
          500: '#0067DD',
          600: '#0053B3',
          700: '#003E85',
          800: '#002857',
          900: '#00152E',
        },
      },
      zIndex: {
        below: '-1',
        slide: '200', // same as options.zIndex.targets.start
        content: '300', // above all page content
        sticky: '500',
        tooltip: '700', // same as options.zIndex.targets.start
        drop: '700', // same as options.zIndex.targets.start
        above: '1000', // above all page components
        overlay: '5000', // same as options.zIndex.targets.start
        last: '10000', // this is the z-index above all
      },
      inset: {
        100: '100%',
      },
      borderRadius: {
        inherit: 'inherit',
        xs: '0.125rem', // 2px
        sm: '0.1875rem', // 3px
      },
      cursor: {
        none: 'none',
      },
      outline: {
        browser: '5px auto Highlight',
      },
      transitionDelay: {
        ...require('./src/animation.css.js').transitionDelay,
      },
      transitionDuration: {
        ...require('./src/animation.css.js').transitionDuration,
      },
      transitionTimingFunction: {
        ...require('./src/animation.css.js').transitionTimingFunction,
      },
      animation: {
        ...require('./src/animation.css.js').animation,
      },
      keyframes: theme => ({
        ...require('./src/animation.css.js').keyframes(theme),
      }),
    },
  },
  plugins: [require('./tailwind.plugin')],
}
