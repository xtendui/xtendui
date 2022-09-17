import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
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
        scale: 1 - mediaScale,
        duration: 1,
        ease: 'expo.out',
      })
      const mediaInner = link.querySelector('.xt-media')
      gsap.killTweensOf(mediaInner)
      gsap.to(mediaInner, {
        opacity: mediaOpacityIn,
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
        scale: 1,
        duration: 1,
        ease: 'expo.out',
      })
      const mediaInner = link.querySelector('.xt-media')
      gsap.killTweensOf(mediaInner)
      gsap.to(mediaInner, {
        opacity: mediaOpacityOut,
        scale: 1,
        duration: 1,
        ease: 'expo.out',
      })
      // content
      const content = link.querySelector('.button--line-content')
      gsap.killTweensOf(content)
      gsap.to(content, {
        x: 0,
        duration: 1,
        ease: 'expo.out',
      })
      // line
      const line = link.querySelector('.button--line-design')
      gsap.killTweensOf(line)
      gsap.to(line, {
        width: lineWidth,
        x: 0,
        opacity: lineOpacity,
        duration: 1,
        ease: 'expo.out',
        overwrite: true,
      })
    }

    link.addEventListener('mouseleave', leave)
  }

  // unmount

  return () => {}
}

/* mount */

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
