module.exports = {
  theme: {
    extend: {
      container: {
        center: true,
        fluid: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
      },
      fontSize: {
        '3xs': ['0.6875rem', { lineHeight: '1rem' }], // 11px
        '2xs': ['0.75rem', { lineHeight: '1rem' }], // 12px
        xs: ['0.8125rem', { lineHeight: '1rem' }], // 13px
      },
      colors: {
        primary: {
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
        below: '-1',
        slide: '200', // same as options.zIndex.targets.start
        drop: '400', // same as options.zIndex.targets.start
        tooltip: '500', // same as options.zIndex.targets.start
        sticky: '900',
        above: '1000', // this is the z-index above all page content
        overlay: '5000', // same as options.zIndex.targets.start
        last: '10000', // this is the z-index above all xtendui zIndex
      },
      flex: {
        full: '1 1 100%',
      },
      inset: {
        100: '100%',
      },
      borderRadius: {
        inherit: 'inherit',
      },
      cursor: {
        none: 'none',
      },
      boxShadow: {
        ...require('./src/drop.css.js').boxShadow,
        ...require('./src/overlay.css.js').boxShadow,
        ...require('./src/tooltip.css.js').boxShadow,
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
  variants: {
    display: ['responsive', 'group-hover', 'group-xt-active', 'hover', 'xt-active', 'focus'],
    backgroundColor: ({ after }) => after(['group-xt-active'], 'group-hover', after(['xt-active'], 'hover')),
    gradientColorStops: ({ after }) => after(['group-xt-active'], 'group-hover', after(['xt-active'], 'hover')),
    backgroundOpacity: ({ after }) => after(['group-xt-active'], 'group-hover', after(['xt-active'], 'hover')),
    borderColor: ({ after }) => after(['group-xt-active'], 'group-hover', after(['xt-active'], 'hover')),
    borderOpacity: ({ after }) => after(['group-xt-active'], 'group-hover', after(['xt-active'], 'hover')),
    boxShadow: ({ after }) => after(['group-xt-active'], 'group-hover', after(['xt-active'], 'hover')),
    opacity: ({ after }) => after(['group-xt-active'], 'group-hover', after(['xt-active'], 'hover')),
    padding: ({ after }) => after(['group-xt-active'], 'group-hover', after(['xt-active'], 'hover')),
    margin: ({ after }) => after(['group-xt-active'], 'group-hover', after(['xt-active'], 'hover')),
    textColor: ({ after }) => after(['group-xt-active'], 'group-hover', after(['xt-active'], 'hover')),
    textOpacity: ({ after }) => after(['group-xt-active'], 'group-hover', after(['xt-active'], 'hover')),
    textDecoration: ({ after }) => after(['group-xt-active'], 'group-hover', after(['xt-active'], 'hover')),
    scale: ({ after }) => after(['group-xt-active'], 'group-hover', after(['xt-active'], 'hover')),
    rotate: ({ after }) => after(['group-xt-active'], 'group-hover', after(['xt-active'], 'hover')),
    translate: ({ after }) => after(['group-xt-active'], 'group-hover', after(['xt-active'], 'hover')),
    skew: ({ after }) => after(['group-xt-active'], 'group-hover', after(['xt-active'], 'hover')),
    transitionProperty: ({ after }) =>
      after(
        ['group-xt-active'],
        'group-hover',
        after(['xt-active'], 'hover', after(['group-hover'], 'hover', after(['hover'], 'responsive')))
      ),
    transitionTimingFunction: ({ after }) =>
      after(
        ['group-xt-active'],
        'group-hover',
        after(['xt-active'], 'hover', after(['group-hover'], 'hover', after(['hover'], 'responsive')))
      ),
    transitionDuration: ({ after }) =>
      after(
        ['group-xt-active'],
        'group-hover',
        after(['xt-active'], 'hover', after(['group-hover'], 'hover', after(['hover'], 'responsive')))
      ),
    transitionDelay: ({ after }) =>
      after(
        ['group-xt-active'],
        'group-hover',
        after(['xt-active'], 'hover', after(['group-hover'], 'hover', after(['hover'], 'responsive')))
      ),
    zIndex: ({ after }) => after(['group-xt-active'], 'xt-active', after(['xt-active'], 'responsive')),
  },
  plugins: [require('./tailwind.plugin')],
}
