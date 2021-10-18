import { Xt } from 'xtendui'

/* mountVideoAutoplayLazy */

const mountVideoAutoplayLazy = ({ ref }) => {
  // vars

  const video = ref.querySelector('video[preload="none"]')
  let paused = true
  let playing = false
  let timeout

  // observer

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.intersectionRatio > 0 && paused) {
        clearTimeout(timeout)
        // fix safari doesn't play video when changing page
        timeout = setTimeout(() => {
          paused = false
          playing = video.play()
        }, 50)
      } else if (entry.intersectionRatio == 0 && !paused) {
        paused = true
        playing.then(() => {
          // play is async need to check it before pause
          video.pause()
          playing = false
        })
        clearTimeout(timeout)
      }
    }
  })

  observer.observe(video)

  // unmount

  return () => {
    clearTimeout(timeout)
    observer.disconnect()
  }
}

/* mount */

Xt.mount({
  matches: '.demo--media-video-autoplay-lazy',
  mount: ({ ref }) => {
    const unmountVideoAutoplayLazy = mountVideoAutoplayLazy({ ref })

    // unmount

    return () => {
      unmountVideoAutoplayLazy()
    }
  },
})
