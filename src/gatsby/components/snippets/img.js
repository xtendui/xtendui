// const img = require('components/snippets/img').default
// ${img({ classes: 'media-cover', ratio: '37.5%' })}

export default ({ classes = '', ratio = null, height = null, loading = 'lazy' }) => {
  return `<div class="media-container"${
    ratio ? ' style="padding-bottom:' + ratio + '"' : height ? ' style="height:' + height + '"' : ''
  }><div class="media-inner"><img class="media ${classes}" src="/img.svg" loading="${loading}" alt=""/></div></div>`
}

export const alt = ({ classes = '', ratio = null, height = null, loading = 'lazy' }) => {
  return `<div class="media-container"${
    ratio ? ' style="padding-bottom:' + ratio + '"' : height ? ' style="height:' + height + '"' : ''
  }><div class="media-inner"><img class="media ${classes}" src="/img-alt.svg" loading="${loading}" alt=""/></div></div>`
}

// src="https://source.unsplash.com/random/1200x1200?sig=${Math.random()}" onerror="this.onerror=null; this.src='/img-alt.svg';"
