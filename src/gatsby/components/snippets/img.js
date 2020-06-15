// const img = require('components/snippets/img').default
// ${img({ classes: 'media-cover', ratio: '37.5%' })}

export default ({ classes = '', ratio = null, height = null }) => {
  return `<div class="media-container ${classes}"${
    ratio ? ' style="padding-bottom:' + ratio + '"' : height ? ' style="height:' + height + '"' : ''
  }><div class="media-inner"><img class="media" src="/img.svg" loading="lazy" alt=""/></div></div>`
}

export const alt = ({ classes = '', ratio = null, height = null }) => {
  return `<div class="media-container ${classes}"${
    ratio ? ' style="padding-bottom:' + ratio + '"' : height ? ' style="height:' + height + '"' : ''
  }><div class="media-inner"><img class="media" src="/img-alt.svg" loading="lazy" alt=""/></div></div>`
}

// src="https://source.unsplash.com/random/1200x1200?sig=${Math.random()}" onerror="this.onerror=null; this.src='/img-alt.svg';"
