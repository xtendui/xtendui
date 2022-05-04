import { Xt } from 'xtendui'
import 'xtendui/src/toggle'
import 'xtendui/src/overlay'
import 'xtendui/src/drop'
import 'xtendui/src/tooltip'
import gsap from 'gsap'

/* background */

const animBackgroundOn = ({ background } = {}) => {
  gsap.killTweensOf(background)
  gsap.set(background, {
    'clip-path': 'ellipse(50% 0% at 50% 150%)',
  })
  gsap
    .to(background, {
      keyframes: [
        { 'clip-path': 'ellipse(50% 60% at 50% 125%)' },
        { 'clip-path': 'ellipse(65% 70% at 50% 100%)' },
        { 'clip-path': 'ellipse(100% 60% at 50% 75%)' },
        { 'clip-path': 'ellipse(300% 50% at 50% 50%)' },
        { 'clip-path': 'ellipse(3000% 50% at 50% 50%)' },
      ],
      ease: 'quint.inOut',
      duration: 0.65,
    })
    .timeline.duration()
}

const animBackgroundOff = ({ background } = {}) => {
  gsap.killTweensOf(background)
  gsap
    .to(background, {
      keyframes: [
        { 'clip-path': 'ellipse(100% 60% at 50% 25%)' },
        { 'clip-path': 'ellipse(65% 70% at 50% 0%)' },
        { 'clip-path': 'ellipse(50% 60% at 50% -25%)' },
        { 'clip-path': 'ellipse(50% 0% at 50% -50%)' },
      ],
      ease: 'quint.inOut',
      duration: 0.65,
    })
    .timeline.duration()
}

/* mask */

const animMaskOn = ({ mask, inverse } = {}) => {
  if (inverse) {
    gsap.killTweensOf(mask)
    gsap.set(mask, {
      'clip-path': 'ellipse(50% 0% at 50% -50%)',
    })
    gsap
      .to(mask, {
        keyframes: [
          { 'clip-path': 'ellipse(50% 60% at 50% -25%)' },
          { 'clip-path': 'ellipse(65% 70% at 50% 0%)' },
          { 'clip-path': 'ellipse(100% 60% at 50% 25%)' },
          { 'clip-path': 'ellipse(300% 50% at 50% 50%)' },
          { 'clip-path': 'ellipse(3000% 50% at 50% 50%)' },
        ],
        ease: 'quint.inOut',
        duration: 0.75,
      })
      .timeline.duration()
  } else {
    gsap.killTweensOf(mask)
    gsap.set(mask, {
      'clip-path': 'ellipse(50% 0% at 50% 150%)',
    })
    gsap
      .to(mask, {
        keyframes: [
          { 'clip-path': 'ellipse(50% 60% at 50% 125%)' },
          { 'clip-path': 'ellipse(65% 70% at 50% 100%)' },
          { 'clip-path': 'ellipse(100% 60% at 50% 75%)' },
          { 'clip-path': 'ellipse(300% 50% at 50% 50%)' },
          { 'clip-path': 'ellipse(3000% 50% at 50% 50%)' },
        ],
        ease: 'quint.inOut',
        duration: 0.75,
      })
      .timeline.duration()
  }
}

const animMaskOff = ({ mask, inverse } = {}) => {
  if (inverse) {
    gsap.killTweensOf(mask)
    gsap
      .to(mask, {
        keyframes: [
          { 'clip-path': 'ellipse(300% 50% at 50% 50%)' },
          { 'clip-path': 'ellipse(100% 60% at 50% 75%)' },
          { 'clip-path': 'ellipse(65% 70% at 50% 100%)' },
          { 'clip-path': 'ellipse(50% 0% at 50% 150%)' },
        ],
        ease: 'quint.inOut',
        duration: 0.65,
      })
      .timeline.duration()
  } else {
    gsap.killTweensOf(mask)
    gsap
      .to(mask, {
        keyframes: [
          { 'clip-path': 'ellipse(100% 60% at 50% 25%)' },
          { 'clip-path': 'ellipse(65% 70% at 50% 0%)' },
          { 'clip-path': 'ellipse(50% 60% at 50% -25%)' },
          { 'clip-path': 'ellipse(50% 0% at 50% -50%)' },
        ],
        ease: 'quint.inOut',
        duration: 0.65,
      })
      .timeline.duration()
  }
}

/* backdrop */

const animBackdropOn = ({ backdrop } = {}) => {
  gsap.killTweensOf(backdrop)
  gsap.set(backdrop, {
    opacity: 0,
  })
  gsap.to(backdrop, {
    opacity: 0.2,
    ease: 'quint.inOut',
    duration: 0.5,
    delay: 0.15,
  })
}

const animBackdropOff = ({ backdrop } = {}) => {
  gsap.killTweensOf(backdrop)
  gsap.to(backdrop, {
    opacity: 0,
    ease: 'quint.inOut',
    duration: 0.5,
    delay: 0.15,
  })
}

