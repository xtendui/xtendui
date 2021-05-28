/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/minimit/xtendui/blob/beta/LICENSE)
 */

module.exports = {
  component: theme => ({
    '.xt-form-valid': {
      // styles
      borderColor: `${theme('colors.success')} !important`,
    },
    '.xt-form-invalid': {
      // styles
      borderColor: `${theme('colors.error')} !important`,
    },
    '.xt-label-required': {
      // styles
      '&:after': {
        content: '"*"',
      },
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
        backgroundImage: 'none',
      },
    },
    '.xt-check': {
      appearance: 'none',
      cursor: 'pointer',
      position: 'relative',
      flexShrink: '0',
      backgroundRepeat: 'no-repeat',
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
      backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 36.3 36.3" fill="${encodeURIComponent(
        theme('colors.white')
      )}" stroke="${encodeURIComponent(
        theme('colors.gray.300')
      )}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="18" cy="18" r="17"/></svg>')`,
      backgroundSize: 'contain',
      backgroundPosition: 'left center',
      '&:checked': {
        backgroundPosition: 'right center',
        backgroundColor: 'currentColor',
        borderColor: 'currentColor',
      },
    },
  }),
}
