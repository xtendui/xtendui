import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--media-iframe-lazy-react" ref={ref}>
      <div className="xt-media-container bg-gray-200 pb-[56.2%] *** group ***">
        <iframe
          className="xt-media"
          data-src="https://www.youtube.com/embed/hNQFjqDvPhA?autoPlay=1&showinfo=0&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
        <div className="*** cursor-pointer transition group-in:opacity-0 group-done:hidden ***">
          <img
            className="xt-media object-cover object-center"
            src="https://img.youtube.com/vi/hNQFjqDvPhA/maxresdefault.jpg"
            loading="lazy"
            alt=""
          />
          <div className="*** absolute inset-0 m-auto w-20 h-12 rounded-xl shadow-xl bg-black bg-opacity-60 backdrop-filter backdrop-blur-sm backdrop-saturate-50 ***">
            <div className="*** absolute inset-0 w-0 h-0 m-auto border-l-[18px] border-b-[10px] border-t-[10px] border-transparent border-l-white ***"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

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

const mount = ({ ref }) => {
  const unmountIframesLazy = mountIframesLazy({ ref })

  // unmount

  return () => {
    unmountIframesLazy()
  }
}
