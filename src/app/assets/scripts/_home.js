import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* sticky header (must be before .docs_home-feature pin spacing or android bugs position of .docs_home-feature pins) */

Xt.mount({
  matches: '.docs_home-header',
  mount: ({ ref }) => {
    // vars

    const sticky = ref
    const background = ref.querySelector('.docs_home-header_background rect')
    const inner = ref.querySelector('.docs_site-header_logo')

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
      if (!sticky.classList.contains('scrolling-hide')) {
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

    const updateHide = ({ self, refresh } = {}) => {
      if (self.isActive && self.direction < 0 && (refresh || sticky.classList.contains('scrolling-hide'))) {
        sticky.classList.remove('scrolling-hide')
        gsap.killTweensOf(sticky)
        gsap.to(sticky, {
          y: 0,
          duration: refresh ? 0 : 0.5,
          ease: 'quart.out',
        })
        curve()
      } else if (!self.isActive && self.direction > 0 && (refresh || !sticky.classList.contains('scrolling-hide'))) {
        sticky.classList.add('scrolling-hide')
        gsap.killTweensOf(sticky)
        gsap.to(sticky, {
          y: -(inner.offsetTop + inner.offsetHeight),
          duration: refresh ? 0 : 0.5,
          ease: 'quart.out',
        })
        straight()
      }
    }

    ScrollTrigger.create({
      trigger: sticky,
      start: -1, // needs -1 because start trigger is sticky
      end: () => `top top-=${sticky.offsetHeight}`,
      invalidateOnRefresh: true,
      onUpdate: self => {
        updateHide({ self })
      },
      onRefresh: self => {
        // need to update on refresh done
        requestAnimationFrame(() => {
          updateHide({ self, refresh: true })
        })
      },
    })

    // sticky

    ScrollTrigger.create({
      trigger: sticky,
      start: 'top top',
      endTrigger: 'html',
      end: 'bottom+=999999 top', // fix .docs_home-feature pin spacing
      pin: true,
      pinSpacing: false,
    })
  },
})

/* parallax head */

Xt.mount({
  matches: '.docs_home-main_head',
  mount: ({ ref }) => {
    // sticky

    const parallax = {
      trigger: ref,
      start: 0,
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: true,
    }

    gsap.set(ref, {
      transformOrigin: 'top center',
    })

    gsap.to(ref, {
      scrollTrigger: parallax,
      scale: 0.9,
      opacity: 0,
      ease: 'quart.out',
    })
  },
})

/* parallax feature */

Xt.mount({
  matches: '.docs_home-feature',
  mount: ({ ref }) => {
    // match media

    // vars

    const videos = ref.querySelectorAll('.docs_home-feature_video')
    const videoFirst = ref.querySelector('.docs_home-feature_video:first-child')
    const videoLast = ref.querySelector('.docs_home-feature_video:last-child')
    const text = ref.querySelectorAll('.docs_home-feature_text')

    // videos

    for (const video of videos) {
      // sticky

      ScrollTrigger.create({
        trigger: video,
        start: () => (gsap.matchMedia('(max-width: 767px)').matches ? 'center-=40% center' : 'center center'),
        end: () => (gsap.matchMedia('(max-width: 767px)').matches ? 'center-=40% top' : 'center top'),
        pin: true,
        pinSpacing: true,
        onEnter: () => {
          gsap.killTweensOf(video)
          gsap.to(video, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'quart.out',
          })
        },
        onLeave: () => {
          if (video === videoLast) {
            return
          }
          gsap.killTweensOf(video)
          gsap.to(video, {
            opacity: 0,
            scale: 0.9,
            duration: 1,
            ease: 'quart.out',
          })
        },
        onEnterBack: () => {
          gsap.killTweensOf(video)
          gsap.to(video, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'quart.out',
          })
        },
        onLeaveBack: () => {
          if (video === videoFirst) {
            return
          }
          gsap.killTweensOf(video)
          gsap.to(video, {
            opacity: 0,
            scale: 0.9,
            duration: 1,
            ease: 'quart.out',
          })
        },
      })

      // setup

      if (video !== videoFirst) {
        gsap.set(video, {
          opacity: 0,
          scale: 0.9,
        })
      }
    }

    // text

    ScrollTrigger.create({
      trigger: text,
      start: () => (gsap.matchMedia('(max-width: 767px)').matches ? 'center+=100% center' : 'center center'),
      endTrigger: videoLast.closest('.pin-spacer')?.previousSibling,
      end: () => (gsap.matchMedia('(max-width: 767px)').matches ? 'center-=40% top' : 'center top'),
      pin: true,
      pinSpacing: false,
    })
  },
})

/* fade items */

Xt.mount({
  matches: '.docs_home-main',
  mount: ({ ref }) => {
    // vars

    const scrollY = 15
    const scrollScale = 1.04

    // check if already done for content added dinamically

    const items = ref.querySelectorAll('.docs_home-main_scroll:not(.faded)')
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
            return Math.min(0.6, index * 0.15)
          },
        })
      },
    })
  },
})
