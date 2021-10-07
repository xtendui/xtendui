import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'

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

const mount = ({ ref }) => {
  const unmountVideosAutoplayLazy = mountVideosAutoplayLazy({ ref })

  // unmount

  return () => {
    unmountVideosAutoplayLazy()
  }
}
