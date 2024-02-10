import { Xt } from 'xtendui'

Xt.mount({
  matches: '.demo--media-video-matches video source[data-src]',
  mount: ({ ref }) => {
    // vars

    const source = ref
    const video = source.closest('video')

    // resize

    const resize = () => {
      const src = video.src
      let srcNew = false
      const sources = video.querySelectorAll('source[data-src]')
      for (const source of sources) {
        const media = source.getAttribute('media')
        if (media && matchMedia(media).matches) {
          srcNew = source.getAttribute('data-src')
        }
      }
      if (srcNew) {
        if (src.indexOf(srcNew) === -1) {
          video.src = srcNew
        }
      } else {
        const srcDefault = video.querySelector('source[src]')?.getAttribute('src')
        if (srcDefault && src.indexOf(srcDefault) === -1) {
          video.src = srcDefault
        }
      }
    }

    addEventListener('resize.xt', resize)
    resize()

    // unmount

    return () => {
      removeEventListener('resize.xt', resize)
    }
  },
})
