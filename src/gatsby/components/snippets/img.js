// const img = require('components/snippets/img').default
// ${img({})}

export default function({ classes = '', width = '400', height = '150' }) {
  return `<img class="${classes}" src="https://picsum.photos/${width}/${height}" alt="" loading="lazy"/>`
}
