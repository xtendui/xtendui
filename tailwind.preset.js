module.exports = {
  theme: {
    extend: {
      screens: {
        '-2xl': { max: '1535px' },
        '-xl': { max: '1279px' },
        '-lg': { max: '1023px' },
        '-md': { max: '767px' },
        '-sm': { max: '639px' },
        'hover-none': { raw: '(hover: none)' },
        'hover-hover': { raw: '(hover: hover)' },
      },
      fontSize: {
        '4xs': ['0.625rem', { lineHeight: '1rem' }], // 10px
        '3xs': ['0.6875rem', { lineHeight: '1rem' }], // 11px
        '2xs': ['0.75rem', { lineHeight: '1rem' }], // 12px
        xs: ['0.8125rem', { lineHeight: '1rem' }], // 13px
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#d6e9ff',
          200: '#a3ceff',
          300: '#6bb0ff',
          400: '#3895ff',
          500: '#0077ff',
          600: '#005fcc',
          700: '#004799',
          800: '#003066',
          900: '#001833',
        },
      },
      zIndex: {
        below: '-1',
        slide: '200', // same as options.zIndex.targets.start
        content: '300', // above all page content
        drop: '400', // same as options.zIndex.targets.start
        tooltip: '500', // same as options.zIndex.targets.start
        sticky: '900',
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
