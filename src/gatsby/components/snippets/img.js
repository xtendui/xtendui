// const img = require('components/snippets/img').default
// ${img({ classes: 'media-cover', ratio: '37.5%' })}

export default ({ classes = '', ratio = null, height = null }) => {
  // prettier-ignore
  return `<div class="media-container"${ ratio ? ' style="padding-bottom:' + ratio + '"' : height ? ' style="height:' + height + '"' : '' }><div class="media-inner"><img class="media ${classes}" src="/img.svg" alt="" loading="lazy"/></div></div>`
}
