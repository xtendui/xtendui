import { Xt } from 'xtend-library/src/xt.js'

/**
 * group-expand
 */

Xt.mount.push({
  matches: '.group-expand',
  mount: object => {
    // on

    object.querySelector('input').addEventListener('focus', e => {
      object.classList.add('expand')
      object.classList.add('expand-focus')
    })

    object.addEventListener('mouseenter', e => {
      object.classList.add('expand-enter')
    })

    // off

    object.querySelector('input').addEventListener('blur', e => {
      object.classList.remove('expand-focus')
      if (!object.classList.contains('expand-enter')) {
        object.classList.remove('expand')
      }
    })

    object.addEventListener('mouseleave', e => {
      object.classList.remove('expand-enter')
      if (!object.classList.contains('expand-focus')) {
        object.classList.remove('expand')
      }
    })
  },
})
