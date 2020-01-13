// const img = require('components/snippets/img').default
// ${img({ classes: 'media-cover', ratio: '37.5%' })}

export default ({ classes = '', ratio = null, height = null }) => {
  return `<div class="media-container" style="
    ${ratio ? 'padding-bottom:' + ratio : ''}
    ${height ? 'height:' + height : ''}
  "><div class="media-inner"><img class="media ${classes}" src="/img.svg" alt="" loading="lazy"/></div></div>`
}
