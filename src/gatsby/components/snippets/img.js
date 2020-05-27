// const img = require('components/snippets/img').default
// ${img({ classes: 'media-cover', ratio: '37.5%' })}

export const alt = ({ classes = '', ratio = null, height = null }) => {
  return `<div class="media-container"${
    ratio ? ' style="padding-bottom:' + ratio + '"' : height ? ' style="height:' + height + '"' : ''
  }><div class="media-inner"><img class="media ${classes}" src="/img-alt.svg" alt=""/></div></div>`
}

export default ({ classes = '', ratio = null, height = null }) => {
  return `<div class="media-container"${
    ratio ? ' style="padding-bottom:' + ratio + '"' : height ? ' style="height:' + height + '"' : ''
  }><div class="media-inner"><img class="media ${classes}" src="/img.svg" alt=""/></div></div>`
}
