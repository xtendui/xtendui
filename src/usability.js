/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/xtendui/xtendui/blob/beta/LICENSE)
 */

import { Xt } from './xt'

Xt.usabilityIgnore = '.sf-toolbar, .gm-style'

Xt.ready(() => {
  // eslint-disable-next-line no-console
  console.debug(
    '%cXtend usability log activated, to deactivate remove xtendui/components/usability',
    'font-weight:bold; color: white; background-color: #0078ff; padding: 6px 10px;'
  )
  // images
  Xt.mount({
    ignore: false,
    matches: 'img[src]:not([src^="data:"])',
    mount: ({ ref }) => {
      if (ref.closest(Xt.usabilityIgnore)) return
      // loading
      const loading = ref.getAttribute('loading')
      if (!loading) {
        console.warn('Xtend usability detected an "image" without "loading" attribute', ref)
      }
      // alt
      const alt = ref.getAttribute('alt')
      if (!alt && alt !== '') {
        console.warn('Xtend usability detected an "image" without "alt" attribute', ref)
      }
    },
  })
  // input
  Xt.mount({
    ignore: false,
    matches: 'input:not([type="hidden"]), select, textarea',
    mount: ({ ref }) => {
      if (ref.closest(Xt.usabilityIgnore)) return
      // label
      const labels = ref.labels
      const label = ref.getAttribute('aria-label') || ref.getAttribute('aria-labelledby')
      if (!labels.length && (!label || label === '')) {
        console.warn('Xtend usability detected an "input" without "label" or "aria-label" or "aria-labelledby"', ref)
      }
    },
  })
  // links
  Xt.mount({
    ignore: false,
    matches: 'a[href]',
    mount: ({ ref }) => {
      if (ref.closest(Xt.usabilityIgnore)) return
      // title
      const text = ref.textContent.trim()
      const title = ref.title
      const label = ref.getAttribute('aria-label') || ref.getAttribute('aria-labelledby')
      if (!text.length && (!title || title === '') && (!label || label === '')) {
        console.warn(
          'Xtend usability detected a "link" without "textContent" or "title" or "aria-label" or "aria-labelledby"',
          ref
        )
      }
      // target
      const target = ref.getAttribute('target')
      if (target && target.toLowerCase() === '_blank') {
        if (ref.hostname.length && location.hostname !== ref.hostname) {
          const rel = ref.getAttribute('rel')
          if (
            !rel ||
            rel === '' ||
            (!rel.toLowerCase().indexOf('noopener') && !rel.toLowerCase().indexOf('noreferrer'))
          ) {
            console.warn(
              'Xtend usability detected a "link" with target="_blank" without rel="noopener" or rel="noreferrer"',
              ref
            )
          }
        }
      }
    },
  })
})
