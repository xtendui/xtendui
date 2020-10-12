// const iconArrowLeft = require('components/snippets/icons').iconClose
// ${iconArrowLeft({ classes: 'icon-md' })}

export const iconClose = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon${classes} icon-tabler icon-tabler-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>`
}

export const iconSearch = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon${classes} icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="10" cy="10" r="7" /><line x1="21" y1="21" x2="15" y2="15" /></svg>`
}

export const iconArrowLeft = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon${classes} icon-tabler icon-tabler-arrow-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00BCD4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="5" y1="12" x2="19" y2="12" /><line x1="5" y1="12" x2="11" y2="18" /><line x1="5" y1="12" x2="11" y2="6" /></svg>`
}

export const iconArrowRight = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon${classes} icon-tabler icon-tabler-arrow-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00BCD4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="5" y1="12" x2="19" y2="12" /><line x1="13" y1="18" x2="19" y2="12" /><line x1="13" y1="6" x2="19" y2="12" /></svg>`
}

export const iconChevronLeft = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon${classes} icon-tabler icon-tabler-chevron-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00BCD4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18" /></svg>`
}

export const iconChevronRight = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon${classes} icon-tabler icon-tabler-chevron-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00BCD4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="9 6 15 12 9 18" /></svg>`
}

export const iconLocate = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon${classes} icon-tabler icon-tabler-current-location" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00BCD4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="8" /><line x1="12" y1="2" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="22" /><line x1="20" y1="12" x2="22" y2="12" /><line x1="2" y1="12" x2="4" y2="12" /></>`
}
