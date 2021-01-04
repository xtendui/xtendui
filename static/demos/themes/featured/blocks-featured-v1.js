import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/**
 * .btn-line and media scale
 */

Xt.mount.push({
  matches: '#iframe--blocks-featured-v1 .btn-line',
  mount: object => {
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
      const media = link.querySelector('.media-container')
      gsap.to(media, { opacity: mediaOpacityIn, scale: 1 - mediaScale, duration: 1, ease: 'expo.out' })
      const mediaInner = link.querySelector('.media-inner')
      gsap.to(mediaInner, { scale: 1 + mediaScale, duration: 1, ease: 'expo.out' })
      // text
      const text = object.querySelector('.btn-line-content')
      gsap.to(text, { x: lineX, duration: 1, delay: 0.5, ease: 'expo.out' })
      // line
      const line = object.querySelector('.btn-line-design')
      gsap.set(line, { width: 0, x: -lineWidthMax, opacity: lineOpacity, overwrite: true })
      gsap.to(line, { width: lineWidthMax, x: -lineWidthMax + lineWidth, opacity: 1, duration: 0.5, ease: 'expo.in' })
      gsap.to(line, { width: lineWidth + lineX, x: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'expo.out' })
    }

    link.addEventListener('mouseenter', eventEnter)

    // enter

    const eventLeave = () => {
      // media
      const media = link.querySelector('.media-container')
      gsap.to(media, { opacity: mediaOpacityOut, scale: 1, duration: 1, ease: 'expo.inOut' })
      const mediaInner = link.querySelector('.media-inner')
      gsap.to(mediaInner, { scale: 1, duration: 1, ease: 'expo.inOut' })
      // text
      const text = object.querySelector('.btn-line-content')
      gsap.to(text, { x: 0, duration: 1, ease: 'expo.inOut' })
      // line
      const line = object.querySelector('.btn-line-design')
      gsap.to(line, { width: lineWidth, x: 0, opacity: lineOpacity, duration: 1, ease: 'expo.inOut', overwrite: true })
    }

    link.addEventListener('mouseleave', eventLeave)
  },
})

/**
 * .featured-item
 */

Xt.mount.push({
  matches: '#iframe--blocks-featured-v1 .featured-item',
  mount: object => {
    // vars

    const content = object.querySelector('.featured-content')
    const contentY = '20'

    const media = object.querySelector('.media-container')
    const mediaY = '50'

    const asset = media.querySelector('.media')
    const assetScale = 0.5

    // parallax

    const featuredParallax = {
      trigger: object,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 2,
    }

    // content

    gsap.set(content, { y: -contentY })

    gsap.to(content, {
      scrollTrigger: featuredParallax,
      y: contentY,
    })

    // media

    gsap.set(media, { y: -mediaY })

    gsap.to(media, {
      scrollTrigger: featuredParallax,
      y: mediaY,
    })

    // asset

    gsap.to(asset, {
      scrollTrigger: featuredParallax,
      scale: 1 + assetScale,
    })
  },
})
