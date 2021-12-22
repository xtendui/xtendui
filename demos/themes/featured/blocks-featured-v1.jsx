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
    <div className="demo--blocks-featured-v1-react" ref={ref}>
      <div className="*** featured *** inline-block w-full bg-primary-900 text-white xt-links-inverse">
        <a href="#" className="*** featured-item *** block my-28">
          <div className="container">
            <div className="xt-row items-center">
              <div className="w-full md:w-5/12 z-0">
                <div className="*** xt-media-container *** bg-gray-500 pb-[75%] overflow-hidden">
                  <img className="*** xt-media *** object-cover" src="/img.svg" loading="lazy" alt="" />
                </div>
              </div>
              <div className="w-full md:w-7/12 z-10">
                <div className="*** featured-content *** pt-16 md:pt-0 md:pl-12">
                  <div className="xt-h1 mb-6 md:-ml-32">Lorem ipsum</div>
                  <div className="leading-loose">
                    <p>
                      <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit
                      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue,
                      sagittis vitae magna eget, vehicula scelerisque elit.
                    </p>
                    <div className="xt-button *** button--line px-0 text-xs font-medium leading-snug tracking-wider uppercase ***">
                      <span className="*** button--line-design absolute left-0 w-4 border-t border-current opacity-50 ***"></span>
                      <span className="*** button--line-content pl-8 ***"> Discover </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a href="#" className="*** featured-item *** block my-28">
          <div className="container">
            <div className="xt-row items-center">
              <div className="w-full md:w-5/12 z-0 sm:order-2">
                <div className="*** xt-media-container *** bg-gray-500 pb-[75%] overflow-hidden">
                  <img className="*** xt-media *** object-cover" src="/img.svg" loading="lazy" alt="" />
                </div>
              </div>
              <div className="w-full md:w-7/12 z-10 sm:order-1">
                <div className="*** featured-content *** pt-16 md:pt-0 md:pr-12">
                  <div className="xt-h1 mb-6">Dolor sit amet</div>
                  <div className="leading-loose md:-mr-32 md:pl-12">
                    <p>
                      <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit
                      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue,
                      sagittis vitae magna eget, vehicula scelerisque elit.
                    </p>
                    <div className="xt-button *** button--line px-0 text-xs font-medium leading-snug tracking-wider uppercase ***">
                      <span className="*** button--line-design absolute left-0 w-4 border-t border-current opacity-50 ***"></span>
                      <span className="*** button--line-content pl-8 ***"> Discover </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a href="#" className="*** featured-item *** block my-28">
          <div className="container">
            <div className="xt-row items-center">
              <div className="w-full md:w-5/12 z-0">
                <div className="*** xt-media-container *** bg-gray-500 pb-[75%] overflow-hidden">
                  <img className="*** xt-media *** object-cover" src="/img.svg" loading="lazy" alt="" />
                </div>
              </div>
              <div className="w-full md:w-7/12 z-10">
                <div className="*** featured-content *** pt-16 md:pt-0 md:pl-12">
                  <div className="xt-h1 mb-6 md:-ml-32">Consectetur adipiscing elit</div>
                  <div className="leading-loose">
                    <p>
                      <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit
                      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue,
                      sagittis vitae magna eget, vehicula scelerisque elit.
                    </p>
                    <div className="xt-button *** button--line px-0 text-xs font-medium leading-snug tracking-wider uppercase ***">
                      <span className="*** button--line-design absolute left-0 w-4 border-t border-current opacity-50 ***"></span>
                      <span className="*** button--line-content pl-8 ***"> Discover </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="*** featured *** inline-block w-full bg-white">
        <a href="#" className="*** featured-item *** block my-28">
          <div className="container">
            <div className="xt-row items-center">
              <div className="w-full md:w-5/12 z-0 sm:order-2">
                <div className="*** xt-media-container *** bg-gray-500 pb-[75%] overflow-hidden">
                  <img className="*** xt-media *** object-cover" src="/img.svg" loading="lazy" alt="" />
                </div>
              </div>
              <div className="w-full md:w-7/12 z-10">
                <div className="*** featured-content *** pt-16 md:pt-0 md:pr-12 md:text-right sm:order-1">
                  <div className="xt-h1 mb-6 md:-mr-32">Lorem ipsum</div>
                  <div className="leading-loose">
                    <p>
                      <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit
                      eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue,
                      sagittis vitae magna eget, vehicula scelerisque elit.
                    </p>
                    <div className="xt-button *** button--line px-0 text-xs font-medium leading-snug tracking-wider uppercase ***">
                      <span className="*** button--line-design absolute left-0 w-4 border-t border-current opacity-50 ***"></span>
                      <span className="*** button--line-content pl-8 ***"> Discover </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

