import { Xt } from 'xtendui'

/* mountVideosAutoplayLazy */

const mountVideosAutoplayLazy = ({ ref }) => {
  // mount granularly

  Xt.mount({
    root: ref,
    matches: 'video[preload="none"]',
    mount: ({ ref }) => {
      return mountVideoAutoplayLazy({ ref })
    },
  })

  // unmount

  return () => {}
}

/* mountVideoAutoplayLazy */

const mountVideoAutoplayLazy = ({ ref }) => {
  // vars

  const video = ref

  // observer

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.intersectionRatio > 0 && video.paused) {
        video.play()
      } else if (entry.intersectionRatio == 0 && !video.paused) {
        video.pause()
      }
    }
  })
  observer.observe(video)

  // unmount

  return () => {
    observer.disconnect()
  }
}

/* mount */

Xt.mount({
  matches: '.demo--media-video-autoplay-lazy',
  mount: ({ ref }) => {
    const unmountVideosAutoplayLazy = mountVideosAutoplayLazy({ ref })

    // unmount

    return () => {
      unmountVideosAutoplayLazy()
    }
  },
})
