import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/scrollto'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--scrollto-simple-react" ref={ref}>
      <div className="container">
        <div className="xt-card p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100" id="anchor-0">
          <div className="xt-h4">Lorem ipsum dolor sit amet</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut
            fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus
            egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean
            feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.
          </p>
          <div className="xt-list xt-list-3">
            <a
              href="#anchor-0"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              #0
            </a>
            <a
              href="#anchor-1"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              #1
            </a>
            <a
              href="#anchor-2"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              #2
            </a>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="xt-card p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100" id="anchor-1">
          <div className="xt-h4">Lorem ipsum dolor sit amet</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut
            fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus
            egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean
            feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.
          </p>
          <div className="xt-list xt-list-3">
            <a
              href="#anchor-0"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              #0
            </a>
            <a
              href="#anchor-1"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              #1
            </a>
            <a
              href="#anchor-2"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              #2
            </a>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="xt-card p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100" id="anchor-2">
          <div className="xt-h4">Lorem ipsum dolor sit amet</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut
            fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus
            egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean
            feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.
          </p>
          <div className="xt-list xt-list-3">
            <a
              href="#anchor-0"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              #0
            </a>
            <a
              href="#anchor-1"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              #1
            </a>
            <a
              href="#anchor-2"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              #2
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* mountScrollto */

const mountScrollto = () => {
  // init

  /***/
  let self = new Xt.Scrollto(document.documentElement, {
    hash: true,
  })
  /***/

  // scrollto

  const scrollto = () => {
    // scroll
    self.scroller.scrollTo(0, self.position)
  }

  self.container.addEventListener('scrollto.xt.scrollto', scrollto)

  // unmount

  return () => {
    self.container.removeEventListener('scrollto.xt.scrollto', scrollto)
    self.destroy()
    self = null
  }
}

/* mount */

const mount = ({ ref }) => {
  const unmountScrollto = mountScrollto({ ref })

  // unmount

  return () => {
    unmountScrollto()
  }
}
