import { Xt } from 'xtendui'
import 'xtendui/src/toggle'
import 'xtendui/src/drop'
import 'xtendui/src/tooltip'
import gsap from 'gsap'

/* mask */

const animMask = ({ mask, inverse } = {}) => {
  if (inverse) {
    gsap.killTweensOf(mask)
    gsap.set(mask, {
      'clip-path': 'circle(0% at 100% 50%)',
    })
    gsap
      .to(mask, {
        keyframes: [
          { 'clip-path': 'circle(60% at 100% 50%)' },
          { 'clip-path': 'circle(60% at 50% 50%)' },
          { 'clip-path': 'circle(60% at 0% 50%)' },
          { 'clip-path': 'circle(0% at 0% 50%)' },
        ],
        ease: 'quint.inOut',
        duration: 0.65,
      })
      .timeline.duration()
  } else {
    gsap.killTweensOf(mask)
    gsap.set(mask, {
      'clip-path': 'circle(0% at 0% 50%)',
    })
    gsap
      .to(mask, {
        keyframes: [
          { 'clip-path': 'circle(60% at 0% 50%)' },
          { 'clip-path': 'circle(60% at 50% 50%)' },
          { 'clip-path': 'circle(60% at 100% 50%)' },
          { 'clip-path': 'circle(0% at 100% 50%)' },
        ],
        ease: 'quint.inOut',
        duration: 0.65,
      })
      .timeline.duration()
  }
}

/* mountDrop */

const mountDrop = ({ ref }) => {
  // vars

  const item = ref
  const border = item.querySelector('.anim-border')

  // on

  const on = () => {
    animMask({ mask: border })
  }

  item.addEventListener('on.xt.drop', on)

  // off

  const off = () => {
    animMask({ mask: border, inverse: true })
  }

  item.addEventListener('off.xt.drop', off)
}

/* mountTooltip */

const mountTooltip = ({ ref }) => {
  // vars

  const item = ref
  const border = item.querySelector('.anim-border')

  // on

  const on = () => {
    animMask({ mask: border })
  }

  item.addEventListener('on.xt.tooltip', on)

  // off

  const off = () => {
    animMask({ mask: border, inverse: true })
  }

  item.addEventListener('off.xt.tooltip', off)
}

/* mountToggle */

const mountToggle = ({ ref }) => {
  // vars

  const item = ref
  const border = item.querySelector('.anim-border')

  // on

  const on = () => {
    animMask({ mask: border })
  }

  item.addEventListener('on.xt.toggle', on)

  // off

  const off = () => {
    animMask({ mask: border, inverse: true })
  }

  item.addEventListener('off.xt.toggle', off)
}

/* mountButton */

const mountButton = ({ ref }) => {
  // vars

  const item = ref
  let border = item.querySelector('.anim-border')

  // inject

  if (!border) {
    item.prepend(Xt.node({ str: '<div class="anim-border"></div>' }))
    border = item.querySelector('.anim-border')
    gsap.set(border, {
      'clip-path': 'circle(0% at 100% 50%)',
    })
  }

  // enter

  const enter = () => {
    animMask({ mask: border })
  }

  item.addEventListener('mouseenter', enter)
}

/* mountInteraction */

const mountInteraction = ({ ref }) => {
  // mount granularly

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
  matches: '.demo--electric-animation-v1',
  mount: ({ ref }) => {
    const unmountInteraction = mountInteraction({ ref })

    // unmount

    return () => {
      unmountInteraction()
    }
  },
})
