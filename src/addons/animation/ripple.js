import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.ripple',
  mount: object => {
    // generate

    if (!object.querySelector(':scope > .ripple-container')) {
      object.classList.add('ripple-element')
      object.append(Xt.createElement('<div class="ripple-container"></div>'))
    }

    // vars

    const sizeFactor = 0.1
    const parentQuery = 'a, button'
    const rippleContainer = object.querySelector(':scope > .ripple-container')

    // start

    const eventStart = e => {
      if (!parentQuery || e.target.closest(parentQuery)) {
        rippleContainer.append(Xt.createElement('<div class="ripple"></div>'))
        const ripple = rippleContainer.querySelector('.ripple:last-child')
        // @FIX prevent dragging links and images
        if (e.type === 'mousedown') {
          e.preventDefault()
        }
        // size
        const h = object.offsetHeight
        const w = object.offsetWidth
        const sizeObject = h > w ? h : w
        const size = sizeObject * sizeFactor
        // scale from diagonal
        const sizeFinal = Math.sqrt(Math.pow(h, 2) + Math.pow(w, 2))
        const scaleFinal = (sizeFinal / size) * 2
        // offset (using clientX and clientY for touch so we need to get values with getBoundingClientRect also)
        let y
        let x
        if (e.offsetX !== undefined) {
          y = e.clientY
          x = e.clientX
        } else if (e.touches && e.touches.length) {
          y = e.touches[0].clientY
          x = e.touches[0].clientX
        }
        const rectTarget = e.target.getBoundingClientRect()
        y = y - rectTarget.top
        x = x - rectTarget.left
        // position
        if (object !== e.target) {
          const rectObject = object.getBoundingClientRect()
          y += rectTarget.top - rectObject.top
          x += rectTarget.left - rectObject.left
        }
        const top = y - size / 2
        const left = x - size / 2
        // animate
        gsap.set(ripple, { height: size, width: size, top: top, left: left, scale: 1, opacity: 0 })
        gsap.to(ripple, { opacity: 1, duration: Xt.vars.timeSmall, ease: 'penguin' })
        gsap.to(ripple, { scale: scaleFinal, duration: Xt.vars.timeMedium, ease: 'penguin' })
      }
    }

    object.addEventListener('mousedown', eventStart)
    object.addEventListener('touchstart', eventStart)

    // end

    const eventEnd = e => {
      if (!parentQuery || e.target.closest(parentQuery)) {
        const ripple = rippleContainer.querySelector('.ripple:last-child')
        if (ripple) {
          gsap.to(ripple, { opacity: 0, duration: Xt.vars.timeMedium, ease: 'penguin', delay: Xt.vars.timeTiny }).eventCallback('onComplete', () => {
            ripple.remove()
          })
        }
      }
    }

    object.addEventListener('mouseup', eventEnd)
    object.addEventListener('touchend', eventEnd)
    addEventListener('mouseup', eventEnd)

    // unmount

    const unmount = () => {
      removeEventListener('mouseup', eventEnd)
    }
    return unmount
  },
})
