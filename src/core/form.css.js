module.exports = {
  component: theme => ({
    '.xt-form-valid': {
      // styles
      borderColor: `${theme('colors.green.500')} !important`,
    },
    '.xt-form-invalid': {
      // styles
      borderColor: `${theme('colors.red.500')} !important`,
    },
    '.xt-label-required': {
      // styles
      '&:after': {
        content: '"*"',
        marginLeft: theme('spacing.1'),
      },
    },
    '.xt-label': {
      display: 'flex',
    },
    '.xt-input': {
      display: 'block', // @FIX select and textarea space below
      width: '100%',
    },
    '.xt-select': {
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
    'xt-textarea': {
      // styles
      minHeight: '3.5rem',
      maxHeight: '10.5rem',
    },
    '.xt-label-check': {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'baseline',
    },
    '.xt-check': {
      appearance: 'none',
      cursor: 'pointer',
      position: 'relative',
      flexShrink: '0',
      backgroundRepeat: 'no-repeat',
      // styles
      '&[readonly], &[disabled], &.xt-disabled': {
        backgroundColor: `${theme('colors.gray.500')} !important`,
        borderColor: `${theme('colors.gray.500')} !important`,
        opacity: '1',
      },
    },
    '.xt-check-content': {
      // styles
      marginLeft: '1em',
    },
    '.xt-checkbox': {
      appearance: 'none',
      cursor: 'pointer',
      position: 'relative',
      flexShrink: '0',
      backgroundRepeat: 'no-repeat',
      // styles
      top: '.2em',
      width: '1.25em',
      height: '1.25em',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 16 16" fill="${encodeURIComponent(
        theme('colors.white')
      )}" xmlns="http://www.w3.org/2000/svg"><path d="M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z"/></svg>')`,
      backgroundSize: '0',
      backgroundPosition: 'top center',
      '&:checked': {
        backgroundSize: '100%',
        backgroundColor: 'currentColor',
        borderColor: 'currentColor',
      },
    },
    '.xt-radio': {
      appearance: 'none',
      cursor: 'pointer',
      position: 'relative',
      flexShrink: '0',
      backgroundRepeat: 'no-repeat',
      // styles
      top: '.2em',
      width: '1.25em',
      height: '1.25em',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="-6 -6 12 12" fill="${encodeURIComponent(
        theme('colors.white')
      )}" xmlns="http://www.w3.org/2000/svg"><circle r="3"/></svg>')`,
      backgroundSize: '0',
      backgroundPosition: 'top center',
      '&:checked': {
        backgroundSize: '100%',
        backgroundColor: 'currentColor',
        borderColor: 'currentColor',
      },
    },
    '.xt-switch': {
      appearance: 'none',
      cursor: 'pointer',
      position: 'relative',
      flexShrink: '0',
      backgroundRepeat: 'no-repeat',
      // styles
      top: '.2em',
      width: '2.25em',
      height: '1.25em',
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
