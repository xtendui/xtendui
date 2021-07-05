import { Xt } from 'xtendui'
import 'xtendui/src/drop'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--menu-navigation-v1',
  mount: ({ ref }) => {
    const unmountDrops = mountDrops({ ref })
    const unmountLine = mountLine({ ref })
    const unmountSwitcher = mountSwitcher({ ref })

    // unmount

    return () => {
      unmountDrops()
      unmountLine()
      unmountSwitcher()
    }
  },
})

/* mountDrops */

const mountDrops = ({ ref }) => {
  // vars

  const megamenu = ref.querySelector('.megamenu')

  const contentXOn = -40
  const contentXOff = -40
  const contentTime = 0.75
  const contentDelayOn = 0.25
  const contentEase = 'quint.out'

  const designTime = 1
  const designDelayOff = 0.1 // fix opacity when changing fast
  const designEase = 'expo.out'

  const innerTime = 1
  const innerEase = 'expo.out'

  let innerHeightFinal = 0
  let innerHeightCache = 0

  // init

  /***/
  let self = new Xt.Drop(megamenu, {
    queue: false,
    duration: 1000,
    preventEvent: true,
    // activated by switcher
    //on: 'mouseenter',
    //off: 'mouseleave',
    //delay: 150,
  })
  /***/

  // setup

  for (const tr of self.targets) {
    const inner = tr.querySelector('[data-xt-drop-inner]')
    gsap.set(inner, {
      height: 0,
    })
  }

  // on

  const on = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // content
      const content = tr.querySelector('.xt-drop-content')
      gsap.killTweensOf(content)
      gsap.set(content, {
        x: contentXOn * self.direction,
        opacity: 0,
      })
      gsap.to(content, {
        x: 0,
        opacity: 1,
        duration: contentTime,
        delay: contentDelayOn,
        ease: contentEase,
      })
      // design
      const design = tr.querySelector('.xt-design')
      gsap.killTweensOf(design)
      gsap.set(design, {
        opacity: 1,
      })
      // inner
      const inner = tr.querySelector('[data-xt-drop-inner]')
      gsap.killTweensOf(inner)
      gsap.set(inner, {
        height: '',
      })
      const innerHeight = inner.clientHeight
      innerHeightFinal = innerHeight
      gsap.set(inner, {
        height: innerHeightCache,
      })
      gsap
        .to(inner, {
          height: innerHeight,
          duration: innerTime,
          ease: innerEase,
        })
        .eventCallback('onUpdate', () => {
          innerHeightCache = inner.clientHeight
        })
      /***/
      // when sequential interaction
      if (self.direction) {
        // not current targets
        for (const tr of self.targets.filter(x => !self.hasCurrent(x))) {
          // inner
          const inner = tr.querySelector('[data-xt-drop-inner]')
          gsap.killTweensOf(inner)
          gsap.set(inner, {
            height: innerHeightCache,
          })
          gsap.to(inner, {
            height: innerHeightFinal,
            duration: innerTime,
            ease: innerEase,
          })
        }
      }
      /***/
    }
  }

  self.object.addEventListener('on.xt.drop', on, true)

  // off

  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // content
      const content = tr.querySelector('.xt-drop-content')
      gsap.killTweensOf(content)
      gsap.to(content, {
        x: contentXOff * self.direction * -1,
        opacity: 0,
        duration: contentTime,
        ease: contentEase,
      })
      // design
      const design = tr.querySelector('.xt-design')
      gsap.killTweensOf(design)
      gsap.to(design, {
        opacity: 0,
        duration: designTime,
        ease: designEase,
        delay: designDelayOff,
      })
      /***/
      // when not sequential interaction
      if (!self.direction) {
        // inner
        const inner = tr.querySelector('[data-xt-drop-inner]')
        gsap.killTweensOf(inner)
        gsap
          .to(inner, {
            height: 0,
            duration: innerTime,
            ease: innerEase,
          })
          .eventCallback('onUpdate', () => {
            innerHeightCache = inner.clientHeight
          })
      }
      /***/
    }
  }

  self.object.addEventListener('off.xt.drop', off, true)

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mountLine */

