import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/drop'
import 'xtendui/src/overlay'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--mount-unmount-react" ref={ref}>
      <button
        type="button"
        className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600 on"
        data-xt-overlay="{ targets: '#overlay--mount-unmount', duration: 500, matches: { '(max-width: 767px)': { disabled: true } } }">
        Overlay
      </button>

      <div className="xt-overlay group" id="overlay--mount-unmount">
        <div className="xt-backdrop z-below bg-gray-800 transition opacity-0 group-in:opacity-25"></div>
        <div className="xt-overlay-container max-w-3xl">
          <div className="xt-overlay-inner transition opacity-0 -translate-y-4 group-in:opacity-100 group-in:translate-y-0 group-out:translate-y-4">
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
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
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
  )
}

/* mountTest */

const mountTest = ({ ref }) => {
  // vars

  const overlay = ref.querySelector('[data-xt-overlay]')
  const self = Xt.get({ name: 'xt-overlay', el: overlay })

  // mount

  Xt.mount({
    root: ref,
    matches: '.xt-overlay',
    mount: () => {
      // eslint-disable-next-line no-console
      console.log('TEST MOUNT this should be called once and should NOT be called on overlay close.')
    },
  })

  // init

  for (const tr of self.targets.filter(x => self.hasCurrent({ el: x }))) {
    tr.setAttribute('data-test-unique-id', self.uniqueId)
    // eslint-disable-next-line no-console
    console.log('TEST INITIAL xtNamespace should be 1.', Xt.dataStorage.get(self.ns, 'xtNamespace').length)
    // eslint-disable-next-line no-console
    console.log(
      'TEST INITIAL 0 this should be `true true true true`.',
      tr.classList.contains('on'),
      tr.classList.contains('in'),
      tr.classList.contains('initial'),
      self.initial
    )
    requestAnimationFrame(() => {
      // eslint-disable-next-line no-console
      console.log(
        'TEST INITIAL 1 this should be `true true false false`.',
        tr.classList.contains('on'),
        tr.classList.contains('in'),
        tr.classList.contains('initial'),
        self.initial
      )
    })
  }

  // off

  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // eslint-disable-next-line no-console
      console.log(
        'TEST UNMOUNT 1 disableDeactivate when overlay open and change page (browser location prev next) overlay should close automatically and this should NOT be called.'
      )
    }
  }

  for (const tr of self.targets) {
    tr.addEventListener('off.xt.overlay', off)
  }

  // resize

  const resize = () => {
    // eslint-disable-next-line no-console
    console.log('TEST UNMOUNT this should NOT be called multiple times on changing page and resize.')
  }

  addEventListener('resize', resize)

  // unmount

  return () => {
    // eslint-disable-next-line no-console
    console.log(
      'TEST UNMOUNT 2 Xt.unmountArr should be the same and xtNamespace should be 0.',
      Xt.unmountArr.length,
      Xt.dataStorage.get(self.ns, 'xtNamespace').length
    )
    removeEventListener('resize', resize)
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
