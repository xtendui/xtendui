import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--sticky-stack-react" ref={ref}>
      <div className="*** xt-sticky *** *** sticky--stack-top ***">
        <div className="xt-card text-sm py-6 px-7 text-white xt-links-inverse bg-primary-500">
          <div className="xt-h4">Top</div>
        </div>
      </div>

      <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200 sticky--hide-content">
        <div className="xt-h4">Lorem ipsum</div>
        <p>
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
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

      <div className="*** xt-sticky *** *** sticky--stack-topsecond *** group">
        <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
          <div className="xt-h4 transition-all group-on:xt-h6">Top Second</div>
        </div>
      </div>

      <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200 sticky--hide-content">
        <div className="xt-h4">Lorem ipsum</div>
        <p>
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
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

      <div className="*** xt-sticky *** *** sticky--stack-topthird ***">
        <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
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

      <div className="*** xt-sticky *** *** sticky--stack-bottom ***">
        <div className="xt-card text-sm py-6 px-7 text-white xt-links-inverse bg-primary-500">
          <div className="xt-h4">Bottom</div>
        </div>
      </div>

      <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200 sticky--hide-content">
        <div className="xt-h4">Lorem ipsum</div>
        <p>
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
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

      <div className="*** xt-sticky *** *** sticky--stack-bottomsecond ***">
        <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
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
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountSticky = mountSticky({ ref })

  // unmount

  return () => {
    unmountSticky()
  }
}

/* mountSticky */

const mountSticky = ({ ref }) => {
  // sticky

  /***/
  ScrollTrigger.create({
    trigger: ref.querySelector('.sticky--stack-top'),
    start: 'top top',
    endTrigger: '.sticky--stack-topsecond',
    end: () => `top ${document.querySelector('.sticky--stack-topsecond').offsetHeight}px`,
    pin: true,
    pinSpacing: false,
  })
  /***/

  /***/
  ScrollTrigger.create({
    trigger: ref.querySelector('.sticky--stack-topsecond'),
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
    trigger: ref.querySelector('.sticky--stack-topthird'),
    start: () => `top top+=${document.querySelector('.sticky--stack-topsecond').offsetHeight}px`,
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
    trigger: ref.querySelector('.sticky--stack-bottom'),
    start: 'bottom bottom',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })
  /***/

  addEventListener('resize', () => {
    scrollTriggerBottom.refresh()
  })

  /***/
  const scrollTriggerBottomSecond = ScrollTrigger.create({
    trigger: ref.querySelector('.sticky--stack-bottomsecond'),
    start: () => `bottom bottom-=${document.querySelector('.sticky--stack-bottom').offsetHeight}px`,
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })
  /***/

  addEventListener('resize', () => {
    scrollTriggerBottomSecond.refresh()
  })

  // unmount

  return () => {}
}
