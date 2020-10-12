// const iconArrowLeft = require('components/snippets/icons').iconClose
// ${iconArrowLeft({ classes: 'icon-lg' })}

export const iconClose = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon${classes}" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>`
}

export const iconSearch = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon${classes}" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="10" cy="10" r="7" /><line x1="21" y1="21" x2="15" y2="15" /></svg>`
}

export const iconArrowLeft = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon${classes}" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="5" y1="12" x2="19" y2="12" /><line x1="5" y1="12" x2="11" y2="18" /><line x1="5" y1="12" x2="11" y2="6" /></svg>`
}

export const iconArrowRight = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon${classes}" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="5" y1="12" x2="19" y2="12" /><line x1="13" y1="18" x2="19" y2="12" /><line x1="13" y1="6" x2="19" y2="12" /></svg>`
}

export const iconChevronLeft = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon${classes}" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18" /></svg>`
}

export const iconChevronRight = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon${classes}" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="9 6 15 12 9 18" /></svg>`
}

export const iconLocate = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon${classes}" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="8" /><line x1="12" y1="2" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="22" /><line x1="20" y1="12" x2="22" y2="12" /><line x1="2" y1="12" x2="4" y2="12" /></>`
}

export const iconPackage = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon${classes}" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"/><line x1="12" y1="12" x2="20" y2="7.5"/><line x1="12" y1="12" x2="12" y2="21"/><line x1="12" y1="12" x2="4" y2="7.5"/><line x1="16" y1="5.25" x2="8" y2="9.75"/></svg>`
}

export const iconGithub = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon${classes}" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>`
}

export const iconLink = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon${classes}" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"/><path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"/></svg>`
}

export const iconCode = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon${classes}" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="7 8 3 12 7 16" /><polyline points="17 8 21 12 17 16" /><line x1="14" y1="4" x2="10" y2="20" /></svg>`
}

export const iconMaximize = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon${classes}" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8v-2a2 2 0 0 1 2 -2h2"/><path d="M4 16v2a2 2 0 0 0 2 2h2"/><path d="M16 4h2a2 2 0 0 1 2 2v2"/><path d="M16 20h2a2 2 0 0 0 2 -2v-2"/></svg>`
}

export const iconIframe = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon{classes}" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"/><line x1="10" y1="14" x2="20" y2="4"/><polyline points="15 4 20 4 20 9"/></svg>`
}

export const iconCopy = ({ classes = null } = {}) => {
  classes = classes ? ' ' + classes : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" class="icon{classes}" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" /></svg>`
}
