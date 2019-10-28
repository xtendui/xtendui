import { Xt } from 'xtend-library'
import { Ease, Power0 } from 'gsap/TweenMax'
import BezierEasing from 'bezier-easing'

//
// vars
//

const vars = {
  // time
  timeTiny: 100,
  timeSmall: 250,
  timeMedium: 500,
  timeBig: 1000,
  timeGiant: 2000,
  // ease
  easeIn: new Ease(BezierEasing(0.14, 0.63, 0, 1)),
  easeOut: new Ease(BezierEasing(0.14, 0.63, 0, 1)),
  easeInOut: new Ease(BezierEasing(0.14, 0.63, 0, 1)),
  easeCheetah: new Ease(BezierEasing(0.14, 0.63, 0, 1)),
  easeTiger: new Ease(BezierEasing(0.96, 0.1, 0.14, 0.88)),
  easeCat: new Ease(BezierEasing(0.77, 0, 0.17, 1)),
  easePenguinIn: new Ease(BezierEasing(0.36, 0, 0, 1)),
  easePenguinOut: new Ease(BezierEasing(1, 0, 0.64, 1)),
  easePenguinInOut: new Ease(BezierEasing(0.68, 0.13, 0.25, 1)),
  easeLinear: Power0.easeNone
}

//
// optionsGlobal
//

Xt.optionsGlobal['xt-slider'] = {
  wheel: {},
  drag: {}
}

//
// prefers-reduced-motion
//

if (window.matchMedia('(prefers-reduced-motion: reduce), (update: slow)').matches) {
  vars.timeTiny = 0
  vars.timeSmall = 0
  vars.timeMedium = 0
  vars.timeBig = 0
  vars.timeGiant = 0
  Xt.optionsGlobal['xt-slider'].wheel.friction = false
  Xt.optionsGlobal['xt-slider'].drag.friction = false
}

//
// export
//

Xt.vars = vars
