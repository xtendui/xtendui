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
    <div className="demo--parallax-range-react" ref={ref}>
      <div className="box box-0 bg-primary-500 w-24 h-24 my-96"></div>
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

  const trigger = ref.querySelector('.box-0')

  // no scrub

  const scrollTrigger = {
    trigger: trigger,
    start: () => {
      // full range of animation also on top of the page
      const start = window.innerHeight - trigger.offsetTop
      return `top${start > 0 ? `+=${start}` : ''} bottom`
    },
    end: () => {
      // full range of animation also on bottom of the page
      const end = window.innerHeight - document.scrollingElement.scrollHeight + trigger.offsetTop + trigger.offsetHeight
      return `bottom${end > 0 ? `-=${end}` : ''} top`
    },
    scrub: 1.5,
    markers: true,
  }

  gsap
    .timeline({
      scrollTrigger: scrollTrigger,
    })
    .to(trigger, {
      x: '50vw',
      ease: 'quint.inOut',
    })

  // unmount

  return () => {}
}
