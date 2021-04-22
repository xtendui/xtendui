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
    <div className="demo--parallax-react" ref={ref}>
      <h1 className="xt-h1 h-screen">Scroll down</h1>

      <div className="box bg-primary-500 w-24 h-24 mb-96"></div>

      <div className="box bg-primary-500 w-24 h-24 my-96"></div>

      <div className="box bg-primary-500 w-24 h-24 mt-96"></div>

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
    }
    // no scrub
    const item0 = items[0]
    const scrollTrigger0 = {
      trigger: item0,
    }
    gsap
      .timeline({
        scrollTrigger: scrollTrigger0,
      })
      .to(item0, {
        x: '50vw',
        ease: 'quint.inOut',
      })
    // scrub
    const item1 = items[1]
    const scrollTrigger1 = {
      trigger: item1,
      scrub: true,
    }
    gsap
      .timeline({
        scrollTrigger: scrollTrigger1,
      })
      .to(item1, {
        x: '50vw',
        ease: 'quint.inOut',
      })
    // scrub value
    const item2 = items[2]
    const scrollTrigger2 = {
      trigger: item2,
      scrub: 1.5,
    }
    gsap
      .timeline({
        scrollTrigger: scrollTrigger2,
      })
      .to(item2, {
        x: '50vw',
        ease: 'quint.inOut',
      })
  }

  parallax({ container: ref })

  // unmount

  return () => {}
}
