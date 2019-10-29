// USAGE:
// const spinner = require('components/snippets/spinner').default
// ${img({})}

export default function({ classes = '', width = '400', height = '150' }) {
  return `<img class="${classes}" src="https://picsum.photos/${width}/${height}" alt=""/>`
}
