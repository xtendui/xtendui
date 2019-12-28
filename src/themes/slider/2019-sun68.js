import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/core/animation/mouse-follow.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo_2019-sun68',
  mount: function(object) {
    // vars

    const timeImg = 750
    const timeImgZoom = 6000
    const zoomImg = 1.1

    // slider

    const self = new Xt.Slider(object, {
      auto: {
        time: 6000,
      },
      align: 'left',
      autoHeight: false,
      groupMq: false,
      drag: {
        wrap: true,
        friction: false,
        overflow: false,
      },
    })

    // drag

    self.dragger.addEventListener('drag.xt.slider', function(e) {
      const target = self.targets.filter(x => x.classList.contains('active'))[0]
      const ratio = Math.abs(self.detail.xStart - self.detail.xCurrent) / target.clientWidth
      const imgSize = self.dragger.offsetWidth / 6
      // direction
      let direction = 1
      if (self.detail.xStart - self.detail.xCurrent > 0) {
        direction = -1
      }
      // others
      for (const tr of self.targets.filter(x => !x.classList.contains('active'))) {
        const img = tr.querySelector('.slide_img_inner')
        gsap.set(img, { translateX: imgSize * direction - imgSize * ratio * direction, opacity: ratio + 0.5 })
      }
      // img
      const img = target.querySelector('.slide_img_inner')
      gsap.set(img, { translateX: -imgSize * ratio * direction, opacity: 1 - ratio + 0.5 })
    })

    // dragend

    self.dragger.addEventListener('dragreset.xt.slider', function(e) {
      const target = self.targets.filter(x => x.classList.contains('active'))[0]
      // img
      const img = target.querySelector('.slide_img_inner')
      gsap.to(img, { duration: timeImg, translateX: 0, opacity: 1, ease: Xt.vars.easeCheetah })
    })

    // on

    self.object.addEventListener('on.xt', function(e) {
      const tr = e.target
      if (self.targets.includes(tr)) {
        // event bubbles
        const img = tr.querySelector('.slide_img_inner')
        if (self.initial) {
          gsap.set(img, { translateX: 0, opacity: 1, scale: 1 })
          gsap.to(img, { duration: timeImgZoom, scale: zoomImg, ease: Xt.vars.easeSineInOut, repeat: -1, yoyo: true })
        } else {
          gsap.to(img, { duration: timeImg, translateX: 0, opacity: 1, ease: Xt.vars.easeCheetah }).eventCallback('onComplete', function() {
            gsap.to(img, { duration: timeImgZoom, scale: zoomImg, ease: Xt.vars.easeSineInOut, repeat: -1, yoyo: true })
          })
        }
      }
    })

    // off

    self.object.addEventListener('off.xt', function(e) {
      const tr = e.target
      if (self.targets.includes(tr)) {
        // event bubbles
        const imgSize = self.dragger.offsetWidth / 6
        // direction
        let direction = 1
        if (tr.classList.contains('inverse')) {
          direction = -1
        }
        // img
        const img = tr.querySelector('.slide_img_inner')
        gsap.to(img, { duration: timeImg, x: imgSize * direction, opacity: 0.5, ease: Xt.vars.easeCheetah }).eventCallback('onComplete', function() {
          gsap.set(img, { translateX: 0, opacity: 1, scale: 1 }) // @FIX reset after off.xt
        })
      }
    })

    // unmount

    return function unmount() {
      self.destroy()
      self = null
    }
  },
})

Xt.mount.push({
  matches: '.slider-navigation-side-btn',
  mount: function(object) {
    // mousefollow

    const mouseFollowObject = object
    const mouseFollowContainer = mouseFollowObject.closest('.slider-navigation-side')
    const mouseFollow = new Xt.MouseFollow(mouseFollowObject, mouseFollowContainer, {
      mouseCheck: false,
    })

    // enter

    mouseFollowObject.addEventListener('mouseenter.xt', function () {
      mouseFollowContainer.classList.add('active')
      mouseFollowContainer.classList.remove('out')
    })

    // leave

    mouseFollowObject.addEventListener('mouseleave.xt', function () {
      mouseFollowContainer.classList.remove('active')
      mouseFollowContainer.classList.add('out')
      Xt.animTimeout(mouseFollowContainer, function() {
        mouseFollowContainer.classList.remove('out')
      })
    })

    // unmount

    return function unmount() {
      mouseFollow.destroy()
      mouseFollow = null
    }
  },
})
