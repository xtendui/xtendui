import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--media-video-matches-react" ref={ref}>
      <div className="xt-media-container bg-gray-100 pb-[56.2%]">
        <video className="xt-media" poster="/placeholder-1080.jpg" preload="metadata" muted playsInline loop autoPlay>
          <source type="video/mp4" media="(max-width: 767px)" data-src="/placeholder-720.mp4" />
          <source type="video/mp4" src="/placeholder-1080.mp4" />
        </video>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountVideosMatches = mountVideosMatches({ ref })

  // unmount

  return () => {
    unmountVideosMatches()
  }
}

/* mountVideosMatches */

const mountVideosMatches = ({ ref }) => {
  // mount granularly

  Xt.mount({
    root: ref,
    matches: 'video',
    mount: ({ ref }) => {
      return mountVideoMatches({ ref })
    },
  })

  // unmount

  return () => {}
}

/* mountVideoMatches */

const mountVideoMatches = ({ ref }) => {
  // vars

  const video = ref

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

  addEventListener('resize', resize)
  resize()

  // unmount

  return () => {
    removeEventListener('resize', resize)
  }
}
