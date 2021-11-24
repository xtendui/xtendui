import { Xt } from 'xtendui'
import 'xtendui/src/toggle'
import 'xtendui/src/overlay'
import 'xtendui/src/drop'
import 'xtendui/src/tooltip'
import gsap from 'gsap'

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
      item.append(
        Xt.node({
          str: `<span class="content flex-auto" style="display: inherit; align-items:inherit;  justify-content:inherit;"></span>`,
        })
      )
      item.append(
        Xt.node({
          str: `<span class="clone w-full absolute" style="display: inherit; align-items:inherit;  justify-content:inherit;"></span>`,
        })
      )
      content = item.querySelector('.content')
      clone = item.querySelector('.clone')
      content.innerHTML = Xt.sanitize(text)
      clone.innerHTML = Xt.sanitize(text)
      gsap.set(clone, {
        opacity: 0,
      })
    }

    // on

    const on = () => {
      // content
      const content = item.querySelector('.content')
      gsap.killTweensOf(content)
      gsap.set(content, {
        transformOrigin: 'left center',
      })
      gsap.set(content, {
        x: -cloneX,
        opacity: 0,
      })
      gsap.to(content, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'quint.out',
        delay: 0.2,
      })
      // clone
      const clone = item.querySelector('.clone')
      gsap.killTweensOf(clone)
      gsap.set(clone, {
        transformOrigin: 'right center',
      })
      gsap.set(clone, {
        top: content.offsetTop,
        left: content.offsetLeft,
        x: 0,
        opacity: 1,
      })
      gsap.to(clone, {
        x: contentX,
        opacity: 0,
        duration: 0.5,
        ease: 'quint.out',
      })
    }

    item.addEventListener('click', on)
  }

  // unmount

  return () => {}
}

/* mount */

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
