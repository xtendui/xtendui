export const classes = {
  // special
  bgBlur: () => 'bg-opacity-75 backdrop-filter backdrop-blur',
  bgBlurInner: () => 'bg-opacity-0',
  gatsbyFloat: () =>
    'rounded-md transition ease-in-out hover:ease-out hover:text-white hover:bg-primary-500 hover:shadow-lg hover:-translate-y-1 active:ease-out active:text-white active:bg-primary-500 active:shadow-md active:translate-y-0 on:ease-out on:text-white on:bg-primary-500 on:shadow-md on:translate-y-0',
  cardToggle: () => 'rounded-full text-xs py-2 px-3 font-medium shadow',
  cardSlide: () =>
    'rounded-md p-8 text-base text-center bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition',
  buttonSlider: () =>
    'p-2 min-w-[1.25rem] h-5 rounded-full text-3xs text-black font-medium leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all',
  // button
  buttonRadius: () => '-md',
  buttonSm: () => 'py-2 px-3 text-xs',
  buttonMd: () => 'py-2.5 px-3.5 text-sm',
  buttonLg: () => 'py-3 px-4 text-base',
  buttonLower: () => 'font-medium leading-snug',
  buttonUpper: () => 'font-medium leading-snug tracking-wider uppercase',
  buttonGray: () => 'text-black bg-gray-100',
  buttonGrayAnim: () => 'transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200',
  buttonGrayAnimGroup: () => 'group-hover:bg-gray-200 group-active:bg-gray-300 group-on:bg-gray-200',
  buttonPrimary: () => 'text-white bg-primary-500',
  buttonPrimaryAnim: () =>
    'transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600',
  buttonPrimaryAnimGroup: () =>
    'group-hover:text-white group-hover:bg-primary-600 group-active:text-white group-active:bg-primary-700 group-on:text-white group-on:bg-primary-600',
  buttonGrayPrimaryAnim: () =>
    'transition hover:bg-gray-200 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500',
  buttonRing: () => 'ring-2 ring-primary-200',
  buttonRingAnim: () => 'transition hover:ring-primary-300 active:ring-primary-400 on:ring-primary-300',
  buttonTextAnim: () => 'transition hover:text-opacity-60 active:text-opacity-100 on:text-opacity-100',
  buttonCloseOutsideAnim: () => 'transition md:text-white md:bg-primary-500 md:hover:bg-primary-600',
  // group
  groupMd: () => 'p-3',
  groupButtonRadius: () => '-md',
  groupButtonSm: () => 'py-1 px-2 text-xs',
  groupButtonMd: () => 'py-1.5 px-2.5 text-sm',
  groupButtonLg: () => 'py-2 px-3 text-base',
  groupButtonGray: () => 'w-full justify-start text-left text-black font-medium leading-snug bg-gray-100',
  groupButtonPrimary: () => 'w-full justify-start text-left text-white font-medium leading-snug bg-primary-500',
  // badge
  badgeRadius: () => '-xs',
  badgeSm: () => 'py-2 px-2.5 text-3xs',
  badgeMd: () => 'py-3 px-3.5 text-xs',
  badgeLg: () => 'py-3.5 px-4 text-base',
  badgeGray: () => 'text-black font-medium leading-snug tracking-wider uppercase bg-gray-100',
  badgePrimary: () => 'text-white font-medium leading-snug tracking-wider uppercase bg-primary-500',
  // tooltip
  tooltipRadius: () => '-md',
  tooltipSm: () => 'py-1 px-2 text-3xs',
  tooltipMd: () => 'py-2 px-2.5 text-xs',
  tooltipLg: () => 'py-2.5 px-4 text-base',
  // card
  textBlack: () => 'text-gray-900 xt-links-default',
  textWhite: () => 'text-white xt-links-inverse',
  cardRadius: () => '-2xl',
  cardSm: () => 'p-6 sm:p-8 text-sm',
  cardMd: () => 'p-7 sm:p-9 text-base',
  cardLg: () => 'p-8 sm:p-10 text-base sm:text-lg',
  cardBlack: () => 'font-medium bg-black',
  cardWhite: () => 'bg-white',
  cardGray: () => 'bg-gray-100',
  cardGrayInteractive: () => 'transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200',
  cardPrimary: () => 'bg-primary-500',
  cardPrimaryInteractive: () =>
    'transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600',
  // drop
  dropCardRadius: () => '-md',
  // overlay
  overlayCardRadius: () => '-2xl',
  // components
  slide: () => 'group',
  loader: () => 'xt-loader absolute inset-0 rounded-inherit overflow-hidden',
  spinner: () => 'xt-spinner absolute inset-0 m-auto',
  filler: () => 'xt-filler absolute inset-0 m-auto',
  // form
  checkLabel: () => 'cursor-pointer inline-flex items-baseline',
  checkContent: () => 'ml-4',
  checkGray: () => 'text-primary-500 bg-gray-200 border border-transparent transition-all',
  checkPrimary: () => 'text-primary-600 bg-primary-800 bg-opacity-25 border border-transparent transition-all',
  checkRadius: () => 'rounded-md',
  radioGray: () => 'text-primary-500 bg-gray-200 border border-transparent transition-all',
  radioPrimary: () => 'text-primary-600 bg-primary-800 bg-opacity-25 border border-transparent transition-all',
  radioRadius: () => 'rounded-full',
  switchGray: () => 'text-primary-500 bg-gray-200 border border-transparent transition-all',
  switchPrimary: () => 'text-primary-600 bg-primary-800 bg-opacity-25 border border-transparent transition-all',
  switchRadius: () => 'rounded-full',
  inputGray: () =>
    'py-2.5 px-3.5 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none',
  inputPrimary: () =>
    'py-2.5 px-3.5 text-white placeholder-white placeholder-opacity-75 bg-primary-800 bg-opacity-25 transition focus:bg-opacity-50 focus:outline-none',
  inputUnderline: () =>
    'py-2.5 text-black placeholder-black placeholder-opacity-75 border-b-2 border-gray-100 bg-transparent transition focus:border-gray-200 focus:outline-none',
  labelGray: () => 'font-medium text-gray-700',
  labelPrimary: () => 'font-medium text-white',
  label: () => 'block', // no flex or tags inside have no space (e.g. links)
  input: () => 'block w-full',
  inputRadius: () => 'rounded-md',
  textarea: () => 'h-20 max-h-48',
  note: () => 'text-black text-opacity-50 text-xs leading-snug',
  // headers
  h1Display: () => {
    return `mt-10 mb-4 xt-my-auto font-black leading-tight tracking-tight normal-case text-4xl md:text-5xl md:leading-none lg:text-6xl lg:leading-none`
  },
  h1: () => {
    return `mt-10 mb-4 xt-my-auto font-bold leading-tight tracking-tight normal-case text-3xl md:text-4xl md:leading-none lg:text-5xl lg:leading-none`
  },
  h2: () => {
    return `mt-10 mb-4 xt-my-auto font-bold leading-tight tracking-tight normal-case text-2xl md:text-3xl md:leading-none lg:text-4xl lg:leading-none`
  },
  h3: () => {
    return `mt-10 mb-4 xt-my-auto font-bold leading-tight tracking-tight normal-case text-xl md:text-2xl md:leading-none lg:text-3xl lg:leading-none`
  },
  h4: () => {
    return `mt-5 mb-3 xt-my-auto font-bold leading-tight tracking-tight normal-case text-xl lg:text-2xl lg:leading-tight`
  },
  h5: () => {
    return `mt-5 mb-3 xt-my-auto font-bold leading-tight tracking-tight normal-case text-xl`
  },
  h6: () => {
    return `mt-5 mb-2 xt-my-auto font-bold leading-tight tracking-tight normal-case text-lg`
  },
  hBlock: () => {
    return `mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md font-bold leading-tight tracking-tight normal-case text-lg`
  },
  // icons
  iconX: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
  },
  iconSearch: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`
  },
  iconArrowLeft: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`
  },
  iconArrowRight: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`
  },
  iconArrowUp: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`
  },
  iconArrowDown: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>`
  },
  iconChevronLeft: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>`
  },
  iconChevronRight: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`
  },
  iconChevronUp: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>`
  },
  iconChevronDown: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`
  },
  iconLocate: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`
  },
  iconTwitter: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>`
  },
  iconPackage: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`
  },
  iconGithub: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`
  },
  iconLink: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`
  },
  iconCode: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
  },
  iconMaximize: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>`
  },
  iconExternal: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`
  },
  iconCopy: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`
  },
  iconEdit: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`
  },
  // other
  svgSpinner: ({ classes, dimension = 120, radius = 100, dash = 628 } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg viewBox="0 0 ${dimension * 2} ${
      dimension * 2
    }" class="absolute" preserveAspectRatio="xMinYMin meet"><circle class="stroke-current origin-center opacity-25" fill="none" stroke-width="30" cx="${dimension}" cy="${dimension}" r="${radius}" stroke-dasharray="${dash}" stroke-dashoffset="0" pathLength="${dash}"/></svg><svg viewBox="0 0 ${
      dimension * 2
    } ${
      dimension * 2
    }"><circle class="stroke-current origin-center relative${classes}" fill="none" stroke-width="30" cx="${dimension}" cy="${dimension}" r="${radius}" stroke-dasharray="${dash}" stroke-dashoffset="${dash}" pathLength="${dash}"/></svg>`
  },
}
