import { Xt } from 'xtend-library'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js'
import BezierEasing from 'bezier-easing'

//
// gsap
//

gsap.defaults({
  overwrite: 'auto',
})

gsap.globalTimeline.timeScale(1000) // milliseconds instead of seconds

gsap.registerPlugin(ScrollToPlugin)

gsap.registerEase('easeCheetah', progress => {
  const easing = BezierEasing(0.14, 0.63, 0, 1)
  return easing(progress)
})

gsap.registerEase('easeTiger', progress => {
  const easing = BezierEasing(0.96, 0.1, 0.14, 0.88)
  return easing(progress)
})

gsap.registerEase('easeCat', progress => {
  const easing = BezierEasing(0.77, 0, 0.17, 1)
  return easing(progress)
})

gsap.registerEase('easeDog', progress => {
  const easing = BezierEasing(0.36, 0, 0, 1)
  return easing(progress)
})

gsap.registerEase('easePenguin', progress => {
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
  easeLinear: 'linear',
  easeSineIn: 'Sine.easeIn',
  easeSineOut: 'Sine.easeOut',
  easeSineInOut: 'Sine.easeInOut',
  easeQuintIn: 'Quint.easeIn',
  easeQuintOut: 'Quint.easeOut',
  easeQuintInOut: 'Quint.easeInOut',
  easeIn: 'easeCheetah',
  easeOut: 'easeCheetah',
  easeCheetah: 'easeCheetah',
  easeTiger: 'easeTiger',
  easeCat: 'easeCat',
  easeDog: 'easeDog',
  easePenguin: 'easePenguin',
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
