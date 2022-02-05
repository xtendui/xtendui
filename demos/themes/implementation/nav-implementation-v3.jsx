import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import 'xtendui/src/scrollto'

export default function Demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--nav-implementation-v3-react" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div className="xt-row xt-row-4 md:xt-row-8">
          <div className="w-full md:w-4/12">
            <div className="*** xt-sticky md:py-4 ***" data-node-sticky>
              <div className="xt-card p-2 rounded-2xl text-gray-900 xt-links-default bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm backdrop-saturate-50">
                <nav aria-label="Navigation" className="*** xt-list xt-list-1 flex-col ***">
                  <a
                    href="#description"
                    type="button"
                    className="xt-button *** flex-auto *** py-1.5 px-3 text-sm rounded-2xl flex-auto font-medium leading-snug justify-start text-left transition hover:bg-white hover:text-primary-500 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-lg opacity-50 mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                      <polyline points="13 2 13 9 20 9"></polyline>
                    </svg>{' '}
                    Description
                  </a>
                  <a
                    href="#features"
                    type="button"
                    className="xt-button *** flex-auto *** py-1.5 px-3 text-sm rounded-2xl flex-auto font-medium leading-snug justify-start text-left transition hover:bg-white hover:text-primary-500 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-lg opacity-50 mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>{' '}
                    Features
                  </a>
                  <a
                    href="#accessories"
                    type="button"
                    className="xt-button *** flex-auto *** py-1.5 px-3 text-sm rounded-2xl flex-auto font-medium leading-snug justify-start text-left transition hover:bg-white hover:text-primary-500 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-lg opacity-50 mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>{' '}
                    Accessories
                  </a>
                  <a
                    href="#manuals"
                    type="button"
                    className="xt-button *** flex-auto *** py-1.5 px-3 text-sm rounded-2xl flex-auto font-medium leading-snug justify-start text-left transition hover:bg-white hover:text-primary-500 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-lg opacity-50 mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>{' '}
                    Manuals
                  </a>
                </nav>
              </div>
            </div>
          </div>

          <div className="w-full md:w-8/12">
            <div className="md:py-4" data-node-sticky-endtrigger>
              <div className="xt-card rounded-2xl text-gray-900 xt-links-default bg-white">
                <div className="p-6 sm:p-8 text-sm border-t border-gray-200" id="description">
                  <div className="xt-h5">Description</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                    vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                    magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula,
                    lacinia orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in
                    euismod lacinia, urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh,
                    commodo at commodo eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu
                    consequat neque pretium at. Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque
                    vitae, imperdiet nec ante. Nulla quis tempus risus, a aliquet ligula.
                  </p>
                </div>

                <div className="*** p-6 sm:p-8 text-sm border-t border-gray-200 ***" id="features">
                  <div className="xt-h5">Features</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </p>
                </div>

                <div className="*** p-6 sm:p-8 text-sm border-t border-gray-200 ***" id="accessories">
                  <div className="xt-h5">Accessories</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                    vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                    magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula,
                    lacinia orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in
                    euismod lacinia, urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh,
                    commodo at commodo eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu
                    consequat neque pretium at. Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque
                    vitae, imperdiet nec ante. Nulla quis tempus risus, a aliquet ligula.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                    vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                    magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula,
                    lacinia orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in
                    euismod lacinia, urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh,
                    commodo at commodo eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu
                    consequat neque pretium at. Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque
                    vitae, imperdiet nec ante. Nulla quis tempus risus, a aliquet ligula.
                  </p>
                </div>

                <div className="*** p-6 sm:p-8 text-sm border-t border-gray-200 ***" id="manuals">
                  <div className="xt-h5">Manuals</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
                    vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at
                    magna aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula,
                    lacinia orci at, pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in
                    euismod lacinia, urna leo hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh,
                    commodo at commodo eget, iaculis non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu
                    consequat neque pretium at. Cras et facilisis leo. Mauris justo elit, porttitor sed pellentesque
                    vitae, imperdiet nec ante. Nulla quis tempus risus, a aliquet ligula.
                  </p>
                </div>
              </div>
            </div>
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
  let self = new Xt.Scrollto(document.documentElement, {})
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

  // fix stop scroll animation on user interaction

  const stopScrolling = () => {
    gsap.killTweensOf(self.scroller)
  }

  addEventListener('touchstart', stopScrolling)
  addEventListener('wheel', stopScrolling)

  // unmount

  return () => {
    removeEventListener('touchstart', stopScrolling)
    removeEventListener('wheel', stopScrolling)
    self.container.removeEventListener('scrollto.xt.scrollto', scrollto)
    self.destroy()
    self = null
  }
}

/* mountSticky */

const mountSticky = ({ ref }) => {
  // vars

  const sticky = ref.querySelector('[data-node-sticky]')

  // sticky

  /***/
  ScrollTrigger.create({
    trigger: sticky,
    start: 'top top',
    endTrigger: ref.querySelector('[data-node-sticky-endtrigger]'),
    end: () => `bottom top+=${sticky.offsetHeight}`,
    pin: true,
    pinSpacing: false,
  })
  /***/

  // unmount

  return () => {}
}

/* mount */

const mount = ({ ref }) => {
  const unmountScrollto = mountScrollto({ ref })
  const unmountSticky = mountSticky({ ref })

  // unmount

  return () => {
    unmountScrollto()
    unmountSticky()
  }
}