/* shadow */

const animShadowOn = ({ shadow } = {}) => {
  gsap.killTweensOf(shadow)
  gsap.set(shadow, {
    opacity: 0,
  })
  gsap.to(shadow, {
    opacity: 0.5,
    ease: 'quint.inOut',
    duration: 0.4,
    delay: 0.25,
  })
}

const animShadowOff = ({ shadow } = {}) => {
  gsap.killTweensOf(shadow)
  gsap.to(shadow, {
    opacity: 0,
    ease: 'quint.inOut',
    duration: 0.25,
  })
}

/* mountOverlay */

const mountOverlay = ({ ref }) => {
  // vars

  const item = ref
  const content = item.querySelector('.xt-card')
  const backdrop = item.querySelector('.xt-backdrop')
  const shadow = item.querySelector('.xt-shadow')

  // on

  const on = () => {
    animMaskOn({ mask: content })
    animBackdropOn({ backdrop })
    animShadowOn({ shadow })
  }

  item.addEventListener('on.xt.overlay', on)

  // off

  const off = () => {
    animMaskOff({ mask: content })
    animBackdropOff({ backdrop })
    animShadowOff({ shadow })
  }

  item.addEventListener('off.xt.overlay', off)
}

/* mountDrop */

const mountDrop = ({ ref }) => {
  // vars

  const item = ref
  const content = item.querySelector('.xt-card')
  const shadow = item.querySelector('.xt-shadow')

  // on

  const on = () => {
    animMaskOn({ mask: content, inverse: true })
    animShadowOn({ shadow })
  }

  item.addEventListener('on.xt.drop', on)

  // off

  const off = () => {
    animMaskOff({ mask: content, inverse: true })
    animShadowOff({ shadow })
  }

  item.addEventListener('off.xt.drop', off)
}

/* mountTooltip */

const mountTooltip = ({ ref }) => {
  // vars

  const item = ref
  const content = item.querySelector('.xt-card')
  const shadow = item.querySelector('.xt-shadow')

  // on

  const on = () => {
    animMaskOn({ mask: content, inverse: true })
    animShadowOn({ shadow })
  }

  item.addEventListener('on.xt.tooltip', on)

  // off

  const off = () => {
    animMaskOff({ mask: content, inverse: true })
    animShadowOff({ shadow })
  }

  item.addEventListener('off.xt.tooltip', off)
}

/* mountToggle */

const mountToggle = ({ ref }) => {
  // vars

  const item = ref
  const content = item

  // on

  const on = () => {
    animMaskOn({ mask: content, inverse: true })
  }

  item.addEventListener('on.xt.toggle', on)

  // off

  const off = () => {
    animMaskOff({ mask: content, inverse: true })
  }

  item.addEventListener('off.xt.toggle', off)
}

/* mountButton */

const mountButton = ({ ref }) => {
  // vars

  const item = ref
  let background = item.querySelector('.btn-background')

  // inject

  if (!background) {
    item.classList.add('btn-container')
    item.prepend(Xt.node({ str: '<div class="btn-background"></div>' }))
    background = item.querySelector('.btn-background')
    gsap.set(background, {
      'clip-path': 'ellipse(50% 0% at 50% 150%)',
    })
  }

  // enter

  const enter = () => {
    animBackgroundOn({ background })
  }

  item.addEventListener('mouseenter', enter)

  // leave

  const leave = () => {
    animBackgroundOff({ background })
  }

  item.addEventListener('mouseleave', leave)
}

/* mountInteraction */

const mountInteraction = ({ ref }) => {
  // mount granularly

  Xt.mount({
    root: ref,
    matches: '.xt-overlay',
    mount: ({ ref }) => {
      return mountOverlay({ ref })
    },
  })

  Xt.mount({
    root: ref,
    matches: '.xt-drop',
    mount: ({ ref }) => {
      return mountDrop({ ref })
    },
  })

  Xt.mount({
    root: ref,
    matches: '.xt-tooltip',
    mount: ({ ref }) => {
      return mountTooltip({ ref })
    },
  })

  Xt.mount({
    root: ref,
    matches: '[data-xt-toggle-target]',
    mount: ({ ref }) => {
      return mountToggle({ ref })
    },
  })

  Xt.mount({
    root: ref,
    matches: '.xt-button:not([class*=" z-"]), a.xt-card, button.xt-card',
    mount: ({ ref }) => {
      return mountButton({ ref })
    },
  })

  // unmount

  return () => {}
}

/* mount */

Xt.mount({
  matches: '.demo--ellipse-animation-v1',
  mount: ({ ref }) => {
    const unmountInteraction = mountInteraction({ ref })

    // unmount

    return () => {
      unmountInteraction()
    }
  },
})
