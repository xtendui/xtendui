import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--media-iframe-lazy-react" ref={ref}>
      <div className="xt-list xt-list-3 items-center">
        <div className="xt-media-container bg-gray-200 pb-[56.2%] *** group ***">
          <iframe
            className="xt-media"
            data-src="https://www.youtube.com/embed/hNQFjqDvPhA?autoPlay=1&showinfo=0&rel=0"
            title="Video player"
            frameBorder="0"
            allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>

        <div className="xt-media-container bg-gray-200 pb-[56.2%] *** group ***">
          <iframe
            className="xt-media"
            data-src="https://player.vimeo.com/video/39750791?h=4527890cfb&autoPlay=1"
            title="Video player"
            frameBorder="0"
            allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

/* mountIframeLazy */

const posterIframeLazy = ({ container, iframe, poster, src }) => {
  // image

  container.append(
    Xt.node({
      str: `
      <div class="cursor-pointer transition group-in:opacity-0 group-done:hidden">
        <img class="xt-media object-cover" src="${poster}" loading="lazy" alt="" />
        <div class="absolute inset-0 m-auto w-20 h-12 rounded-xl shadow-xl bg-black bg-opacity-60 backdrop-filter backdrop-blur-sm backdrop-saturate-50">
          <div class="absolute inset-0 w-0 h-0 m-auto border-l-[18px] border-b-[10px] border-t-[10px] border-transparent border-l-white"></div>
        </div>
      </div>`,
    })
  )

  // click

  const click = () => {
    iframe.setAttribute('src', src)
    iframe.removeAttribute('data-src')
    Xt.on({ el: container, duration: 500 })
  }

  container.addEventListener('click', click)
}

const mountIframeLazy = ({ ref, type }) => {
  // vars

  const iframe = ref
  const container = iframe.parentNode
  const src = iframe.getAttribute('data-src')
  const id = src.split('/').pop().split('?').shift()

  // poster

  if (type === 'youtube') {
    const poster = `//img.youtube.com/vi/${id}/hqdefault.jpg`
    posterIframeLazy({ container, iframe, poster, src })
  } else if (type === 'vimeo') {
    const url = `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${id}`
    // fetch
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(json => {
        if (json && json.thumbnail_url) {
          const poster = json.thumbnail_url
          posterIframeLazy({ container, iframe, poster, src })
        }
      })
  }

  // unmount

  return () => {}
}

const mountIframesLazy = ({ ref }) => {
  // mount granularly

  Xt.mount({
    root: ref,
    matches: 'iframe[data-src*="youtube"]',
    mount: ({ ref }) => {
      return mountIframeLazy({ ref, type: 'youtube' })
    },
  })

  Xt.mount({
    root: ref,
    matches: 'iframe[data-src*="vimeo"]',
    mount: ({ ref }) => {
      return mountIframeLazy({ ref, type: 'vimeo' })
    },
  })

  // unmount

  return () => {}
}

/* mount */

const mount = ({ ref }) => {
  const unmountIframesLazy = mountIframesLazy({ ref })

  // unmount

  return () => {
    unmountIframesLazy()
  }
}
