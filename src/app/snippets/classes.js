export const classes = {
  textDefault: () => 'text-gray-900 xt-links-default',
  textInverse: () => 'text-white xt-links-inverse',
  // special
  bgBlur: () => 'backdrop-filter backdrop-blur-sm backdrop-saturate-50',
  docsFloat: () =>
    'rounded-md transition ease-in-out hover:ease-out hover:text-white hover:bg-primary-500 hover:shadow-lg hover:-translate-y-1 active:ease-out active:text-white active:bg-primary-500 active:shadow-md active:translate-y-0 on:ease-out on:text-white on:bg-primary-500 on:shadow-md on:translate-y-0',
  cardToggle: () => 'bg-white rounded-full text-13 py-2 px-3 font-medium shadow-xs',
  buttonSlider: () =>
    'p-2 min-w-[1.25rem] h-5 rounded-full text-11 text-gray-900 font-medium leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all',
  buttonCode: () =>
    'text-opacity-[90%] font-medium leading-tight tracking-normal capitalize rounded-md border-gray-100 bg-gray-100 transition hover:text-opacity-100 in:border-white in:bg-white in:text-opacity-100',
  buttonCodeWhite: () =>
    'font-medium leading-tight tracking-normal capitalize rounded-md bg-white bg-opacity-0 transition hover:bg-opacity-10 in:bg-opacity-20',
  // button
  buttonRadius: () => '-md',
  buttonXs: () => 'py-1.5 px-2 text-12',
  buttonSm: () => 'py-2 px-3 text-13',
  buttonMd: () => 'py-2.5 px-3.5 text-sm',
  buttonLg: () => 'py-3 px-4 text-base',
  buttonLower: () => 'font-medium leading-snug',
  buttonUpper: () => 'font-medium leading-snug tracking-wider uppercase',
  buttonGray: () => 'text-gray-900 bg-gray-100',
  buttonGrayAnim: () => 'transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200',
  buttonGrayAnimGroup: () => 'group-hover:bg-gray-200 group-active:bg-gray-300 group-on:bg-gray-200',
  buttonPrimary: () => 'text-white bg-primary-500',
  buttonPrimaryAnim: () =>
    'transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600',
  buttonPrimaryAnimGroup: () =>
    'group-hover:text-white group-hover:bg-primary-600 group-active:text-white group-active:bg-primary-700 group-on:text-white group-on:bg-primary-600',
  buttonBorderGray: () =>
    'text-gray-900 border-2 border-gray-200 hover:border-transparent active:border-transparent on:border-transparent',
  buttonTextAnim: () =>
    'transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500',
  buttonRing: () => 'ring-2 ring-primary-200',
  buttonRingAnim: () => 'transition hover:ring-primary-300 active:ring-primary-400 on:ring-primary-300',
  buttonCloseOutsideAnim: () => 'transition md:text-white md:bg-primary-500 md:hover:bg-primary-600',
  // card
  cardRadius: () => '-2xl',
  cardSm: () => 'p-6 sm:p-8 text-sm',
  cardMd: () => 'p-7 sm:p-9 text-base',
  cardLg: () => 'p-8 sm:p-10 text-base sm:text-lg',
  cardBlack: () => 'bg-black',
  cardWhite: () => 'bg-white',
  cardWhiteAccent: () => 'bg-primary-100',
  cardGray: () => 'bg-gray-100',
  cardGrayInteractive: () => 'transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200',
  cardPrimary: () => 'bg-primary-500',
  cardPrimaryAccent: () => 'bg-primary-600',
  cardPrimaryInteractive: () =>
    'transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600',
  cardSlideRadius: () => '-md',
  cardSlideDesign: () => 'bg-gray-100 border-2 border-transparent transition group-in:border-gray-200',
  cardSlideContent: () => 'p-8 text-base text-center',
  // group
  groupMd: () => 'p-3',
  groupButtonRadius: () => '-md',
  groupButtonSm: () => 'py-1 px-2.5 text-13',
  groupButtonMd: () => 'py-1.5 px-3 text-sm',
  groupButtonLg: () => 'py-2 px-3.5 text-base',
  groupButton: () => 'flex-auto font-medium leading-snug',
  groupButtonGray: () => 'text-gray-900 bg-gray-100',
  groupButtonPrimary: () => 'text-white bg-primary-500',
  // tooltip
  tooltipRadius: () => '-md',
  tooltipShadow: () => 'shadow-md',
  tooltipSm: () => 'py-1 px-2 text-11',
  tooltipMd: () => 'py-2 px-2.5 text-13',
  tooltipLg: () => 'py-2.5 px-4 text-base',
  tooltipText: () => 'font-medium',
  // drop
  dropRadius: () => '-md',
  dropShadow: () => 'shadow-lg',
  // overlay
  overlayRadius: () => '-2xl',
  overlayShadow: () => 'shadow-xl',
  // badge
  badgeRadius: () => '-xs',
  badgeSm: () => 'py-2 px-2.5 text-11',
  badgeMd: () => 'py-3 px-3.5 text-13',
  badgeLg: () => 'py-3.5 px-4 text-base',
  badgeGray: () => 'text-gray-900 font-medium leading-snug tracking-wider uppercase bg-gray-100',
  badgePrimary: () => 'text-white font-medium leading-snug tracking-wider uppercase bg-primary-500',
  // components
  slide: () => 'group',
  loader: () => 'xt-loader absolute z-content inset-0 rounded-inherit overflow-hidden',
  spinner: () => 'xt-spinner absolute inset-0 m-auto',
  filler: () => 'xt-filler absolute inset-0 m-auto',
  // form
  checkLabel: () => 'cursor-pointer inline-flex items-baseline',
  checkContent: () => 'ml-4',
  checkGray: () => 'bg-gray-200 border border-transparent transition checked:bg-primary-500',
  checkPrimary: () => 'bg-primary-800 bg-opacity-25 border border-transparent transition checked:bg-primary-600',
  checkRadius: () => 'rounded-md',
  radioGray: () => 'bg-gray-200 border border-transparent transition checked:bg-primary-500',
  radioPrimary: () => 'bg-primary-800 bg-opacity-25 border border-transparent transition checked:bg-primary-600',
  radioRadius: () => 'rounded-full',
  switchGray: () => 'bg-gray-200 border border-transparent transition-all checked:bg-primary-500',
  switchPrimary: () => 'bg-primary-800 bg-opacity-25 border border-transparent transition-all checked:bg-primary-600',
  switchRadius: () => 'rounded-full',
  inputGray: () =>
    'py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-hidden',
  inputPrimary: () =>
    'py-2.5 px-3.5 text-white placeholder-white placeholder-opacity-75 bg-primary-800 bg-opacity-25 transition focus:bg-opacity-50 focus:outline-hidden',
  inputUnderline: () =>
    'py-2.5 text-gray-900 placeholder-black placeholder-opacity-75 border-b-2 border-gray-100 bg-transparent transition focus:border-gray-200 focus:outline-hidden',
  labelGray: () => 'font-medium text-gray-700',
  labelPrimary: () => 'font-medium text-white',
  label: () => 'block', // no flex or tags inside have no space (e.g. links)
  input: () => 'block w-full',
  inputRadius: () => 'rounded-md',
  textarea: () => 'h-20 max-h-48',
  note: () => 'text-gray-900 text-opacity-[90%] text-13 leading-snug',
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
    return `mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center`
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
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon class="st0" points="21.3,21.1 9.9,2.9 2.7,2.9 14.1,21.1 "/><line class="st0" x1="2.7" y1="21.1" x2="9.9" y2="14.5"/><line class="st0" x1="14.1" y1="9.5" x2="21.3" y2="2.9"/></svg>`
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
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`
  },
  iconDownload: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`
  },
  iconFile: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>`
  },
  iconFiletext: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`
  },
  iconMail: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`
  },
  iconPhone: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`
  },
  iconUsers: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
  },
  iconInfo: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`
  },
  iconAlerttriangle: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
  },
  iconCreditcard: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>`
  },
  iconGlobe: ({ classes } = {}) => {
    classes = classes ? `${classes}` : ''
    classes = classes.search('xt-icon') !== -1 ? classes : `xt-icon ${classes}`
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
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
