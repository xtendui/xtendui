import React, { useRef, useCallback } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/scrollto'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function component() {
  const nodeRef = useRef(null)
  let unmount
  const ref = useCallback(ref => {
    if (nodeRef.current) {
      unmount(nodeRef.current)
    }
    nodeRef.current = ref
    if (ref !== null) {
      unmount = mount({ ref })
    }
  }, [])

  return (
    <div className="demo--scrollto-react" ref={ref}>
      <div className="xt-sticky">
        <div className="xt-card text-sm py-6 px-7 text-white xt-links-inverse bg-primary-500">
          <div className="xt-list xt-list-3">
            <a
              href="#anchor-0"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
              {' '}
              #0{' '}
            </a>
            <a
              href="#anchor-1"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
              {' '}
              #1{' '}
            </a>
            <button
              type="button"
              className="xt-button button--custom text-xs py-2 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
              custom
            </button>
            <a
              href="#anchor-2"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
              {' '}
              #2{' '}
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200" id="anchor-0">
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
              className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              {' '}
              #0{' '}
            </a>
            <a
              href="#anchor-1"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              {' '}
              #1{' '}
            </a>
            <button
              type="button"
              className="xt-button button--custom text-xs py-2 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              custom
            </button>
            <a
              href="#anchor-2"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              {' '}
              #2{' '}
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

        <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200" id="anchor-1">
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
              className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              {' '}
              #0{' '}
            </a>
            <a
              href="#anchor-1"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              {' '}
              #1{' '}
            </a>
            <button
              type="button"
              className="xt-button button--custom text-xs py-2 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              custom
            </button>
            <a
              href="#anchor-2"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              {' '}
              #2{' '}
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

        <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200" id="custom">
          <div className="xt-h4">Lorem ipsum dolor sit amet</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut
            fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus
            egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean
            feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.
          </p>
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

        <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200" id="anchor-2">
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
              className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              {' '}
              #0{' '}
            </a>
            <a
              href="#anchor-1"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              {' '}
              #1{' '}
            </a>
            <button
              type="button"
              className="xt-button button--custom text-xs py-2 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              custom
            </button>
            <a
              href="#anchor-2"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              {' '}
              #2{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountSticky = mountSticky({ ref })
  const unmountScrollto = mountScrollto()

  // unmount

  return () => {
    unmountSticky()
    unmountScrollto()
  }
}

/* mountSticky */

const mountSticky = ({ ref }) => {
  ScrollTrigger.create({
    trigger: ref.querySelector('.xt-sticky'),
    start: 'top top',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })

  // unmount

  return () => {}
}

/* mountScrollto */

const mountScrollto = () => {
  // Scrollto

  let self = new Xt.Scrollto(document.documentElement, {
    hash: true,
    space: ({ self }) => {
      let space = 0
      for (const el of self.scroller.querySelectorAll('.xt-sticky[style*="position: fixed"]')) {
        space += el.clientHeight
      }
      return space
    },
    duration: ({ self }) => {
      const dist = Math.abs(self.scroller.scrollTop - self.position)
      return self.initial || self.hashchange ? 0 : Math.max(Math.min(dist / 500, 1), 0.5)
    },
  })

  // scrollto

  const scrollto = () => {
    // scroll
    gsap.killTweensOf(self.scroller)
    gsap.to(self.scroller, {
      scrollTo: self.position,
      duration: self.duration,
      ease: 'quart.inOut',
    })
  }

  self.object.addEventListener('scrollto.xt.scrollto', scrollto)

  // custom

  const buttons = self.object.querySelectorAll('.button--custom')
  const custom = self.object.querySelector('#custom')

  const click = () => {
    custom.dispatchEvent(new CustomEvent('scrollto.trigger.xt.scrollto'))
  }

  for (const button of buttons) {
    button.addEventListener('click', click)
  }

  // unmount

  return () => {
    self.object.removeEventListener('scrollto.xt.scrollto', scrollto)
    self.destroy()
    self = null
  }
}
