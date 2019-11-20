import { Xt } from 'xtend-library'
import 'xtend-library/src/addons/scroll/scroll.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--parallax-title',
  mount: function(object) {
    // init

    let self = new Xt.Scroll(object, {
      sticky: 'fixed',
      end: 350,
    })

    // change

    const eventChange = function() {
      const el = this
      gsap.set(el, { transformOrigin: 'left center' })
      gsap.set(el, { opacity: self.detail.ratioInverse, scale: 0.9 + 0.1 * self.detail.ratioInverse })
    }

    for (const el of self.elements) {
      el.addEventListener('change.xt.scroll', eventChange)
    }

    // unmount

    return function unmount() {
      for (const el of self.elements) {
        el.removeEventListener('change.xt.scroll', eventChange)
      }
      self.destroy()
      self = null
    }
  },
})

Xt.mount.push({
  matches: '.demo--parallax-img',
  mount: function(object) {
    // init

    let self = new Xt.Scroll(object, {
      sticky: 'fixed',
      end: 350,
    })

    // change

    const eventChange = function() {
      const el = this
      gsap.set(el, { translateY: 100 * self.detail.ratio, opacity: self.detail.ratioInverse })
    }

    for (const el of self.elements) {
      el.addEventListener('change.xt.scroll', eventChange)
    }

    // unmount

    return function unmount() {
      for (const el of self.elements) {
        el.removeEventListener('change.xt.scroll', eventChange)
      }
      self.destroy()
      self = null
    }
  },
})

Xt.mount.push({
  matches: '.demo--parallax-footer',
  mount: function(object) {
    // init

    let self = new Xt.Scroll(object, {
      sticky: true,
      start: '125%',
    })

    // change

    const eventChange = function() {
      const el = this
      gsap.set(el, { opacity: self.detail.ratio, scale: 0.9 + 0.1 * self.detail.ratio })
    }

    for (const el of self.elements) {
      el.addEventListener('change.xt.scroll', eventChange)
    }

    // unmount

    return function unmount() {
      for (const el of self.elements) {
        el.removeEventListener('change.xt.scroll', eventChange)
      }
      self.destroy()
      self = null
    }
  },
})
