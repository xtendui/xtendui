module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        md: '2.5rem',
        lg: '3rem',
        xl: '4rem',
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
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.4' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.6' }],
        lg: ['1.125rem', { lineHeight: '1.6' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
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
