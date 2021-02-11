module.exports = {
  theme: {
    extend: {
      container: {
        center: true,
        fluid: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
      },
      fontSize: {
        '3xs': ['0.6875rem', { lineHeight: '1rem' }],
        '2xs': ['0.75rem', { lineHeight: '1rem' }],
        xs: ['0.8125rem', { lineHeight: '1rem' }],
      },
      colors: {
        code: '#2d3748',
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
        top: '500', // this is the z-index top for the page content, more z-index only for components over the content
        backdrop: '1000',
        drop: '6000', // theme.zIndex.drop same as Drop options.zIndex.targets.start
        tooltip: '6500', // theme.zIndex.tooltip same as Tooltip options.zIndex.targets.start
        sticky: '8000',
        overlay: '9000',
        last: '10000',
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
        ...require('./src/core/drop.css.js').boxShadow,
        ...require('./src/core/overlay.css.js').boxShadow,
        ...require('./src/core/tooltip.css.js').boxShadow,
      },
      transitionDelay: {
        ...require('./src/core/animation.css.js').transitionDelay,
      },
      transitionDuration: {
        ...require('./src/core/animation.css.js').transitionDuration,
      },
      transitionTimingFunction: {
        ...require('./src/core/animation.css.js').transitionTimingFunction,
      },
      animation: {
        ...require('./src/core/animation.css.js').animation,
      },
      keyframes: theme => ({
        ...require('./src/core/animation.css.js').keyframes(theme),
      }),
    },
  },
  variants: {
    backgroundColor: ({ after }) => after(['group-active'], 'group-hover', after(['active'], 'hover')),
    gradientColorStops: ({ after }) => after(['group-active'], 'group-hover', after(['active'], 'hover')),
    backgroundOpacity: ({ after }) => after(['group-active'], 'group-hover', after(['active'], 'hover')),
    borderColor: ({ after }) => after(['group-active'], 'group-hover', after(['active'], 'hover')),
    borderOpacity: ({ after }) => after(['group-active'], 'group-hover', after(['active'], 'hover')),
    boxShadow: ({ after }) => after(['group-active'], 'group-hover', after(['active'], 'hover')),
    opacity: ({ after }) => after(['group-active'], 'group-hover', after(['active'], 'hover')),
    padding: ({ after }) => after(['group-active'], 'group-hover', after(['active'], 'hover')),
    margin: ({ after }) => after(['group-active'], 'group-hover', after(['active'], 'hover')),
    textColor: ({ after }) => after(['group-active'], 'group-hover', after(['active'], 'hover')),
    textOpacity: ({ after }) => after(['group-active'], 'group-hover', after(['active'], 'hover')),
    textDecoration: ({ after }) => after(['group-active'], 'group-hover', after(['active'], 'hover')),
    scale: ({ after }) => after(['group-active'], 'group-hover', after(['active'], 'hover')),
    rotate: ({ after }) => after(['group-active'], 'group-hover', after(['active'], 'hover')),
    translate: ({ after }) => after(['group-active'], 'group-hover', after(['active'], 'hover')),
    skew: ({ after }) => after(['group-active'], 'group-hover', after(['active'], 'hover')),
    transitionProperty: ({ after }) =>
      after(
        ['group-active'],
        'group-hover',
        after(['active'], 'hover', after(['group-hover'], 'hover', after(['hover'], 'responsive')))
      ),
    transitionTimingFunction: ({ after }) =>
      after(
        ['group-active'],
        'group-hover',
        after(['active'], 'hover', after(['group-hover'], 'hover', after(['hover'], 'responsive')))
      ),
    transitionDuration: ({ after }) =>
      after(
        ['group-active'],
        'group-hover',
        after(['active'], 'hover', after(['group-hover'], 'hover', after(['hover'], 'responsive')))
      ),
    transitionDelay: ({ after }) =>
      after(
        ['group-active'],
        'group-hover',
        after(['active'], 'hover', after(['group-hover'], 'hover', after(['hover'], 'responsive')))
      ),
    zIndex: ({ after }) => after(['group-active'], 'active', after(['active'], 'responsive')),
  },
  plugins: [require('./tailwind.plugin')],
}
