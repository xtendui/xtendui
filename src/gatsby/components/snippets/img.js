// const img = require('components/snippets/img').default
// ${img({ classes: 'media-cover', ratio: '37.5%' })}

export default ({ classes = null, ratio = null, height = null, style = null, loading = 'lazy' }) => {
  return `<div class="media-container"${ratio || height || style ? ' style="' : ''}${ratio ? 'padding-bottom:' + ratio + ';' : ''}${
    height ? 'height:' + height + ';' : ''
  }${style ? ' ' + style + ';' : ''}${ratio || height || style ? '"' : ''}><div class="media-inner"><img class="media${
    classes ? ' ' + classes : ''
  }" src="/img.svg" loading="${loading}" alt=""/></div></div>`
}

export const alt = ({ classes = null, ratio = null, height = null, style = null, loading = 'lazy' }) => {
  return `<div class="media-container"${ratio || height || style ? ' style="' : ''}${ratio ? 'padding-bottom:' + ratio + ';' : ''}${
    height ? 'height:' + height + ';' : ''
  }${style ? ' ' + style + ';' : ''}${ratio || height || style ? '"' : ''}><div class="media-inner"><img class="media${
    classes ? ' ' + classes : ''
  }" src="/img-alt.svg" loading="${loading}" alt=""/></div></div>`
}

export const ratio = ({ classes = null, ratio = null, height = null, style = null, loading = 'lazy' }) => {
  return `<div class="media-container"${ratio || height || style ? ' style="' : ''}${ratio ? 'padding-bottom:' + ratio + ';' : ''}${
    height ? 'height:' + height + ';' : ''
  }${style ? ' ' + style + ';' : ''}${ratio || height || style ? '"' : ''}><div class="media-inner"><img class="media${
    classes ? ' ' + classes : ''
  }" src="/img-ratio.svg" loading="${loading}" alt=""/></div></div>`
}
