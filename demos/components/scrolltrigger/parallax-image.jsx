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
    <div className="demo--parallax-image-react" ref={ref}>
      <div className="xt-media-container bg-gray-200 pb-[37.5%]">
        <img
          className="xt-media object-cover object-center"
          src="https://source.unsplash.com/wQLAGv4_OYs"
          loading="lazy"
          alt=""
        />
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

      <div className="xt-media-container bg-gray-200 pb-[37.5%]">
        <img
          className="xt-media object-cover object-center"
          src="https://source.unsplash.com/Tyg0rVhOTrE"
          loading="lazy"
          alt=""
        />
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

      <div className="xt-media-container bg-gray-200 pb-[37.5%]">
        <img
          className="xt-media object-cover object-center"
          src="https://source.unsplash.com/wEL2zPX3jDg"
          loading="lazy"
          alt=""
        />
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

      <div className="xt-media-container bg-gray-200 pb-[37.5%]">
        <img
          className="xt-media object-cover object-center"
          src="https://source.unsplash.com/wQLAGv4_OYs"
          loading="lazy"
          alt=""
        />
      </div>
    </div>
  )
}

/* mountParallax */

const mountParallax = ({ ref }) => {
  // init

  parallax({ ref })

  // unmount

  return () => {}
}

/* parallax */

const parallax = ({ ref }) => {
  // check if already done for content added dinamically

  const items = ref.querySelectorAll('.xt-media-container')
  for (const item of items) {
    item.classList.add('parallaxed')

    // vars

    const media = item.querySelector('.xt-media')
    const percent = 20 // percent value of displacement
    const height = 100 + percent * 2 // make bigger with percent
    const translate = (percent * height) / 100 // total translate

    // inject

    if (item && !item.closest('.overflow-hidden')) {
      item.classList.add('overflow-hidden')
    }

    // scrollTrigger

    const scrollTrigger = {
      trigger: item,
      start: () => {
        // full range of animation also on top of the page
        const start = window.innerHeight - item.offsetTop
        return `top${start > 0 ? `+=${start}` : ''} bottom`
      },
      end: () => {
        // full range of animation also on bottom of the page
        const end = window.innerHeight - document.scrollingElement.scrollHeight + item.offsetTop + item.offsetHeight
        return `bottom${end > 0 ? `-=${end}` : ''} top`
      },
      scrub: 1,
    }

    gsap.set(media, {
      height: `${height}%`,
    })

    gsap
      .timeline({
        scrollTrigger: scrollTrigger,
      })
      .to(media, {
        y: `-${translate}%`,
        ease: 'quint.inOut',
      })
  }
}

/* mount */

const mount = ({ ref }) => {
  const unmountParallax = mountParallax({ ref })

  // unmount

  return () => {
    unmountParallax()
  }
}
