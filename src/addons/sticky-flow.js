import { Xt } from '../xt.js'

Xt.mount.push({
  matches: '.sticky-flow',
  mount(object) {
    // vars

    let scrollTopOld = 0
    const spaceTop = 75
    const container = object.parentNode
    const fill = container.querySelector('.sticky-flow-filler')

    // eventSticky

    const eventSticky = () => {
      const scrollTop = document.scrollingElement.scrollTop
      const windowHeight = window.innerHeight
      const objectHeight = object.offsetHeight
      if (objectHeight + spaceTop < windowHeight) {
        fill.style.height = ''
        object.style.top = `${spaceTop}px`
        object.style.bottom = ''
      } else {
        if (scrollTop > scrollTopOld) {
          if (!object.classList.contains('sticky-top')) {
            const pos = windowHeight - objectHeight
            const height = Math.max(0, object.offsetTop - spaceTop)
            fill.style.height = `${height}px`
            object.style.top = `${pos}px`
            object.style.bottom = ''
            object.classList.remove('sticky-bottom')
            object.classList.add('sticky-top')
          }
        } else {
          if (!object.classList.contains('sticky-bottom')) {
            const pos = windowHeight - objectHeight - spaceTop
            const height = Math.max(0, object.offsetTop - container.offsetTop)
            fill.style.height = `${height}px`
            object.style.top = ''
            object.style.bottom = `${pos}px`
            object.classList.add('sticky-bottom')
            object.classList.remove('sticky-top')
          }
        }
      }
      scrollTopOld = scrollTop
    }

    addEventListener('scroll', eventSticky)
    addEventListener('resize', eventSticky)
    eventSticky()

    // unmount

    const unmount = function () {
      removeEventListener('scroll', eventSticky)
      removeEventListener('resize', eventSticky)
    }
    return unmount
  },
})
