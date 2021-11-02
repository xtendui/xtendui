/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/beta/LICENSE.txt)
 */

module.exports = {
  component: theme => ({
    '.xt-select': {
      appearance: 'none',
      backgroundRepeat: 'no-repeat',
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
      top: '.25em',
      width: '1.2375em',
      height: '1.2375em',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 16 16" fill="${encodeURIComponent(
        theme('colors.white')
      )}" xmlns="http://www.w3.org/2000/svg"><path d="M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z"/></svg>')`,
      backgroundSize: '0',
      backgroundPosition: 'top center',
      '&:checked': {
        backgroundSize: '100%',
        backgroundColor: 'currentColor',
      },
    },
    '.xt-radio': {
      appearance: 'none',
      cursor: 'pointer',
      position: 'relative',
      flexShrink: '0',
      backgroundRepeat: 'no-repeat',
      top: '.25em',
      width: '1.2375em',
      height: '1.2375em',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="-6 -6 12 12" fill="${encodeURIComponent(
        theme('colors.white')
      )}" xmlns="http://www.w3.org/2000/svg"><circle r="3"/></svg>')`,
      backgroundSize: '0',
      backgroundPosition: 'top center',
      '&:checked': {
        backgroundSize: '100%',
        backgroundColor: 'currentColor',
      },
    },
    '.xt-switch': {
      appearance: 'none',
      cursor: 'pointer',
      position: 'relative',
      flexShrink: '0',
      backgroundRepeat: 'no-repeat',
      top: '.25em',
      width: '2.25em',
      height: '1.2375em',
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
