import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--media-iframe-lazy-react" ref={ref}>
      <div className="xt-media-container bg-gray-500 pb-[56.2%] *** group ***">
        <iframe
          className="xt-media"
          type="text/html"
          data-src="https://www.youtube.com/embed/hNQFjqDvPhA?autoPlay=1&showinfo=0&rel=0"
          frameBorder="0"></iframe>
        <div className="*** xt-media object-cover object-center cursor-pointer transition group-in:opacity-0 group-done:hidden ***">
          <img src="https://img.youtube.com/vi/hNQFjqDvPhA/maxresdefault.jpg" loading="lazy" alt="" />
          <div className="*** absolute inset-0 m-auto w-20 h-12 rounded-xl shadow-xl bg-black bg-opacity-60 backdrop-filter backdrop-blur ***">
            <div className="*** absolute inset-0 w-0 h-0 m-auto border-l-[18px] border-b-[10px] border-t-[10px] border-transparent border-l-white ***"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountIframesLazy = mountIframesLazy({ ref })

  // unmount

  return () => {
    unmountIframesLazy()
  }
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
