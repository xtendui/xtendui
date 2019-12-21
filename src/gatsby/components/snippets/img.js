// const img = require('components/snippets/img').default
// ${img({ classes: 'media-cover' })}

export default function({ classes = '', ratio = '37.5%' }) {
  return `<div class="media-container" style="padding-bottom: ${ratio};"><div class="media-inner"><img class="media ${classes}" src="/img.svg" alt="" loading="lazy"/></div></div>`
}
