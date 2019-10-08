import { TweenMax, Ease } from 'gsap/TweenMax'
import BezierEasing from 'bezier-easing'
import { Xt } from 'xtend-library'

/**
 * animation
 */

Xt.mount.push({
  matches: '.btn',
  mount: function (object) {
    // vars

    const easeIn = new Ease(BezierEasing(0.14, 0.63, 0, 1))
    const easeOut = new Ease(BezierEasing(0.14, 0.63, 0, 1))
    Xt.animCss(object, ['backgroundColor'])

    // methods

    function eventOn () {
      const animCss = Xt.animCss(object, ['backgroundColor'])
      TweenMax.set(object, { backgroundColor: animCss.backgroundColor.current })
      TweenMax.to(object, 3, { backgroundColor: animCss.backgroundColor.final, ease: easeIn })
    }

    function eventOff () {
      const animCss = Xt.animCss(object, ['backgroundColor'])
      TweenMax.set(object, { backgroundColor: animCss.backgroundColor.current })
      TweenMax.to(object, 3, { backgroundColor: animCss.backgroundColor.final, ease: easeOut })
    }

    // event

    object.addEventListener('mouseenter', eventOn)
    object.addEventListener('mouseleave', eventOff)
    object.addEventListener('focusin', eventOn)
    object.addEventListener('focusout', eventOff)
    object.addEventListener('click', eventOff)

    object.addEventListener('on.xt', eventOn)
    object.addEventListener('off.xt', eventOff)
  }
})
