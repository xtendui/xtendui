import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import gsap from 'gsap'

// @TODO RIFARE TUTTE VARIABILI FUNZIONI ETC COME SUN68

Xt.mount.push({
  matches: '.demo--2019-webgriffe',
  mount: object => {
    // slider

    let self = new Xt.Slider(object, {
      durationOn: Xt.vars.timeBig,
      durationOff: Xt.vars.timeBig,
      loop: true,
      auto: {
        time: 12000,
        timeChange: 6000,
        pause: '.slider_text',
      },
      wheel: {
        selector: '.slides-inner',
        friction: false,
      },
      align: 'left',
      contain: false,
      autoHeight: false,
      groupMq: false,
      drag: {
        wrap: true,
        friction: false,
      },
    })

    // drag

    function sliderParallax(tween = false) {
      // vars
      let contentFactor = 0.2
      if (window.matchMedia('(max-width: 991px)').matches) {
        contentFactor = 0
      }
      let imgFactor = 0
      if (window.matchMedia('(max-width: 991px)').matches) {
        imgFactor = -0.4
      }
      // tween
      tween = self.initial ? !self.initial : tween
      for (let [i, target] of self.targets.entries()) {
        let dist = -target.offsetLeft - self.detail.dragPos
        // content
        let contents = target.querySelectorAll('.slider_text')
        let contentPos = Math.floor(dist * contentFactor)
        for (let content of contents) {
          if (tween) {
            gsap.to(content, { x: contentPos, duration: Xt.vars.timeBig, ease: 'cheetah' })
          } else {
            gsap.set(content, { x: contentPos })
          }
        }
        // img
        let imgs = target.querySelectorAll('.slider_img')
        let imgPos = Math.floor(dist * imgFactor)
        for (let img of imgs) {
          if (tween) {
            gasp.to(img, { x: imgPos, duration: Xt.vars.timeBig, ease: 'cheetah' })
          } else {
            gasp.set(img, { x: imgPos })
          }
        }
      }
    }

    self.dragger.addEventListener('drag.xt', e => {
      // parallax
      sliderParallax()
    })

    self.dragger.addEventListener('dragreset.xt', e => {
      // parallax
      sliderParallax(true)
    })

    // targets

    self.object.addEventListener('on.xt', e => {
      let tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        let tween = !self.initial
        if (self.initial) {
          // siteBackground
          /*
          let backgrounds = document.querySelector('.site_backgrounds')
          backgrounds.innerHTML = ''
          for (let [i, target] of self.targets.entries()) {
            // backgrounds
            Xt.dataStorage.set(target, 'backgroundDone', true)
            let generated = Xt.createElement('<div class="slider_background" data-index="' + i + '"></div>')
            backgrounds.append(generated)
            let left = target.getAttribute('data-light')
            let right = target.getAttribute('data-dark')
            generated.style.background = 'linear-gradient(140deg, ' + left + ' 0%, ' + right + ' 100%)'
            generated.setAttribute('data-light', left)
            generated.setAttribute('data-dark', right)
          }
          */
        }
        // parallax
        sliderParallax(true)
        // background
        /*
        let background = document.querySelectorAll('.slider_background[data-index="' + self.currentIndex + '"]')
        if (tween) {
          for (let [i, target] of self.targets.entries()) {
            let background = document.querySelectorAll('.slider_background[data-index="' + i + '"]')
            gsap.to(background, { opacity: 0, duration: Xt.vars.timeBig, ease: 'cheetah' })
          }
          gsap.to(background, { opacity: 1, duration: Xt.vars.timeBig, ease: 'cheetah' })
        } else {
          gsap.set(background, { opacity: 1 })
        }
        */
      }
    })

    //////////////////////
    // progress
    //////////////////////

    // auto start

    self.object.addEventListener('autostart.xt', e => {
      // not first less time
      if (!self.initial && !self.object.dataset.autoTime) {
        self.eventAutostop()
        self.options.auto.time = self.options.auto.timeChange
        self.object.dataset.autoTime = 'true'
        self.eventAutostart()
        return false
      }
      // on elements
      let elements = self.elements.filter(x => self.hasCurrent(x))
      for (let element of elements) {
        let fillers = element.querySelectorAll('.filler span:nth-child(2)')
        for (let filler of fillers) {
          gsap.set(filler, { width: 0, left: 0 })
          gsap.to(filler, { width: '100%', left: 0, duration: self.options.auto.time / 1000 })
        }
      }
    })

    // auto stop

    self.object.addEventListener('autostop.xt', e => {
      // on elements
      let elements = self.elements.filter(x => self.hasCurrent(x))
      for (let element of elements) {
        let fillers = element.querySelectorAll('.filler span:nth-child(2)')
        for (let filler of fillers) {
          gsap.to(filler, { width: 0, left: 0, duration: Xt.vars.timeTiny })
        }
      }
    })

    // auto pause

    self.object.addEventListener('autopause.xt', e => {
      // on elements
      let elements = self.elements.filter(x => self.hasCurrent(x))
      for (let element of elements) {
        let fillers = element.querySelectorAll('.filler span:nth-child(2)')
        for (let filler of fillers) {
          gsap.to(filler, { width: 0, left: 0, duration: Xt.vars.timeTiny })
        }
      }
    })

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
