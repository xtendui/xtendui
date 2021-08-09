import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/* sticky header */

Xt.mount({
  matches: '.gatsby_home-header',
  mount: ({ ref }) => {
    // vars

    const sticky = ref
    const background = ref.querySelector('.gatsby_home-header_background rect')
    const inner = ref.querySelector('.gatsby_logo-icon')

    // methods

    const straight = () => {
      gsap.killTweensOf(background)
      gsap.to(background, {
        rx: '0%',
        duration: 0.5,
        ease: 'quart.out',
      })
    }

    const curve = () => {
      if (!sticky.classList.contains('scrolling-down')) {
        gsap.killTweensOf(background)
        gsap.to(background, {
          rx: '50%',
          duration: 0.5,
          ease: 'quart.out',
        })
      }
    }

    // mouse events

    sticky.addEventListener('mouseenter', straight)

    sticky.addEventListener('mouseleave', curve)

    // hide depending on inner (always before pin ScrollTrigger)

    ScrollTrigger.create({
      trigger: sticky,
      start: -1, // needs -1 because start trigger is sticky
      end: () => `top top-=${sticky.offsetHeight}`,
      onUpdate: self => {
        if (self.isActive && self.direction < 0 && sticky.classList.contains('scrolling-hide')) {
          sticky.classList.remove('scrolling-hide')
          curve()
        } else if (!self.isActive && self.direction > 0 && !sticky.classList.contains('scrolling-hide')) {
          sticky.classList.add('scrolling-hide')
          straight()
        }
      },
    })

    // sticky

    ScrollTrigger.create({
      trigger: sticky,
      start: 'top top',
      endTrigger: 'html',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      onUpdate: self => {
        // scrolling-down depending on scroll direction
        if (!self.getVelocity()) return // skip on initial
        if (
          sticky.classList.contains('scrolling-down') &&
          sticky.classList.contains('scrolling-hide') &&
          self.direction < 0
        ) {
          sticky.classList.remove('scrolling-down')
          gsap.killTweensOf(sticky)
          gsap.to(sticky, {
            top: 0,
            duration: 0.5,
            ease: 'quart.out',
          })
          curve()
        } else if (
          !sticky.classList.contains('scrolling-down') &&
          sticky.classList.contains('scrolling-hide') &&
          self.direction > 0
        ) {
          sticky.classList.add('scrolling-down')
          gsap.killTweensOf(sticky)
          gsap.to(sticky, {
            top: -(inner.offsetTop + inner.offsetHeight),
            duration: 0.5,
            ease: 'quart.out',
          })
          straight()
        }
      },
    })
  },
})

/* parallax head */

Xt.mount({
  matches: '.gatsby_home-main_head',
  mount: ({ ref }) => {
    // sticky

    const heroParallax = {
      trigger: ref,
      start: 0,
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: 0.5,
    }

    gsap.set(ref, {
      transformOrigin: 'top center',
    })

    gsap.to(ref, {
      scrollTrigger: heroParallax,
      scale: '0.9',
      opacity: 0,
      ease: 'quart.out',
    })
  },
})

/* fade items */

Xt.mount({
  matches: '.gatsby_home-main',
  mount: ({ ref }) => {
    // vars

    const scrollY = 15
    const scrollScale = 1.04

    // check if already done for content added dinamically

    const items = ref.querySelectorAll('.gatsby_home-main_scroll:not(.faded)')
    for (const item of items) {
      item.classList.add('faded')
    }

    // fade

    ScrollTrigger.batch(items, {
      once: true,
      start: 'top bottom-=10%',
      end: 'bottom top+=10%',
      onEnter: (batch, scrollTriggers) => {
        const direction = scrollTriggers[0].direction
        const y = direction > 0 ? -scrollY : scrollY
        gsap.killTweensOf(batch)
        gsap.set(batch, {
          y: y,
          scale: scrollScale,
        })
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: 'quart.out',
          stagger: index => {
            return Math.min(index * 0.15, 0.6)
          },
        })
      },
    })
  },
})