/* mountItemParallax */

const mountItemsParallax = ({ ref }) => {
  // vars

  const items = ref.querySelectorAll('.featured-item')

  for (const item of items) {
    // vars

    const content = item.querySelector('.featured-content')
    const contentY = '20'

    const media = item.querySelector('.xt-media-container')
    const mediaY = '50'

    const img = media.querySelector('.xt-media')
    const imgScale = 0.5

    // parallax

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

    gsap.set(content, {
      y: -contentY,
    })
    gsap
      .timeline({
        scrollTrigger: scrollTrigger,
      })
      .to(content, {
        y: contentY,
      })

    gsap.set(media, {
      y: -mediaY,
    })
    gsap
      .timeline({
        scrollTrigger: scrollTrigger,
      })
      .to(media, {
        y: mediaY,
      })

    gsap
      .timeline({
        scrollTrigger: scrollTrigger,
      })
      .to(img, {
        scale: 1 + imgScale,
      })
  }

  // unmount

  return () => {}
}

/* mountButtonsLine */

const mountButtonsLine = ({ ref }) => {
  const buttonsLine = ref.querySelectorAll('.button--line')

  for (const buttonLine of buttonsLine) {
    // vars

    const link = buttonLine.closest('a, button')
    const mediaScale = 0.04
    const mediaOpacityIn = 0.75
    const mediaOpacityOut = 1
    const lineOpacity = 0.4
    const lineX = 15
    const lineWidth = 15
    const lineWidthMax = 150

    // enter

    const enter = () => {
      // media
      const media = link.querySelector('.xt-media-container')
      gsap.killTweensOf(media)
      gsap.to(media, {
        opacity: mediaOpacityIn,
        scale: 1 - mediaScale,
        duration: 1,
        ease: 'expo.out',
      })
      const mediaInner = link.querySelector('.xt-media')
      gsap.killTweensOf(mediaInner)
      gsap.to(mediaInner, {
        scale: 1 + mediaScale,
        duration: 1,
        ease: 'expo.out',
      })
      // content
      const content = buttonLine.querySelector('.button--line-content')
      gsap.killTweensOf(content)
      gsap.to(content, {
        x: lineX,
        duration: 1,
        delay: 0.5,
        ease: 'expo.out',
      })
      // line
      const line = buttonLine.querySelector('.button--line-design')
      gsap.killTweensOf(line)
      gsap.set(line, {
        width: 0,
        x: -lineWidthMax,
        opacity: lineOpacity,
        overwrite: true,
      })
      gsap.to(line, {
        width: lineWidthMax,
        x: -lineWidthMax + lineWidth,
        opacity: 1,
        duration: 0.5,
        ease: 'expo.in',
      })
      gsap.to(line, {
        width: lineWidth + lineX,
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: 'expo.out',
      })
    }

    link.addEventListener('mouseenter', enter)

    // enter

    const leave = () => {
      // media
      const media = link.querySelector('.xt-media-container')
      gsap.killTweensOf(media)
      gsap.to(media, {
        opacity: mediaOpacityOut,
        scale: 1,
        duration: 1,
        ease: 'expo.inOut',
      })
      const mediaInner = link.querySelector('.xt-media')
      gsap.killTweensOf(mediaInner)
      gsap.to(mediaInner, {
        scale: 1,
        duration: 1,
        ease: 'expo.inOut',
      })
      // content
      const content = link.querySelector('.button--line-content')
      gsap.killTweensOf(content)
      gsap.to(content, {
        x: 0,
        duration: 1,
        ease: 'expo.inOut',
      })
      // line
      const line = link.querySelector('.button--line-design')
      gsap.killTweensOf(line)
      gsap.to(line, {
        width: lineWidth,
        x: 0,
        opacity: lineOpacity,
        duration: 1,
        ease: 'expo.inOut',
        overwrite: true,
      })
    }

    link.addEventListener('mouseleave', leave)
  }

  // unmount

  return () => {}
}

/* mount */

const mount = ({ ref }) => {
  const unmountItemsParallax = mountItemsParallax({ ref })
  const unmountButtonsLine = mountButtonsLine({ ref })

  // unmount

  return () => {
    unmountItemsParallax()
    unmountButtonsLine()
  }
}
