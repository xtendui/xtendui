/*##IMPORTSSTART*/
import { Xt } from 'xtendui'
import 'xtendui/src/core/toggle'
import gsap from 'gsap'
/*##IMPORTSEND*/

class Demo {
  constructor(ref) {
    this.object = ref
    /*##COMPONENTDIDMOUNTSTART*/
    this.init()
    /*##COMPONENTDIDMOUNTEND*/
  }

  /*##METHODSSTART*/
  init() {
    // toggle
    this.toggle = new Xt.Toggle(this.object.querySelector('.demo--toggle-animation-js-multiple'), {
      duration: 500,
    })
    for (const target of this.toggle.targets) {
      target.addEventListener('on.xt.toggle', this.eventOn.bind(this))
      target.addEventListener('off.xt.toggle', this.eventOff.bind(this))
    }
  }

  eventOn(e) {
    const tr = e.target
    const targetTimeOn = 0.5
    const targetEaseOn = 'quint.out'
    // target
    gsap.killTweensOf(tr)
    gsap.set(tr, {
      x: -this.toggle.direction * 15,
      opacity: 0,
    })
    gsap.to(tr, {
      x: 0,
      opacity: 1,
      duration: targetTimeOn,
      ease: targetEaseOn,
    })
  }

  eventOff(e) {
    const tr = e.target
    const targetTimeOff = 0.5
    const targetEaseOff = 'quint.out'
    // target
    gsap.killTweensOf(tr)
    gsap.to(tr, {
      x: this.toggle.direction * 15,
      opacity: 0,
      duration: targetTimeOff,
      ease: targetEaseOff,
    })
  }
  /*##METHODSEND*/

  destroy() {
    /*##COMPONENTDIDUNMOUNTSTART*/
    this.toggle.destroy()
    this.toggle = null
    /*##COMPONENTDIDUNMOUNTEND*/
  }
}

Xt.mount.push({
  matches: '#ref--toggle-animation-js-multiple',
  mount: ({ object: ref }) => {
    let self = new Demo(ref)
    return () => {
      self.destroy()
      self = null
    }
  },
})
