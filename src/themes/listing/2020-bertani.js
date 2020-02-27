import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/scroll/scroll.js'
import 'xtend-library/src/extensions/utils/propagate-interaction.js'
import gsap from 'gsap'

/**
 * smooth
 */

Xt.mount.push({
  matches: '.demo--listing--2020-bertani',
  mount: function(object) {
    // init

    let self = new Xt.Smooth(document.scrollingElement, {
      wheel: {
        friction: delta => {
          return delta / 11
        },
      },
    })

    // unmount

    const unmount = function() {
      self.destroy()
      self = null
    }
    return unmount
  },
})

/**
 * propagate-interaction
 */

Xt.mount.push({
  matches: '.demo--listing--2020-bertani a, .demo--listing--2020-bertani button',
  mount: function(object) {
    // init

    let self = new Xt.PropagateInteraction(object, {
      targets: '.btn',
    })

    // unmount

    const unmount = function() {
      self.destroy()
      self = null
    }
    return unmount
  },
})

/**
 * .btn--line
 */

Xt.mount.push({
  matches: '.demo--listing--2020-bertani .btn--line',
  mount: function(object) {
    // wrap

    if (!object.querySelector('.btn--line_text')) {
      const wrapper = Xt.createElement('<span class="btn--line_text"></span>');
      while (object.firstChild) {
        wrapper.appendChild(object.firstChild);
      }
      object.appendChild(wrapper);
    }

    // append

    if (!object.querySelector('.btn--line_line')) {
      object.prepend(Xt.createElement('<span class="btn--line_line"></span>'))
    }

    // vars

    const link = object.tagName === 'a' || object.tagName === 'button' ? object : object.closest('a, button')
    const imgScale = 0.03
    const lineOpacity = 0.4
    const lineX = 15
    const lineWidth = 15
    const lineWidthMax = 150

    // enter

    const eventEnter = e => {
      // img
      const img = link.querySelector('.parallax_img')
      gsap.to(img, { scale: 1 - imgScale, duration: Xt.vars.timeMedium, ease: 'expo.out' })
      const imgInner = link.querySelector('.parallax_img_inner')
      gsap.to(imgInner, { scale: 1 + imgScale, duration: Xt.vars.timeMedium, ease: 'expo.out' })
      // text
      const text = object.querySelector('.btn--line_text')
      gsap.to(text, { x: lineX, duration: Xt.vars.timeMedium, delay: Xt.vars.timeSmall, ease: 'expo.out' })
      // line
      const line = object.querySelector('.btn--line_line')
      gsap.set(line, { width: 0, x: -lineWidthMax })
      gsap.to(line, { width: lineWidthMax, x: -lineWidthMax + lineWidth, duration: Xt.vars.timeSmall, ease: 'expo.in' })
      gsap.to(line, { width: lineWidth + lineX, x: 0, opacity: 1, duration: Xt.vars.timeMedium, delay: Xt.vars.timeSmall, ease: 'expo.out' })
    }

    link.addEventListener('mouseenter', eventEnter)

    // enter

    const eventLeave = e => {
      // img
      const img = link.querySelector('.parallax_img')
      gsap.to(img, { scale: 1, duration: Xt.vars.timeMedium, ease: 'expo.inOut' })
      const imgInner = link.querySelector('.parallax_img_inner')
      gsap.to(imgInner, { scale: 1, duration: Xt.vars.timeMedium, ease: 'expo.inOut' })
      // text
      const text = object.querySelector('.btn--line_text')
      gsap.to(text, { x: 0, duration: Xt.vars.timeMedium, ease: 'expo.inOut' })
      // line
      const line = object.querySelector('.btn--line_line')
      gsap.to(line, { width: lineWidth, x: 0, opacity: lineOpacity, duration: Xt.vars.timeMedium, ease: 'expo.inOut' })
    }

    link.addEventListener('mouseleave', eventLeave)

    // unmount

    const unmount = function() {}
    return unmount
  },
})

/**
 * .parallax_item
 */

Xt.mount.push({
  matches: '.demo--listing--2020-bertani .parallax_item',
  mount: function(object) {
    // vars

    const imgY = 200

    // init

    let self = new Xt.Scroll(object, {
      distance: 0,
      trigger: '50%',
      start: '50%',
      end: '100%',
    })

    // change

    const eventChange = function() {
      const el = this
      // img
      const img = el.querySelector('.parallax_img_col')
      gsap.set(img, { y: imgY * (self.detail.ratio - 0.5) })
      // imgInner
      const imgInner = el.querySelector('.parallax_img img')
      gsap.set(imgInner, { scale: 1.1 - 0.1 * self.detail.ratio })
    }

    for (const el of self.elements) {
      el.addEventListener('change.xt', eventChange)
    }

    // unmount

    const unmount = function() {
      self.destroy()
      self = null
    }
    return unmount
  },
})
