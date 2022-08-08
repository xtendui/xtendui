import React, { useRef, useEffect } from 'react'

export default function Demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--media-video-matches-react" ref={ref}>
      <div className="xt-media-container bg-gray-200 pb-[56.2%]">
        <video className="xt-media" poster="/placeholder-1080.jpg" preload="metadata" muted playsInline loop autoPlay>
          <source type="video/mp4" media="(max-width: 767px)" data-src="/placeholder-720.mp4" />
          <source type="video/mp4" media="(min-width: 768px)" data-src="/placeholder-1080.mp4" />
        </video>
      </div>
    </div>
  )
}

/* mountVideoMatches */

const mountVideoMatches = ({ ref }) => {
  // vars

  const source = ref.querySelector('video source[data-src]')
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
}

/* mount */

const mount = ({ ref }) => {
  const unmountVideoMatches = mountVideoMatches({ ref })

  // unmount

  return () => {
    unmountVideoMatches()
  }
}