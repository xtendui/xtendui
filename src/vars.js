import { Xt } from 'xtend-library'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js'
import BezierEasing from 'bezier-easing'

//
// gsap
//

gsap.defaults({
  overwrite: 'auto',
  force3D: false,
})

gsap.globalTimeline.timeScale(1000) // milliseconds instead of seconds

gsap.registerPlugin(ScrollToPlugin)

gsap.registerEase('cheetah', progress => {
  const easing = BezierEasing(0.14, 0.63, 0, 1)
  return easing(progress)
})

gsap.registerEase('tiger', progress => {
  const easing = BezierEasing(0.96, 0.1, 0.14, 0.88)
  return easing(progress)
})

gsap.registerEase('cat', progress => {
  const easing = BezierEasing(0.77, 0, 0.17, 1)
  return easing(progress)
})

gsap.registerEase('dog', progress => {
  const easing = BezierEasing(0.36, 0, 0, 1)
  return easing(progress)
})

gsap.registerEase('penguin', progress => {
  const easing = BezierEasing(0.68, 0.13, 0.25, 1)
  return easing(progress)
})

/*
//
// eases
//

// custom

'cheetah'
'tiger'
'cat'
'dog'
'penguin'

// gsap ease: can be 'in' or 'out' or 'inOut', see https://easings.net/ and https://greensock.com/docs/v3/Eases

'power1.out'
'power2.out'
'power3.out'
'power4.out'
'linear',
'sine.out'
'quad.out'
'cubic.out'
'quart.out'
'quint.out'
'expo.out'
'circ.out'
'back.out(number from 1 to 4)'
'elastic.out(number from 1 to 2.5, number from 0.1 to 1)'
'bounce.out'
*/

//
// vars
//

const vars = {
  // time
  timeMicro: 50,
  timeMini: 100,
  timeTiny: 250,
  timeSmall: 500,
  timeMedium: 750,
  timeLarge: 1000,
  timeBig: 1500,
  timeGiant: 2000,
  timeHuge: 3000,
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
  vars.timeMicro = 0
  vars.timeMini = 0
  vars.timeTiny = 0
  vars.timeSmall = 0
  vars.timeMedium = 0
  vars.timeLarge = 0
  vars.timeBig = 0
  vars.timeGiant = 0
  vars.timeHuge = 0
  Xt.optionsGlobal['xt-slider'].wheel.friction = false
  Xt.optionsGlobal['xt-slider'].drag.friction = false
}

//
// export
//

Xt.vars = vars
