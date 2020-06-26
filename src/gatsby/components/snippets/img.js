// const img = require('components/snippets/img').default
// ${img({ classes: 'media-cover', ratio: '37.5%' })}

export default ({ classes = null, ratio = null, height = null, loading = 'lazy' }) => {
  return `<div class="media-container"${
    ratio ? ' style="padding-bottom:' + ratio + '"' : height ? ' style="height:' + height + '"' : ''
  }><div class="media-inner"><img class="media${classes ? ' ' + classes : ''}" src="/img.svg" loading="${loading}" alt=""/></div></div>`
}

export const alt = ({ classes = null, ratio = null, height = null, loading = 'lazy' }) => {
  return `<div class="media-container"${
    ratio ? ' style="padding-bottom:' + ratio + '"' : height ? ' style="height:' + height + '"' : ''
  }><div class="media-inner"><img class="media${classes ? ' ' + classes : ''}" src="/img-alt.svg" loading="${loading}" alt=""/></div></div>`
}
