// const iconArrowLeft = require('components/snippets/icons').iconClose
// ${iconArrowLeft({ classes: 'icon-md' })}

export const iconClose = ({ classes = null } = {}) => {
  return `<svg ${
    classes ? 'class="' + classes + '" ' : ''
  } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>`
}

export const iconSearch = ({ classes = null } = {}) => {
  return `<svg ${
    classes ? 'class="' + classes + '" ' : ''
  } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>`
}

export const iconArrowLeft = ({ classes = null } = {}) => {
  return `<svg ${
    classes ? 'class="' + classes + '" ' : ''
  } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>`
}

export const iconArrowRight = ({ classes = null } = {}) => {
  return `<svg ${
    classes ? 'class="' + classes + '" ' : ''
  } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>`
}

export const iconChevronLeft = ({ classes = null } = {}) => {
  return `<svg ${
    classes ? 'class="' + classes + '" ' : ''
  } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>`
}

export const iconChevronRight = ({ classes = null } = {}) => {
  return `<svg ${
    classes ? 'class="' + classes + '" ' : ''
  } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>`
}
