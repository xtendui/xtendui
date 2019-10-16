import { Xt } from 'xtend-library'
import { Ease, Power0 } from 'gsap/TweenMax'
import BezierEasing from 'bezier-easing'

// vars

const vars = {
  // time
  timeTiny: 0.1,
  timeSmall: 0.25,
  timeMedium: 0.5,
  timeBig: 1,
  timeGiant: 2,
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
// export
//

Xt.vars = vars
