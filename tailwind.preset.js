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
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'empty',
    'read-only',
    'group-off', // custom
    'group-on', // custom
    'group-in', // custom
    'group-out', // custom
    'group-done', // custom
    'group-hover',
    'group-focus',
    'focus-within',
    'group-active', // custom
    'off', // custom
    'on', // custom
    'in', // custom
    'out', // custom
    'done', // custom
    'hover',
    'focus',
    'focus-visible',
    'active',
    'valid-submit', // custom
    'invalid-submit', // custom
    'disabled',
  ],
  variants: {
    backgroundColor: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    backgroundOpacity: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    borderColor: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    borderOpacity: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    boxShadow: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    gradientColorStops: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    margin: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    opacity: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    padding: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    scale: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    rotate: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    skew: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    textColor: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    textDecoration: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    textOpacity: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    translate: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    transitionProperty: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    transitionTimingFunction: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    transitionDuration: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    transitionDelay: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    zIndex: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
    display: ({ after }) =>
      after(
        [
          'group-off',
          'group-on',
          'group-in',
          'group-out',
          'group-done',
          'group-hover',
          'group-active',
          'off',
          'on',
          'in',
          'out',
          'done',
          'hover',
          'active',
          'valid-submit',
          'invalid-submit',
        ],
        'responsive'
      ),
  },
  plugins: [require('./tailwind.plugin')],
}
