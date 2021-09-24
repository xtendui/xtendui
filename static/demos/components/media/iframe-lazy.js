import { Xt } from 'xtendui'

/* mountIframesLazy */

const mountIframesLazy = ({ ref }) => {
  // mount granularly

  Xt.mount({
    root: ref,
    matches: 'iframe[data-src*="youtube"]',
    mount: ({ ref }) => {
      return mountIframeLazy({ ref })
    },
  })

  // unmount

  return () => {}
}

/* mountIframeLazy */

const mountIframeLazy = ({ ref }) => {
  // vars

  const iframe = ref
  const src = iframe.getAttribute('data-src')
  const container = iframe.parentNode

  // click

  const click = () => {
    iframe.setAttribute('src', src)
    Xt.on({ el: container, duration: 500 })
  }

  container.addEventListener('click', click)

  // unmount

  return () => {}
}

/* mount */

Xt.mount({
  matches: '.demo--media-iframe-lazy',
  mount: ({ ref }) => {
    const unmountIframesLazy = mountIframesLazy({ ref })

    // unmount

    return () => {
      unmountIframesLazy()
    }
  },
})
