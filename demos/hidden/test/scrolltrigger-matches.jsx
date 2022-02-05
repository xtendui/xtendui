import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}
import 'xtendui/src/overlay'

export default function Demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--scrolltrigger-matches-react" ref={ref}>
      <div className="xt-sticky">
        <div className="xt-card p-6 sm:p-8 text-sm text-white xt-links-inverse bg-primary-500">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-overlay="{ targets: '#overlay--scrolltrigger-matches' }">
            Overlay
          </button>

          <div aria-label="Modal" className="xt-overlay group" id="overlay--scrolltrigger-matches">
            <div className="xt-backdrop z-below bg-gray-800 transition opacity-0 group-in:opacity-25"></div>
            <div className="xt-overlay-container max-w-3xl">
              <div className="xt-overlay-inner">
                <div className="xt-card rounded-2xl shadow-xl text-gray-900 xt-links-default bg-white">
                  <button
                    type="button"
                    className="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                    aria-label="Close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon "
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <div className="p-7 sm:p-9 text-base">
                    <div className="xt-h4">Overlay 0</div>
                    <p>
                      <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                    </p>
                    <p>
                      Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                      justo.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                      ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.
                    </p>
                    <p>
                      Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                      justo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="xt-card p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100">
        <div className="xt-h4">Lorem ipsum</div>
        <p>
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
          velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
          vitae magna eget, vehicula scelerisque elit.
        </p>
        <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla
          sollicitudin nunc, ut commodo nulla enim nec nisi.
        </p>
        <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
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
    </div>
  )
}

/* mountTest */

const mountTest = ({ ref }) => {
  // vars

  const sticky = ref.querySelector('.xt-sticky')
  const overlay = ref.querySelector('[data-xt-overlay]')
  const self = Xt.get({ name: 'xt-overlay', el: overlay })

  // init

  const count = parseFloat(ref.getAttribute('data-test-mount') ?? 0) + 1
  ref.setAttribute('data-test-mount', count)
  // eslint-disable-next-line no-console
  console.log(
    'TEST pin mount this should NOT be called on resize and xtNamespace should be 1.',
    Xt.dataStorage.get(self.ns, 'xtNamespace').length
  )

  // resize

  const refresh = () => {
    const count = parseFloat(ref.getAttribute('data-test-refresh') ?? 0) + 1
    ref.setAttribute('data-test-refresh', count)
    // eslint-disable-next-line no-console
    console.log(
      'TEST pin resize this should be called one time on resize and Xt._mountArr should not increase.',
      Xt._mountArr.length
    )
  }

  ScrollTrigger.addEventListener('refresh', refresh)

  // matchmedia

  ScrollTrigger.matchMedia({
    '(max-width: 767px)': () => {
      // sticky

      ScrollTrigger.create({
        trigger: sticky,
        start: 'top top',
        endTrigger: 'html',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
      })
    },
  })

  // unmount

  return () => {
    // eslint-disable-next-line no-console
    console.log(
      'TEST resize and open/close, pin unmount this should NOT be called on resize, xtNamespace should be 1, should be 0 on unmount.',
      Xt.dataStorage.get(self.ns, 'xtNamespace').length
    )
    ScrollTrigger.removeEventListener('refresh', refresh)
  }
}

/* mount */

const mount = ({ ref }) => {
  const unmountTest = mountTest({ ref })

  // unmount

  return () => {
    unmountTest()
  }
}
