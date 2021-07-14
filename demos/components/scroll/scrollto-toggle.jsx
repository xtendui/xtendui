import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/scrollto'
import 'xtendui/src/toggle'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--scrollto-toggle-react" ref={ref}>
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
      <div className="max-w-xl mx-auto">
        <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md font-bold leading-tight tracking-tight normal-case text-lg text-black bg-gray-100 text-center">
          <code>scrollto: true</code>
        </div>
        <div data-xt-toggle="{ collapseHeight: 'targets', queue: false, duration: 500, scrollto: true }">
          <div className="xt-list xt-list-3 justify-center">
            <a
              className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
              data-xt-toggle-element>
              #0
            </a>
            <a
              className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
              data-xt-toggle-element>
              #1
            </a>
            <a
              className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
              data-xt-toggle-element>
              #2
            </a>
          </div>

          <div className="mt-3">
            <div
              className="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
              data-xt-toggle-target
              data-xt-hash="anchor-0">
              <div className="*** xt-card *** rounded-md py-6 px-7 text-sm text-black xt-links-default bg-gray-100">
                <div className="xt-h5">#0</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                  vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                  magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                  orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                  urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                  eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium
                  at. Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante.
                  Nulla quis tempus risus, a aliquet ligula.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                  vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                  magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                  orci at, pretium nulla.
                </p>
              </div>
            </div>

            <div
              className="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
              data-xt-toggle-target
              data-xt-hash="anchor-1">
              <div className="*** xt-card *** rounded-md py-6 px-7 text-sm text-black xt-links-default bg-gray-100">
                <div className="xt-h5">#1</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                  vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                  magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                  orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                  urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                  eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium
                  at. Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante.
                  Nulla quis tempus risus, a aliquet ligula.
                </p>
              </div>
            </div>

            <div
              className="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
              data-xt-toggle-target
              data-xt-hash="anchor-2">
              <div className="*** xt-card *** rounded-md py-6 px-7 text-sm text-black xt-links-default bg-gray-100">
                <div className="xt-h5">#2</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                  vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                  magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                  orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                  urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                  eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium
                  at. Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante.
                  Nulla quis tempus risus, a aliquet ligula.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                  vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                  magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                  orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                  urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                  eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium
                  at. Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante.
                  Nulla quis tempus risus, a aliquet ligula.
                </p>
              </div>
            </div>
          </div>
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
      <div className="max-w-xl mx-auto" id="demo--scrollto-toggle-query">
        <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md font-bold leading-tight tracking-tight normal-case text-lg text-black bg-gray-100 text-center">
          <code>scrollto: Query</code>
        </div>
        <div data-xt-toggle="{ collapseHeight: 'targets', queue: false, duration: 500, scrollto: '#demo--scrollto-toggle-query' }">
          <div className="xt-list xt-list-3 justify-center">
            <a
              className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
              data-xt-toggle-element>
              #0a
            </a>
            <a
              className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
              data-xt-toggle-element>
              #1a
            </a>
            <a
              className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
              data-xt-toggle-element>
              #2a
            </a>
          </div>

          <div className="mt-3">
            <div
              className="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
              data-xt-toggle-target
              data-xt-hash="anchor-0a">
              <div className="*** xt-card *** rounded-md py-6 px-7 text-sm text-black xt-links-default bg-gray-100">
                <div className="xt-h5">#0a</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                  vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                  magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                  orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                  urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                  eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium
                  at. Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante.
                  Nulla quis tempus risus, a aliquet ligula.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                  vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                  magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                  orci at, pretium nulla.
                </p>
              </div>
            </div>

            <div
              className="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
              data-xt-toggle-target
              data-xt-hash="anchor-1a">
              <div className="*** xt-card *** rounded-md py-6 px-7 text-sm text-black xt-links-default bg-gray-100">
                <div className="xt-h5">#1a</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                  vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                  magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                  orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                  urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                  eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium
                  at. Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante.
                  Nulla quis tempus risus, a aliquet ligula.
                </p>
              </div>
            </div>

            <div
              className="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
              data-xt-toggle-target
              data-xt-hash="anchor-2a">
              <div className="*** xt-card *** rounded-md py-6 px-7 text-sm text-black xt-links-default bg-gray-100">
                <div className="xt-h5">#2a</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                  vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                  magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                  orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                  urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                  eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium
                  at. Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante.
                  Nulla quis tempus risus, a aliquet ligula.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                  vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                  magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                  orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                  urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                  eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium
                  at. Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante.
                  Nulla quis tempus risus, a aliquet ligula.
                </p>
              </div>
            </div>
          </div>
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
      <div className="max-w-xl mx-auto">
        <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md font-bold leading-tight tracking-tight normal-case text-lg text-black bg-gray-100 text-center">
          <code>scrollto: Type</code>
        </div>
        <div data-xt-toggle="{ collapseHeight: 'targets', queue: false, duration: 500, scrollto: 'elements' }">
          <div className="xt-list xt-list-3 justify-center">
            <a
              className="xt-button w-full my-3 py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
              data-xt-toggle-element>
              #0b
            </a>
            <div
              className="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
              data-xt-toggle-target
              data-xt-hash="anchor-0b">
              <div className="*** xt-card *** rounded-md py-6 px-7 text-sm text-black xt-links-default bg-gray-100">
                <div className="xt-h5">#0b</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                  vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                  magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                  orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                  urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                  eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium
                  at. Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante.
                  Nulla quis tempus risus, a aliquet ligula.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                  vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                  magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                  orci at, pretium nulla.
                </p>
              </div>
            </div>

            <a
              className="xt-button w-full my-3 py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
              data-xt-toggle-element>
              #1b
            </a>

            <div
              className="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
              data-xt-toggle-target
              data-xt-hash="anchor-1b">
              <div className="*** xt-card *** rounded-md py-6 px-7 text-sm text-black xt-links-default bg-gray-100">
                <div className="xt-h5">#1b</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                  vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                  magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                  orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                  urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                  eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium
                  at. Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante.
                  Nulla quis tempus risus, a aliquet ligula.
                </p>
              </div>
            </div>

            <a
              className="xt-button w-full my-3 py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
              data-xt-toggle-element>
              #2b
            </a>

            <div
              className="*** off:hidden out:pointer-events-none overflow-hidden transition-all ***"
              data-xt-toggle-target
              data-xt-hash="anchor-2b">
              <div className="*** xt-card *** rounded-md py-6 px-7 text-sm text-black xt-links-default bg-gray-100">
                <div className="xt-h5">#2b</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                  vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                  magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                  orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                  urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                  eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium
                  at. Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante.
                  Nulla quis tempus risus, a aliquet ligula.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                  vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                  magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia
                  orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia,
                  urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo
                  eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium
                  at. Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante.
                  Nulla quis tempus risus, a aliquet ligula.
                </p>
              </div>
            </div>
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
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountScrollto = mountScrollto({ ref })

  // unmount

  return () => {
    unmountScrollto()
  }
}

/* mountScrollto */

const mountScrollto = () => {
  // init

  /***/
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
      const overlay = self.target.closest('.xt-overlay')
      if (self.initial || self.hashchange || (overlay && !overlay.classList.contains('in'))) return 0
      const distance = Math.abs(self.scroller.scrollTop - self.position)
      return Math.min(Math.log(1 + distance / 200), 1)
    },
  })
  /***/

  // scrollto

  const scrollto = () => {
    // scroll
    gsap.killTweensOf(self.scroller)
    gsap.to(self.scroller, {
      scrollTo: self.position,
      duration: self.duration,
      ease: 'quint.out',
    })
  }

  self.container.addEventListener('scrollto.xt.scrollto', scrollto)

  // unmount

  return () => {
    self.container.removeEventListener('scrollto.xt.scrollto', scrollto)
    self.destroy()
    self = null
  }
}