const mountLine = ({ ref }) => {
  // vars

  const megamenu = ref.querySelector('.megamenu')
  const btns = ref.querySelectorAll('.button--line')
  const drops = ref.querySelectorAll('[data-xt-drop-element]')
  const line = ref.querySelector('.megamenu-line')

  const dropDelay = 150
  const lineHeight = 7
  const lineTime = 0.5
  const lineEase = 'quint.out'
  let lineFirst = true
  /***/
  let btnOn = false
  /***/

  // enter

  const enter = e => {
    let el = e.target
    /***/
    if (e.type === 'on.xt.drop') {
      el = el.closest('[data-xt-drop-element]').querySelector(':scope > .button--line')
    } else {
      btnOn = true
    }
    /***/
    // line
    const lineX = el.offsetLeft
    const lineY = el.offsetTop + el.offsetHeight
    const lineWidth = el.offsetWidth
    if (lineFirst) {
      gsap.set(line, {
        x: lineX,
        y: lineY,
        width: lineWidth,
        height: 0,
        opacity: 0,
      })
      lineFirst = false
    }
    gsap.to(line, {
      x: lineX,
      y: lineY - lineHeight,
      width: lineWidth,
      height: lineHeight,
      opacity: 1,
      duration: lineTime,
      ease: lineEase,
    })
  }

  for (const btn of btns) {
    btn.addEventListener('mouseenter', enter)
  }

  for (const drop of drops) {
    drop.addEventListener('on.xt.drop', enter)
  }

  // leave

  const leave = e => {
    let el = e.target
    /***/
    if (e.type === 'off.xt.drop') {
      el = el.closest('[data-xt-drop-element]').querySelector(':scope > .button--line')
    } else {
      btnOn = false
    }
    /***/
    /***/
    // same delay as drop
    /***/
    setTimeout(() => {
      /***/
      // when one button still hover
      if (btnOn) {
        return
      }
      /***/
      // check open drops
      const self = Xt.get('xt-drop', megamenu)
      const dropBtnActive = self.elements.filter(x => self.hasCurrent(x))[0]
      if (dropBtnActive) {
        /***/
        // when one drop still open
        /***/
        const lineX = dropBtnActive.offsetLeft
        const lineY = dropBtnActive.offsetTop + dropBtnActive.offsetHeight
        const lineWidth = dropBtnActive.offsetWidth
        gsap.to(line, {
          x: lineX,
          y: lineY - lineHeight,
          width: lineWidth,
          height: lineHeight,
          opacity: 1,
          duration: lineTime,
          ease: lineEase,
        })
      } else {
        /***/
        // when no drop still open
        /***/
        const lineY = el.offsetTop + el.offsetHeight
        lineFirst = true
        gsap.to(line, {
          y: lineY,
          height: 0,
          opacity: 0,
          duration: lineTime,
          ease: lineEase,
        })
      }
    }, dropDelay)
  }

  for (const btn of btns) {
    btn.addEventListener('mouseleave', leave)
  }

  for (const drop of drops) {
    drop.addEventListener('off.xt.drop', leave)
  }

  // unmount

  return () => {}
}

/* mountSwitcher */

const mountSwitcher = ({ ref }) => {
  /* switcher for demo purpose remove this */

  // vars

  const megamenu = ref.querySelector('.megamenu')
  const switcher = ref.querySelector('input[type="checkbox"]')

  // change

  const change = () => {
    const self = Xt.get('xt-drop', megamenu)
    if (self) {
      if (switcher.checked) {
        self.options.on = 'mouseenter'
        self.options.off = 'mouseleave'
        self.options.delay = 150
      } else {
        self.options.on = 'click'
        self.options.off = 'click'
        self.options.delay = false
      }
      self.destroy(true)
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
