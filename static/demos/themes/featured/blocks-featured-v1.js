import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount({
  matches: '.demo--blocks-featured-v1',
  mount: ({ ref }) => {
    const unmountItemsParallax = mountItemsParallax({ ref })
    const unmountButtonsLine = mountButtonsLine({ ref })

    // unmount

    return () => {
      unmountItemsParallax()
      unmountButtonsLine()
    }
  },
})

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
      scrub: 1.5,
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
      gsap.to(media, {
        opacity: mediaOpacityIn,
        scale: 1 - mediaScale,
        duration: 1,
        ease: 'expo.out',
      })
      const mediaInner = link.querySelector('.xt-media')
      gsap.to(mediaInner, {
        scale: 1 + mediaScale,
        duration: 1,
        ease: 'expo.out',
      })
      // text
      const text = buttonLine.querySelector('.button--line-content')
      gsap.to(text, {
        x: lineX,
        duration: 1,
        delay: 0.5,
        ease: 'expo.out',
      })
      // line
      const line = buttonLine.querySelector('.button--line-design')
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
      gsap.to(media, {
        opacity: mediaOpacityOut,
        scale: 1,
        duration: 1,
        ease: 'expo.inOut',
      })
      const mediaInner = link.querySelector('.xt-media')
      gsap.to(mediaInner, {
        scale: 1,
        duration: 1,
        ease: 'expo.inOut',
      })
      // text
      const text = ref.querySelector('.button--line-content')
      gsap.to(text, {
        x: 0,
        duration: 1,
        ease: 'expo.inOut',
      })
      // line
      const line = ref.querySelector('.button--line-design')
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
