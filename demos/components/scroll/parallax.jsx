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

      <div className="box box-0 bg-primary-500 w-24 h-24 mb-96"></div>

      <div className="box box-1 bg-primary-500 w-24 h-24 my-96"></div>

      <div className="box box-2 bg-primary-500 w-24 h-24 mt-96"></div>

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
  // vars

  const trigger0 = ref.querySelector('.box-0')
  const trigger1 = ref.querySelector('.box-1')
  const trigger2 = ref.querySelector('.box-2')

  // no scrub

  const scrollTrigger0 = {
    trigger: trigger0,
  }

  gsap
    .timeline({
      scrollTrigger: scrollTrigger0,
    })
    .to(trigger0, {
      x: '50vw',
      ease: 'quint.inOut',
    })

  // scrub

  const scrollTrigger1 = {
    trigger: trigger1,
    scrub: true,
  }

  gsap
    .timeline({
      scrollTrigger: scrollTrigger1,
    })
    .to(trigger1, {
      x: '50vw',
      ease: 'quint.inOut',
    })

  // scrub value

  const scrollTrigger2 = {
    trigger: trigger2,
    scrub: 1.5,
  }

  gsap
    .timeline({
      scrollTrigger: scrollTrigger2,
    })
    .to(trigger2, {
      x: '50vw',
      ease: 'quint.inOut',
    })

  // unmount

  return () => {}
}
