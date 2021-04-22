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
    <div className="demo--parallax-actions-react" ref={ref}>
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
    // play pause reverse pause
    const item0 = items[0]
    const scrollTrigger0 = {
      trigger: item0,
      toggleActions: 'play pause reverse pause',
    }
    gsap
      .timeline({
        scrollTrigger: scrollTrigger0,
      })
      .to(item0, {
        x: '50vw',
        ease: 'quart.out',
      })
    // play restart resume restart
    const item1 = items[1]
    const scrollTrigger1 = {
      trigger: item1,
      toggleActions: 'play reset restart reset',
    }
    gsap
      .timeline({
        scrollTrigger: scrollTrigger1,
      })
      .to(item1, {
        x: '50vw',
        ease: 'quart.out',
      })
    // play pause resume reset
    const item2 = items[2]
    const scrollTrigger2 = {
      trigger: item2,
      toggleActions: 'play pause resume reset',
    }
    gsap
      .timeline({
        scrollTrigger: scrollTrigger2,
      })
      .to(item2, {
        x: '50vw',
        ease: 'quart.out',
      })
  }

  parallax({ container: ref })

  // unmount

  return () => {}
}
