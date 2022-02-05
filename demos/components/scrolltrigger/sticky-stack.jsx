import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--sticky-stack-react" ref={ref}>
      <div className="*** xt-sticky ***" data-node-sticky-stack-top>
        <div className="xt-card p-6 sm:p-8 text-sm text-white xt-links-inverse bg-primary-500">
          <div className="xt-h4">Top</div>
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

      <div className="*** xt-sticky *** group" data-node-sticky-stack-topsecond>
        <div className="xt-card p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100">
          <div className="xt-h4 transition-all group-on:xt-h6">Top Second</div>
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

      <div className="*** xt-sticky ***" data-node-sticky-stack-topthird>
        <div className="xt-card p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100">
          <div className="xt-h6">Top Third</div>
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

      <div className="*** xt-sticky ***" data-node-sticky-stack-bottom>
        <div className="xt-card p-6 sm:p-8 text-sm text-white xt-links-inverse bg-primary-500">
          <div className="xt-h4">Bottom</div>
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

      <div className="*** xt-sticky ***" data-node-sticky-stack-bottomsecond>
        <div className="xt-card p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100">
          <div className="xt-h6">Bottom Second</div>
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
    </div>
  )
}

/* mountSticky */

const mountSticky = ({ ref }) => {
  // vars

  const stickyTop = ref.querySelector('[data-node-sticky-stack-top]')
  const stickyTopSecond = ref.querySelector('[data-node-sticky-stack-topsecond]')
  const stickyTopThird = ref.querySelector('[data-node-sticky-stack-topthird]')
  const stickyBottom = ref.querySelector('[data-node-sticky-stack-bottom]')
  const stickyBottomSecond = ref.querySelector('[data-node-sticky-stack-bottomsecond]')

  // sticky

  /***/
  ScrollTrigger.create({
    trigger: stickyTop,
    start: 'top top',
    endTrigger: '[data-node-sticky-stack-topsecond]',
    end: () => `top ${document.querySelector('[data-node-sticky-stack-topsecond]').offsetHeight}px`,
    pin: true,
    pinSpacing: false,
  })
  /***/

  /***/
  ScrollTrigger.create({
    trigger: stickyTopSecond,
    start: 'top top',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
    toggleClass: 'on',
  })
  /***/

  /***/
  ScrollTrigger.create({
    trigger: stickyTopThird,
    start: () => `top top+=${document.querySelector('[data-node-sticky-stack-topsecond]').offsetHeight}px`,
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
    onToggle: scrollTrigger => {
      // refresh because height start changes
      scrollTrigger.refresh()
    },
  })
  /***/

  /***/
  const scrollTriggerBottom = ScrollTrigger.create({
    trigger: stickyBottom,
    start: 'bottom bottom',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })

  // refresh ScrollTrigger bottom

  addEventListener('resize', scrollTriggerBottom.refresh)
  /***/

  /***/
  const scrollTriggerBottomSecond = ScrollTrigger.create({
    trigger: stickyBottomSecond,
    start: () => `bottom bottom-=${document.querySelector('[data-node-sticky-stack-bottom]').offsetHeight}px`,
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })

  // refresh ScrollTrigger bottom

  addEventListener('resize', scrollTriggerBottomSecond.refresh)
  /***/

  // unmount

  return () => {
    removeEventListener('resize', scrollTriggerBottom.refresh)
    removeEventListener('resize', scrollTriggerBottomSecond.refresh)
  }
}

/* mount */

const mount = ({ ref }) => {
  const unmountSticky = mountSticky({ ref })

  // unmount

  return () => {
    unmountSticky()
  }
}
