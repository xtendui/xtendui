import React, { useRef, useCallback } from 'react'
import gsap from 'gsap'
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
    <div className="demo--sticky-hide-react" ref={ref}>
      <div className="xt-sticky">
        <div className="sticky--hide-content">
          <div className="xt-card text-sm py-6 px-7 text-white xt-links-inverse bg-primary-500 sticky--hide-top-main">
            <div className="xt-h4">Top</div>
          </div>
          <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200 sticky--hide-top-sub">
            <div className="xt-h6">Top Second</div>
          </div>
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

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
  // vars

  const sticky = ref.querySelector('.xt-sticky')
  const content = sticky.querySelector('.sticky--hide-content')
  const stickyInner = sticky.querySelector('.sticky--hide-top-main')

  // sticky

  ScrollTrigger.create({
    trigger: sticky,
    start: 'top top',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
    onUpdate: self => {
      // scrolling-down depending on scroll direction
      if (!self.getVelocity()) return // skip on initial
      if (
        content.classList.contains('scrolling-down') &&
        content.classList.contains('scrolling-hide') &&
        self.direction < 0
      ) {
        content.classList.remove('scrolling-down')
        gsap.killTweensOf(content)
        gsap.to(content, { y: 0, duration: 0.5, ease: 'quart.out' })
      } else if (
        !content.classList.contains('scrolling-down') &&
        content.classList.contains('scrolling-hide') &&
        self.direction > 0
      ) {
        content.classList.add('scrolling-down')
        gsap.killTweensOf(content)
        gsap.to(content, {
          y: -stickyInner.offsetHeight,
          duration: 0.5,
          ease: 'quart.out',
        })
      }
    },
  })

  // hide depending on content

  ScrollTrigger.create({
    trigger: sticky,
    start: -1, // needs -1 because start trigger is sticky
    endTrigger: content,
    end: () => `bottom top+=${stickyInner.offsetHeight}`,
    onUpdate: self => {
      if (self.isActive && self.direction < 0 && content.classList.contains('scrolling-hide')) {
        content.classList.remove('scrolling-hide')
        gsap.killTweensOf(content)
        gsap.to(content, { y: 0, duration: 0.5, ease: 'quart.out' })
      } else if (!self.isActive && self.direction > 0 && !content.classList.contains('scrolling-hide')) {
        content.classList.add('scrolling-hide')
      }
    },
  })

  // unmount

  return () => {}
}
