import { Xt } from 'xtend-library/src/xt.js'
import 'xtend-library/src/extensions/scroll/scroll.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--parallax-title',
  mount: object => {
    // init

    let self = new Xt.Scroll(object, {
      sticky: 'fixed',
      end: 350,
    })

    // change

    const eventChange = e => {
      const tr = e.target
      gsap.set(tr, { transformOrigin: 'left center' })
      gsap.set(tr, { opacity: self.detail.ratioInverse, scale: 0.9 + 0.1 * self.detail.ratioInverse })
    }

    for (const element of self.elements) {
      element.addEventListener('change.xt', eventChange)
    }

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})

Xt.mount.push({
  matches: '.demo--parallax-img',
  mount: object => {
    // init

    let self = new Xt.Scroll(object, {
      sticky: 'fixed',
      end: 350,
    })

    // change

    const eventChange = e => {
      const tr = e.target
      gsap.set(tr, { y: 100 * self.detail.ratio, opacity: self.detail.ratioInverse })
    }

    for (const element of self.elements) {
      element.addEventListener('change.xt', eventChange)
    }

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})

Xt.mount.push({
  matches: '.demo--parallax-footer',
  mount: object => {
    // init

    let self = new Xt.Scroll(object, {
      sticky: true,
      start: '125%',
    })

    // change

    const eventChange = e => {
      const tr = e.target
      gsap.set(tr, { opacity: self.detail.ratio, scale: 0.9 + 0.1 * self.detail.ratio })
    }

    for (const element of self.elements) {
      element.addEventListener('change.xt', eventChange)
    }

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
