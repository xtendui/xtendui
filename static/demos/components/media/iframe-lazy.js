import { Xt } from 'xtendui'

Xt.mount({
  matches: '.demo--media-iframe-lazy',
  mount: ({ ref }) => {
    const unmountIframeLazy = mountIframeLazy({ ref })

    // unmount

    return () => {
      unmountIframeLazy()
    }
  },
})

/* mountIframeLazy */

const mountIframeLazy = ({ ref }) => {
  // vars

  const iframe = ref.querySelector('iframe[data-src*="youtube"]')
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
