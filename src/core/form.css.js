const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = px => `${round(px / 16)}rem`

module.exports = {
  component: theme => ({
    label: {
      cursor: 'pointer',
    },
    'fieldset, .fieldset': {
      // styles
      '& + &': {
        marginTop: theme('spacing.8'),
      },
    },
    'legend, .legend': {
      // styles
      marginTop: theme('spacing.6'),
      marginBottom: theme('spacing.4'),
      '@apply mt-fc mb-lc': {},
      width: '100%',
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.bold'),
      fontSize: rem(24),
      lineHeight: theme('lineHeight.snug'),
    },
    '.form-valid': {
      borderColor: `${theme('colors.success')} !important`,
    },
    '.form-invalid': {
      borderColor: `${theme('colors.error')} !important`,
    },
    '.form-label': {
      // setup
      cursor: 'pointer',
      display: 'flex',
      // styles
      fontWeight: theme('fontWeight.semibold'),
      fontSize: '0.8em',
      lineHeight: theme('lineHeight.snug'),
    },
    '.form-label-required': {
      // styles
      '&:after': {
        content: '"*"',
        marginLeft: theme('spacing.1'),
      },
    },
    '.form-item': {
      // setup
      display: 'block', // @FIX select and textarea space below
      // styles
      padding: `.75em 1.2em`,
      width: '100%',
      fontSize: '0.8em',
      lineHeight: theme('lineHeight.snug'),
      // animation
      transitionProperty: 'border, background, color',
      transitionDuration: theme('transitionDuration.500'),
      transitionTimingFunction: theme('transitionTimingFunction.in-out'),
    },
    '.form-select': {
      // setup
      '-webkit-appearance': 'none',
      appearance: 'none',
      backgroundRepeat: 'no-repeat',
      // styles
      paddingRight: '3em',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${encodeURIComponent(
        theme('colors.black')
      )}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>')`,
      backgroundSize: '1em',
      backgroundPosition: 'right 1rem center',
      '&[multiple]': {
        backgroundImage: 'none !important',
      },
    },
    textarea: {
      // styles
      minHeight: '3.5rem',
    },
    '.form-label-check': {
      // setup
      cursor: 'pointer',
      display: 'inline-flex',
      // styles
      fontSize: '0.8em',
      lineHeight: theme('lineHeight.snug'),
    },
    '.form-check': {
      // setup
      '-webkit-appearance': 'none',
      appearance: 'none',
      cursor: 'pointer',
      position: 'relative',
      flexShrink: '0',
      backgroundRepeat: 'no-repeat',
      // styles
      '&[disabled]': {
        backgroundColor: `${theme('colors.gray.500')} !important`,
        borderColor: `${theme('colors.gray.500')} !important`,
        opacity: '1',
      },
      // animation
      transitionProperty: 'all',
      transitionDuration: theme('transitionDuration.500'),
      transitionTimingFunction: theme('transitionTimingFunction.in-out'),
    },
    '.form-checkbox': {
      // styles
      top: '-1px',
      width: '1.5em',
      height: '1.5em',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 16 16" fill="${encodeURIComponent(
        theme('colors.white')
      )}" xmlns="http://www.w3.org/2000/svg"><path d="M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z"/></svg>')`,
      backgroundSize: '0',
      backgroundPosition: 'center center',
      '&:checked': {
        backgroundSize: '100%',
        backgroundColor: 'currentColor',
        borderColor: 'currentColor',
      },
    },
    '.form-radio': {
      top: '-1px',
      width: '1.5em',
      height: '1.5em',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="-6 -6 12 12" fill="${encodeURIComponent(
        theme('colors.white')
      )}" xmlns="http://www.w3.org/2000/svg"><circle r="3"/></svg>')`,
      backgroundPosition: 'center center',
      backgroundSize: '0',
      '&:checked': {
        backgroundSize: '100%',
        backgroundColor: 'currentColor',
        borderColor: 'currentColor',
      },
    },
    '.form-switch': {
      top: '-1px',
      width: '2.5em',
      height: '1.5em',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="-5 -5 10 10" fill="${encodeURIComponent(
        theme('colors.gray.600')
      )}" xmlns="http://www.w3.org/2000/svg"><circle r="3"/></svg>')`,
      backgroundSize: 'contain',
      backgroundPosition: 'left center',
      '&:checked': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="-5 -5 10 10" fill="${encodeURIComponent(
          theme('colors.white')
        )}" xmlns="http://www.w3.org/2000/svg"><circle r="3"/></svg>')`,
        backgroundPosition: 'right center',
        backgroundColor: 'currentColor',
        borderColor: 'currentColor',
      },
    },
  }),
}
