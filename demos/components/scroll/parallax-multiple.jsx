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
    <div className="demo--parallax-multiple-react" ref={ref}>
      <h1 className="xt-h1 h-screen">Scroll down</h1>

      <div className="xt-list xt-list-4 flex-col">
        <div className="box bg-primary-500 w-24 h-24"></div>
        <div className="box bg-primary-500 w-24 h-24"></div>
        <div className="box bg-primary-500 w-24 h-24"></div>
      </div>

      <h1 className="xt-h1 h-screen">Scroll up</h1>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountParallax = mountParallax({ ref })

  // unmount

  return () => {
    unmountParallax()
  }
}

/* mountParallax */

const mountParallax = ({ ref }) => {
  // parallax

  const parallax = ({ container }) => {
    // items inside container and not already parallaxed
    const items = container.querySelectorAll('.box:not(.parallaxed)')
    for (const item of items) {
      item.classList.add('parallaxed')
      // init
      gsap.set(item, {
        opacity: 0,
      })
      // bottom
      const scrollTriggerBottom = {
        trigger: item,
        start: 'top bottom',
        end: 'top bottom-=200', // end 200px after
        scrub: 1.5,
      }
      gsap
        .timeline({
          scrollTrigger: scrollTriggerBottom,
        })
        .set(item, {
          y: 30,
          opacity: 0,
        })
        .to(item, {
          opacity: 1,
          y: 0,
          ease: 'quint.inOut',
        })
      // top
      const scrollTriggerTop = {
        trigger: item,
        start: `bottom top+=200`, // start 200px before
        end: `bottom top`,
        scrub: 1.5,
      }
      gsap
        .timeline({
          scrollTrigger: scrollTriggerTop,
        })
        .set(item, {
          y: 0,
          opacity: 1,
        })
        .to(item, {
          opacity: 0,
          y: -30,
          ease: 'quint.inOut',
          immediateRender: false,
        })
    }
  }

  parallax({ container: ref })

  // unmount

  return () => {}
}
