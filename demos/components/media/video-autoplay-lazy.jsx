import React, { useRef, useEffect } from 'react'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--media-video-autoPlay-lazy-react" ref={ref}>
      <div className="xt-media-container bg-gray-200 pb-[56.2%]">
        <video className="xt-media" poster="/placeholder-720.jpg" preload="none" muted playsInline loop>
          <source type="video/mp4" src="/placeholder-720.mp4" />
        </video>
      </div>
    </div>
  )
}

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
      } else if (entry.intersectionRatio == 0 && !paused && playing) {
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

const mount = ({ ref }) => {
  const unmountVideoAutoplayLazy = mountVideoAutoplayLazy({ ref })

  // unmount

  return () => {
    unmountVideoAutoplayLazy()
  }
}
