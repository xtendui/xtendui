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
    <div className="demo--sticky-hide-direction-sub-react" ref={ref}>
      <div className="*** xt-sticky ***">
        <div className="xt-card p-4 text-gray-900 xt-links-default bg-gray-100" data-node-sticky-hide-sub>
          <div className="xt-h6">Sub</div>
        </div>
        <div className="xt-card p-6 sm:p-8 text-sm text-white xt-links-inverse bg-primary-500">
          <div className="xt-h4">Main</div>
        </div>
      </div>

      <div className="xt-card p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-gray-100">
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

/* mountSticky */

const mountSticky = ({ ref }) => {
  // vars

  const sticky = ref.querySelector('.xt-sticky')
  const sub = sticky.querySelector('[data-node-sticky-hide-sub]')

  // .scrolling-hide (always before pin ScrollTrigger)

  const updateHide = ({ self, refresh } = {}) => {
    // show/hide depending on position
    if (self.isActive && self.direction < 0 && (refresh || sticky.classList.contains('scrolling-hide'))) {
      sticky.classList.remove('scrolling-hide')
      gsap.killTweensOf(sticky)
      gsap.to(sticky, {
        y: 0,
        duration: refresh ? 0 : 0.5,
        ease: 'quart.out',
      })
    } else if (!self.isActive && self.direction > 0 && (refresh || !sticky.classList.contains('scrolling-hide'))) {
      sticky.classList.add('scrolling-hide')
    }
  }

  /***/
  ScrollTrigger.create({
    trigger: sticky,
    start: -1, // needs -1 because start trigger is sticky
    end: () => `top top-=${sticky.offsetHeight}`,
    onUpdate: self => {
      updateHide({ self })
    },
    onRefresh: self => {
      sticky.classList.add('!transform-none')
      // need to update on refresh done
      requestAnimationFrame(() => {
        sticky.classList.remove('!transform-none', 'scrolling-down')
        updateHide({ self, refresh: true })
      })
    },
  })
  /***/

  // sticky
  const updateSticky = ({ self } = {}) => {
    // scrolling-down depending on scroll direction
    if (!self.getVelocity()) return // skip on initial
    if (
      sticky.classList.contains('scrolling-down') &&
      sticky.classList.contains('scrolling-hide') &&
      self.direction < 0
    ) {
      sticky.classList.remove('scrolling-down')
      gsap.killTweensOf(sticky)
      gsap.to(sticky, {
        y: 0,
        duration: 0.5,
        ease: 'quart.out',
      })
    } else if (
      !sticky.classList.contains('scrolling-down') &&
      sticky.classList.contains('scrolling-hide') &&
      self.direction > 0
    ) {
      sticky.classList.add('scrolling-down')
      gsap.killTweensOf(sticky)
      gsap.to(sticky, {
        y: -(sub.offsetTop + sub.offsetHeight),
        duration: 0.5,
        ease: 'quart.out',
      })
    }
  }

  /***/
  ScrollTrigger.create({
    trigger: sticky,
    start: 'top top',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
    onUpdate: self => {
      updateSticky({ self })
    },
  })
  /***/

  // unmount

  return () => {}
}

/* mount */

const mount = ({ ref }) => {
  const unmountSticky = mountSticky({ ref })

  // unmount

  return () => {
    unmountSticky()
  }
}
