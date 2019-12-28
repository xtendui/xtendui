import { Xt } from 'xtend-library'
import gsap from 'gsap'
import BezierEasing from 'bezier-easing'

//
// gsap
//

gsap.globalTimeline.timeScale(1000) // milliseconds instead of seconds

gsap.defaults({
  overwrite: 'auto',
})

gsap.registerEase('easeCheetah', function(progress) {
  const easing = BezierEasing(0.14, 0.63, 0, 1)
  return easing(progress)
})

gsap.registerEase('easeTiger', function(progress) {
  const easing = BezierEasing(0.77, 0, 0.17, 1)
  return easing(progress)
})

gsap.registerEase('easeCat', function(progress) {
  const easing = BezierEasing(0.77, 0, 0.17, 1)
  return easing(progress)
})

gsap.registerEase('easePenguinIn', function(progress) {
  const easing = BezierEasing(0.36, 0, 0, 1)
  return easing(progress)
})

gsap.registerEase('easePenguinOut', function(progress) {
  const easing = BezierEasing(1, 0, 0.64, 1)
  return easing(progress)
})

gsap.registerEase('easePenguinInOut', function(progress) {
  const easing = BezierEasing(0.68, 0.13, 0.25, 1)
  return easing(progress)
})

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
  easeIn: 'easeCheetah',
  easeOut: 'easeCheetah',
  easeInOut: 'easeCheetah',
  easeCheetah: 'easeCheetah',
  easeTiger: 'easeTiger',
  easeCat: 'easeCat',
  easePenguinIn: 'easePenguinIn',
  easePenguinOut: 'easePenguinOut',
  easePenguinInOut: 'easePenguinInOut',
  easeLinear: 'linear',
  easeSineInOut: 'Sine.easeInOut',
}

//
// optionsGlobal
//

Xt.optionsGlobal['xt-slider'] = {
  wheel: {},
  drag: {},
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
