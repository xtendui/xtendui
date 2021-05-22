export const classes = {
  // size
  badgeSm: () => 'text-3xs py-1.5 px-2.5',
  badgeMd: () => 'text-xs py-2.5 px-3.5',
  badgeLg: () => 'text-base py-3 px-4',
  badgeRadius: () => 'rounded-xs',
  buttonSm: () => 'text-3xs py-1.5 px-2.5',
  buttonMd: () => 'text-xs py-2.5 px-3.5',
  buttonLg: () => 'text-base py-3 px-4',
  buttonSmDrop: () => 'text-3xs py-1 px-5',
  buttonMdDrop: () => 'text-2xs py-2 px-6',
  buttonLgDrop: () => 'text-xs py-2.5 px-7',
  buttonRadius: () => 'rounded-md',
  tooltipSm: () => 'text-3xs py-1 px-2',
  tooltipMd: () => 'text-xs py-2 px-3.5',
  tooltipLg: () => 'text-base py-2.5 px-4',
  tooltipRadius: () => 'rounded-sm',
  cardSm: () => 'text-sm py-6 px-7',
  cardMd: () => 'text-base py-8 px-9',
  cardLg: () => 'text-base py-8 px-9 md:text-lg md:py-9 md:px-10',
  cardRadius: () => 'rounded-md',
  // variant
  badgeDefaultInteractive: () =>
    'text-black font-semibold leading-snug tracking-wider uppercase bg-gray-400 transition hover:bg-gray-500 active:bg-gray-600 on:bg-gray-600',
  badgePrimaryInteractive: () =>
    'text-white font-semibold leading-snug tracking-wider uppercase bg-primary-600 transition hover:bg-primary-700 active:bg-primary-800 on:bg-primary-800',
  badgeDefault: () => 'text-black font-semibold leading-snug tracking-wider uppercase bg-gray-400',
  badgePrimary: () => 'text-white font-semibold leading-snug tracking-wider uppercase bg-primary-600',
  buttonCloseOutside: () => 'transition md:text-white md:bg-primary-500 md:hover:bg-primary-600',
  buttonDefaultDrop: () =>
    'w-full justify-start text-left text-black font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75',
  buttonDefaultGroup: () =>
    'text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 group-hover:bg-gray-400',
  buttonDefault: () =>
    'text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500',
  buttonPrimaryDrop: () =>
    'w-full justify-start text-left text-white font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75',
  buttonPrimaryGroup: () =>
    'text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 group-hover:bg-primary-600',
  buttonPrimary: () =>
    'text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700',
  buttonText: () =>
    'font-sans font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-60 active:text-opacity-100 on:text-opacity-100',
  cardBlack: () => 'font-semibold text-white xt-links-inverse bg-black',
  cardDefaultFull: () => 'text-black xt-links-default',
  cardDefaultInteractive: () =>
    'text-black xt-links-default transform transition bg-gray-200 hover:bg-gray-300 on:bg-gray-400',
  cardDefaultFullInteractive: () => 'text-black xt-links-default transform transition hover:bg-gray-200 on:bg-gray-40',
  cardDefault: () => 'text-black xt-links-default bg-gray-200',
  cardPrimaryFull: () => 'text-primary-600',
  cardPrimaryInteractive: () =>
    'text-white xt-links-inverse transform transition bg-primary-500 hover:bg-primary-600 on:bg-primary-600',
  cardPrimaryFullInteractive: () =>
    'text-black xt-links-default transform transition hover:text-white hover:bg-primary-500 on:bg-primary-600',
  cardPrimary: () => 'text-white xt-links-inverse bg-primary-500',
  cardToggle: () => 'text-sm p-6 text-black xt-links-default bg-gray-200',
  cardWhite: () => 'text-black xt-links-default bg-white',
  cardSlide: () =>
    'text-base p-8 text-center text-black xt-links-default bg-gray-200 border-2 border-transparent transition group-in:border-gray-400',
  // components
  slide: () => 'group',
  loader: () => 'xt-loader absolute inset-0 rounded-inherit overflow-hidden',
  spinner: () => 'xt-spinner absolute inset-0 m-auto',
  filler: () => 'xt-filler absolute inset-0 m-auto',
  // form
  checkLabel: () => 'cursor-pointer inline-flex items-baseline',
  checkContent: () => 'ml-4',
  checkDefault: () => 'text-primary-500 bg-gray-300 transition-all',
  checkPrimary: () => 'text-primary-600 bg-black bg-opacity-25 transition-all',
  checkRadius: () => 'rounded-md',
  radioDefault: () => 'text-primary-500 bg-gray-300 transition-all',
  radioPrimary: () => 'text-primary-600 bg-black bg-opacity-25 transition-all',
  radioRadius: () => 'rounded-full',
  switchDefault: () => 'text-primary-500 bg-gray-300 transition-all',
  switchPrimary: () => 'text-primary-600 bg-black bg-opacity-25 transition-all',
  switchRadius: () => 'rounded-full',
  inputDefault: () =>
    'py-2 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-300 transition focus:bg-gray-500 focus:outline-none',
  inputPrimary: () =>
    'py-2 px-4 text-white placeholder-white placeholder-opacity-75 bg-black bg-opacity-25 transition focus:bg-opacity-50 focus:outline-none',
  inputUnderline: () =>
    'py-2 text-black placeholder-black placeholder-opacity-75 border-b-2 border-gray-300 bg-transparent transition focus:border-gray-400 focus:outline-none',
  labelDefault: () => 'font-semibold text-gray-900',
  labelPrimary: () => 'font-semibold text-white',
  label: () => 'flex',
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
  iconX: ({ classes = null } = {}) => {
    classes = classes ? ` ${classes}` : ''
    return `<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
  },
  iconSearch: ({ classes = null } = {}) => {
    classes = classes ? ` ${classes}` : ''
    return `<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`
  },
  iconArrowLeft: ({ classes = null } = {}) => {
    classes = classes ? ` ${classes}` : ''
    return `<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`
  },
  iconArrowRight: ({ classes = null } = {}) => {
    classes = classes ? ` ${classes}` : ''
    return `<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`
  },
  iconArrowUp: ({ classes = null } = {}) => {
    classes = classes ? ` ${classes}` : ''
    return `<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`
  },
  iconArrowDown: ({ classes = null } = {}) => {
    classes = classes ? ` ${classes}` : ''
    return `<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>`
  },
  iconChevronLeft: ({ classes = null } = {}) => {
    classes = classes ? ` ${classes}` : ''
    return `<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>`
  },
  iconChevronRight: ({ classes = null } = {}) => {
    classes = classes ? ` ${classes}` : ''
    return `<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`
  },
  iconChevronUp: ({ classes = null } = {}) => {
    classes = classes ? ` ${classes}` : ''
    return `<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>`
  },
  iconChevronDown: ({ classes = null } = {}) => {
    classes = classes ? ` ${classes}` : ''
    return `<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`
  },
  iconLocate: ({ classes = null } = {}) => {
    classes = classes ? ` ${classes}` : ''
    return `<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`
  },
  iconTwitter: ({ classes = null } = {}) => {
    classes = classes ? ` ${classes}` : ''
    return `<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>`
  },
  iconPackage: ({ classes = null } = {}) => {
    classes = classes ? ` ${classes}` : ''
    return `<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`
  },
  iconGithub: ({ classes = null } = {}) => {
    classes = classes ? ` ${classes}` : ''
    return `<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`
  },
  iconLink: ({ classes = null } = {}) => {
    classes = classes ? ` ${classes}` : ''
    return `<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`
  },
  iconCode: ({ classes = null } = {}) => {
    classes = classes ? ` ${classes}` : ''
    return `<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
  },
  iconMaximize: ({ classes = null } = {}) => {
    classes = classes ? ` ${classes}` : ''
    return `<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>`
  },
  iconExternal: ({ classes = null } = {}) => {
    classes = classes ? ` ${classes}` : ''
    return `<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`
  },
  iconCopy: ({ classes = null } = {}) => {
    classes = classes ? ` ${classes}` : ''
    return `<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`
  },
  // other
  svgSpinner: ({ classes = null, dimension = 120, radius = 100, dash = 628 }) => {
    classes = classes ? ` ${classes}` : ''
    return `<svg viewBox="0 0 ${dimension * 2} ${
      dimension * 2
    }" class="absolute" preserveAspectRatio="xMinYMin meet"><circle class="stroke-current origin-center opacity-25" fill="none" stroke-width="30" cx="${dimension}" cy="${dimension}" r="${radius}" stroke-dasharray="${dash}" stroke-dashoffset="0" pathLength="${dash}"/></svg><svg viewBox="0 0 ${
      dimension * 2
    } ${
      dimension * 2
    }"><circle class="stroke-current origin-center relative${classes}" fill="none" stroke-width="30" cx="${dimension}" cy="${dimension}" r="${radius}" stroke-dasharray="${dash}" stroke-dashoffset="${dash}" pathLength="${dash}"/></svg>`
  },
}
