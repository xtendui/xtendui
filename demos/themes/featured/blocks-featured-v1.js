import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/**
 * .button--line and media hover
 */

Xt.mount.push({
  matches: '#iframe--blocks-featured-v1 .button--line',
  mount: ({ object }) => {
    // vars

    const link = object.tagName === 'a' || object.tagName === 'button' ? object : object.closest('a, button')
    const mediaScale = 0.03
    const mediaOpacityIn = 0.75
    const mediaOpacityOut = 1
    const lineOpacity = 0.4
    const lineX = 15
    const lineWidth = 15
    const lineWidthMax = 150

    // enter

    const eventEnter = () => {
      // media
      const media = link.querySelector('.xt-media-container')
      gsap.to(media, {
        opacity: mediaOpacityIn,
        scale: 1 - mediaScale,
        duration: 1,
        ease: 'expo.out',
      })
      const mediaInner = link.querySelector('.xt-media-inner')
      gsap.to(mediaInner, {
        scale: 1 + mediaScale,
        duration: 1,
        ease: 'expo.out',
      })
      // text
      const text = object.querySelector('.button--line-content')
      gsap.to(text, { x: lineX, duration: 1, delay: 0.5, ease: 'expo.out' })
      // line
      const line = object.querySelector('.button--line-design')
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

    link.addEventListener('mouseenter', eventEnter)

    // enter

    const eventLeave = () => {
      // media
      const media = link.querySelector('.xt-media-container')
      gsap.to(media, {
        opacity: mediaOpacityOut,
        scale: 1,
        duration: 1,
        ease: 'expo.inOut',
      })
      const mediaInner = link.querySelector('.xt-media-inner')
      gsap.to(mediaInner, { scale: 1, duration: 1, ease: 'expo.inOut' })
      // text
      const text = object.querySelector('.button--line-content')
      gsap.to(text, { x: 0, duration: 1, ease: 'expo.inOut' })
      // line
      const line = object.querySelector('.button--line-design')
      gsap.to(line, {
        width: lineWidth,
        x: 0,
        opacity: lineOpacity,
        duration: 1,
        ease: 'expo.inOut',
        overwrite: true,
      })
    }

    link.addEventListener('mouseleave', eventLeave)
  },
})

/**
 * .featured-item parallax
 */

Xt.mount.push({
  matches: '#iframe--blocks-featured-v1 .featured-item',
  mount: ({ object }) => {
    // vars

    const content = object.querySelector('.featured-content')
    const contentY = '20'

    const media = object.querySelector('.xt-media-container')
    const mediaY = '50'

    const asset = media.querySelector('.xt-media')
    const assetScale = 0.5

    // parallax

    const scrollTrigger = {
      trigger: object,
      start: () => {
        // full range of animation also on top of the page
        const start = window.innerHeight - object.offsetTop
        return `top${start > 0 ? `+=${start}` : ''} bottom`
      },
      end: () => {
        // full range of animation also on bottom of the page
        const end = window.innerHeight - document.scrollingElement.scrollHeight + object.offsetTop + object.offsetHeight
        return `bottom${end > 0 ? `-=${end}` : ''} top`
      },
      scrub: 1.5,
    }

    gsap.set(content, { y: -contentY })
    gsap
      .timeline({
        scrollTrigger: scrollTrigger,
      })
      .to(content, {
        y: contentY,
      })

    gsap.set(media, { y: -mediaY })
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
      .to(asset, {
        scale: 1 + assetScale,
      })
  },
})
