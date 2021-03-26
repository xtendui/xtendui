import { Xt } from '../xt.js'

Xt.ready(() => {
  // eslint-disable-next-line no-console
  console.debug(
    '%cXtend usability log activated, to deactivate remove xtendui/src/core/usability',
    'font-weight:bold; color: white; background-color: #0078ff; padding: 6px 10px;'
  )
  // images
  Xt.mount.push({
    ignore: false,
    matches: 'img[src]:not([src^="data:"])',
    mount: ({ object }) => {
      // loading
      const loading = object.getAttribute('loading')
      if (!loading) {
        console.warn('Xtend usability detected an "image" without "loading" attribute', object)
      }
      // alt
      const alt = object.getAttribute('alt')
      if (!alt && alt !== '') {
        console.warn('Xtend usability detected an "image" without "alt" attribute', object)
      }
    },
  })
  // input
  Xt.mount.push({
    ignore: false,
    matches: 'input:not([type="hidden"]), select, textarea',
    mount: ({ object }) => {
      // label
      const labels = object.labels
      const label = object.getAttribute('aria-label') || object.getAttribute('aria-labelledby')
      if (!labels.length && (!label || label === '')) {
        console.warn('Xtend usability detected an "input" without "label" or "aria-label" or "aria-labelledby"', object)
      }
    },
  })
  // links
  Xt.mount.push({
    ignore: false,
    matches: 'a[href]',
    mount: ({ object }) => {
      // title
      const text = object.textContent.trim()
      const title = object.title
      const label = object.getAttribute('aria-label') || object.getAttribute('aria-labelledby')
      if (!text.length && (!title || title === '') && (!label || label === '')) {
        console.warn(
          'Xtend usability detected a "link" without "textContent" or "title" or "aria-label" or "aria-labelledby"',
          object
        )
      }
      // target
      const target = object.getAttribute('target')
      if (target && target.toLowerCase() === '_blank') {
        if (object.hostname.length && location.hostname !== object.hostname) {
          const rel = object.getAttribute('rel')
          if (
            !rel ||
            rel === '' ||
            (!rel.toLowerCase().indexOf('noopener') && !rel.toLowerCase().indexOf('noreferrer'))
          ) {
            console.warn(
              'Xtend usability detected a "link" with target="_blank" without rel="noopener" or rel="noreferrer"',
              object
            )
          }
        }
      }
    },
  })
})
