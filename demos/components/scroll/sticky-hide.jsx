import React, { useRef, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function demo() {
  const refCurrent = useRef(null)
  let unmount
  let ref = useCallback(ref => {
    if (refCurrent.current) {
      unmount(refCurrent.current)
    }
    refCurrent.current = ref
    if (ref !== null) {
      unmount = mount({ ref })
    }
  }, [])

  return (
    <div className="demo--sticky-hide-react" ref={ref}>
      <div className="xt-sticky">
        <div className="sticky--hide-content">
          <div className="xt-card p-4 text-black xt-links-default bg-gray-200 sticky--hide-sub">
            <div className="xt-h6">Sub</div>
          </div>
          <div className="xt-card text-sm py-6 px-7 text-white xt-links-inverse bg-primary-500">
            <div className="xt-h4">Main</div>
          </div>
        </div>
      </div>

      <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
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
  const inner = sticky.querySelector('.sticky--hide-sub')

  // hide depending on inner (always before pin or bugs)

  ScrollTrigger.create({
    trigger: sticky,
    start: -1, // needs -1 because start trigger is sticky
    end: () => `top top-=${sticky.offsetHeight}`,
    onUpdate: self => {
      if (self.isActive && self.direction < 0 && content.classList.contains('scrolling-hide')) {
        content.classList.remove('scrolling-hide')
        gsap.killTweensOf(content)
        gsap.to(content, {
          y: 0,
          duration: 0.5,
          ease: 'quart.out',
        })
      } else if (!self.isActive && self.direction > 0 && !content.classList.contains('scrolling-hide')) {
        content.classList.add('scrolling-hide')
      }
    },
  })

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
        gsap.to(content, {
          y: 0,
          duration: 0.5,
          ease: 'quart.out',
        })
      } else if (
        !content.classList.contains('scrolling-down') &&
        content.classList.contains('scrolling-hide') &&
        self.direction > 0
      ) {
        content.classList.add('scrolling-down')
        gsap.killTweensOf(content)
        gsap.to(content, {
          y: -(inner.offsetTop + inner.offsetHeight),
          duration: 0.5,
          ease: 'quart.out',
        })
      }
    },
  })

  // unmount

  return () => {}
}
