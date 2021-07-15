import { Xt } from 'xtendui'
import 'xtendui/src/overlay'
import 'xtendui/src/drop'
import 'xtendui/src/tooltip'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--slide-animation-v1',
  mount: ({ ref }) => {
    const unmountInteraction = mountInteraction({ ref })

    // unmount

    return () => {
      unmountInteraction()
    }
  },
})

/* mountInteraction */

const mountInteraction = ({ ref }) => {
  // vars

  const items = ref.querySelectorAll('.xt-button, a.xt-card')

  for (const item of items) {
    // vars

    let content = item.querySelector('.content')
    const contentX = 20

    let clone = item.querySelector('.clone')
    const cloneX = 20

    // inject

    if (!clone) {
      item.classList.add('overflow-hidden')
      const text = item.innerHTML
      item.innerHTML = ''
      item.append(Xt.node({ str: `<span class="content"></span>` }))
      item.append(Xt.node({ str: `<span class="clone absolute"></span>` }))
      content = item.querySelector('.content')
      clone = item.querySelector('.clone')
      content.innerHTML = text
      clone.innerHTML = text
      gsap.set(clone, {
        x: -cloneX,
        opacity: 0,
      })
    }

    // on

    const on = () => {
      // content
      const content = item.querySelector('.content')
      gsap.killTweensOf(content)
      gsap.set(content, {
        transformOrigin: 'right center',
      })
      gsap.set(content, {
        x: 0,
        opacity: 1,
      })
      gsap.to(content, {
        x: contentX,
        opacity: 0,
        duration: 0.5,
        ease: 'quint.out',
      })
      // clone
      const clone = item.querySelector('.clone')
      gsap.killTweensOf(clone)
      gsap.set(clone, {
        transformOrigin: 'left center',
      })
      gsap.set(clone, {
        x: -cloneX,
        opacity: 0,
      })
      gsap.to(clone, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'quint.out',
        delay: 0.2,
      })
    }

    item.addEventListener('click', on)
  }

  // unmount

  return () => {}
}
