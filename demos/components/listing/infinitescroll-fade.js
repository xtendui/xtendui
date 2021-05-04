import { Xt } from 'xtendui'
import 'xtendui/src/infinitescroll'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount({
  matches: '.demo--infinitescroll-fade',
  mount: ({ ref }) => {
    const unmountInfinitescroll = mountInfinitescroll({ ref })
    const unmountSwitcher = mountSwitcher({ ref })
    const unmountFade = mountFade({ ref })

    // unmount

    return () => {
      unmountInfinitescroll()
      unmountSwitcher()
      unmountFade()
    }
  },
})

/* mountInfinitescroll */

const mountInfinitescroll = ({ ref }) => {
  // vars

  const infinitescroll = ref.querySelector('.infinitescroll')

  // init

  let self = new Xt.Infinitescroll(infinitescroll, {
    get: false,
    max: 4,
    elements: {
      itemsContainer: '.xt-row',
      item: ':scope > *',
      scrollUp: '[data-xt-infinitescroll-up]',
      scrollDown: '[data-xt-infinitescroll-down]',
      spaceAdditional: '[data-xt-infinitescroll-up]',
      pagination: '[data-xt-infinitescroll-pagination]',
    },
    // activated by switcher
    //scrollUp = true,
    //scrollDown = true,
  })

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mountSwitcher */

const mountSwitcher = ({ ref }) => {
  // vars

  const infinitescroll = ref.querySelector('.infinitescroll')
  const switcher = ref.querySelector('input[type="checkbox"]')

  // change

  const change = () => {
    const self = Xt.get('xt-infinitescroll', infinitescroll)
    if (self) {
      if (switcher.checked) {
        self.options.events.scrollUp = true
        self.options.events.scrollDown = true
      } else {
        self.options.events.scrollUp = false
        self.options.events.scrollDown = false
      }
      self.destroy()
      self.reinit()
    }
  }

  switcher.addEventListener('change', change)

  requestAnimationFrame(() => {
    change()
  })

  // unmount

  return () => {}
}

/* mountFade */

const mountFade = ({ ref }) => {
  // vars

  const infinitescroll = ref.querySelector('.infinitescroll')

  // populate

  const self = Xt.get('xt-infinitescroll', infinitescroll)

  const populate = () => {
    fade({ ref: self.object })
  }

  self.object.addEventListener('populate.xt.infinitescroll', populate)

  // init

  fade({ ref })

  // unmount

  return () => {}
}

/* fade */

const fade = ({ ref }) => {
  // vars

  const scrollY = 30

  // check if already done for content added dinamically

  const items = ref.querySelectorAll('.listing-item:not(.faded)')
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
      })
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'quart.out',
        stagger: index => {
          return Math.min(index * 0.15, 0.6)
        },
      })
    },
  })
}
