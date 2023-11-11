import { Xt } from 'xtendui'
import 'xtendui/src/infinitescroll'

/* mountInfinitescroll */

const mountInfinitescroll = ({ ref }) => {
  // vars

  const infinitescroll = ref.querySelector('.infinitescroll')

  // init

  /***/
  let selfDestroy
  new Xt.Infinitescroll(infinitescroll, {
    get: false, // put here your url parameter as string
    max: 4,
    elements: {
      itemsContainer: '[data-xt-infinitescroll-items-container]',
      item: ':scope > *',
      scrollUp: '[data-xt-infinitescroll-up]',
      scrollDown: '[data-xt-infinitescroll-down]',
      spaceAdditional: '[data-xt-infinitescroll-up]',
      pagination: '[data-xt-infinitescroll-pagination]',
    },
    events: {
      // activated by switcher
      //scrollUp: true,
      //scrollDown: true,
    },
  }).then(self => {
    // destroy

    selfDestroy = () => {
      self.destroy()
      self = null
    }
  })
  /***/

  // unmount

  return () => {
    selfDestroy()
  }
}

/* mountSwitcher */

const mountSwitcher = ({ ref }) => {
  /* switcher for demo purpose remove this */

  // vars

  const infinitescroll = ref.querySelector('.infinitescroll')
  const switcher = ref.querySelector('input[type="checkbox"]')

  // change

  const change = () => {
    Xt.get({ name: 'xt-infinitescroll', el: infinitescroll }).then(self => {
      if (switcher.checked) {
        self.options.events.scrollUp = true
        self.options.events.scrollDown = true
      } else {
        self.options.events.scrollUp = false
        self.options.events.scrollDown = false
      }
      self.reinit()
    })
  }

  switcher.addEventListener('change', change)

  requestAnimationFrame(() => {
    change()
  })

  // unmount

  return () => {}
}

/* mount */

Xt.mount({
  matches: '.demo--infinitescroll',
  mount: ({ ref }) => {
    const unmountInfinitescroll = mountInfinitescroll({ ref })
    const unmountSwitcher = mountSwitcher({ ref })

    // unmount

    return () => {
      unmountInfinitescroll()
      unmountSwitcher()
    }
  },
})
