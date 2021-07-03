module.exports = {
  theme: {
    extend: {
      screens: {
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
        success: '#22c55e',
        error: '#ef4444',
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
        xs: '0.125rem', // 2px
        sm: '0.1875rem', // 3px
      },
      cursor: {
        none: 'none',
      },
      outline: {
        browser: '5px auto Highlight',
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
    backgroundColor: ({ after, before }) =>
      after(
        ['group-active', 'active', 'group-on', 'on', 'group-out', 'out', 'group-in', 'in', 'group-done', 'done'],
        'hover',
        before(['group-hover'], 'hover')
      ),
    backgroundOpacity: ({ after, before }) =>
      after(
        ['group-active', 'active', 'group-on', 'on', 'group-out', 'out', 'group-in', 'in', 'group-done', 'done'],
        'hover',
        before(['group-hover'], 'hover')
      ),
    borderColor: ({ after, before }) =>
      after(
        ['group-active', 'active', 'group-on', 'on', 'group-out', 'out', 'group-in', 'in', 'group-done', 'done'],
        'hover',
        before(['group-hover'], 'hover')
      ),
    borderOpacity: ({ after, before }) =>
      after(
        ['group-active', 'active', 'group-on', 'on', 'group-out', 'out', 'group-in', 'in', 'group-done', 'done'],
        'hover',
        before(['group-hover'], 'hover')
      ),
    boxShadow: ({ after, before }) =>
      after(
        ['group-active', 'active', 'group-on', 'on', 'group-out', 'out', 'group-in', 'in', 'group-done', 'done'],
        'hover',
        before(['group-hover'], 'hover')
      ),
    gradientColorStops: ({ after, before }) =>
      after(
        ['group-active', 'active', 'group-on', 'on', 'group-out', 'out', 'group-in', 'in', 'group-done', 'done'],
        'hover',
        before(['group-hover'], 'hover')
      ),
    margin: ({ after, before }) =>
      after(
        ['group-active', 'active', 'group-on', 'on', 'group-out', 'out', 'group-in', 'in', 'group-done', 'done'],
        'hover',
        before(['group-hover'], 'hover')
      ),
    opacity: ({ after, before }) =>
      after(
        ['group-active', 'active', 'group-on', 'on', 'group-out', 'out', 'group-in', 'in', 'group-done', 'done'],
        'hover',
        before(['group-hover'], 'hover')
      ),
    padding: ({ after, before }) =>
      after(
        ['group-active', 'active', 'group-on', 'on', 'group-out', 'out', 'group-in', 'in', 'group-done', 'done'],
        'hover',
        before(['group-hover'], 'hover')
      ),
    scale: ({ after, before }) =>
      after(
        ['group-active', 'active', 'group-on', 'on', 'group-out', 'out', 'group-in', 'in', 'group-done', 'done'],
        'hover',
        before(['group-hover'], 'hover')
      ),
    rotate: ({ after, before }) =>
      after(
        ['group-active', 'active', 'group-on', 'on', 'group-out', 'out', 'group-in', 'in', 'group-done', 'done'],
        'hover',
        before(['group-hover'], 'hover')
      ),
    skew: ({ after, before }) =>
      after(
        ['group-active', 'active', 'group-on', 'on', 'group-out', 'out', 'group-in', 'in', 'group-done', 'done'],
        'hover',
        before(['group-hover'], 'hover')
      ),
    textColor: ({ after, before }) =>
      after(
        ['group-active', 'active', 'group-on', 'on', 'group-out', 'out', 'group-in', 'in', 'group-done', 'done'],
        'hover',
        before(['group-hover'], 'hover')
      ),
    textDecoration: ({ after, before }) =>
      after(
        ['group-active', 'active', 'group-on', 'on', 'group-out', 'out', 'group-in', 'in', 'group-done', 'done'],
        'hover',
        before(['group-hover'], 'hover')
      ),
    textOpacity: ({ after, before }) =>
      after(
        ['group-active', 'active', 'group-on', 'on', 'group-out', 'out', 'group-in', 'in', 'group-done', 'done'],
        'hover',
        before(['group-hover'], 'hover')
      ),
    translate: ({ after, before }) =>
      after(
        ['group-active', 'active', 'group-on', 'on', 'group-out', 'out', 'group-in', 'in', 'group-done', 'done'],
        'hover',
        before(['group-hover'], 'hover')
      ),
    transitionProperty: ({ after }) =>
      after(
        [
          'group-hover',
          'hover',
          'group-active',
          'active',
          'group-on',
          'on',
          'group-out',
          'out',
          'group-in',
          'in',
          'group-done',
          'done',
        ],
        'responsive'
      ),
    transitionTimingFunction: ({ after }) =>
      after(
        [
          'group-hover',
          'hover',
          'group-active',
          'active',
          'group-on',
          'on',
          'group-out',
          'out',
          'group-in',
          'in',
          'group-done',
          'done',
        ],
        'responsive'
      ),
    transitionDuration: ({ after }) =>
      after(
        [
          'group-hover',
          'hover',
          'group-active',
          'active',
          'group-on',
          'on',
          'group-out',
          'out',
          'group-in',
          'in',
          'group-done',
          'done',
        ],
        'responsive'
      ),
    transitionDelay: ({ after }) =>
      after(
        [
          'group-hover',
          'hover',
          'group-active',
          'active',
          'group-on',
          'on',
          'group-out',
          'out',
          'group-in',
          'in',
          'group-done',
          'done',
        ],
        'responsive'
      ),
    zIndex: ({ after }) =>
      after(
        [
          'group-hover',
          'hover',
          'group-active',
          'active',
          'group-on',
          'on',
          'group-out',
          'out',
          'group-in',
          'in',
          'group-done',
          'done',
        ],
        'responsive'
      ),
    display: ({ after }) =>
      after(
        [
          'group-hover',
          'hover',
          'group-active',
          'active',
          'group-on',
          'on',
          'group-out',
          'out',
          'group-in',
          'in',
          'group-done',
          'done',
        ],
        'responsive'
      ),
  },
  plugins: [require('./tailwind.plugin')],
}
