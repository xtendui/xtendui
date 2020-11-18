import { Xt } from 'xtendui'

Xt.mount.push({
  matches: '.demo--group-expand',
  mount: object => {
    // on

    object.querySelector('input').addEventListener('focus', () => {
      object.classList.add('expand')
      object.classList.add('expand-focus')
    })

    object.addEventListener('mouseenter', () => {
      object.classList.add('expand-enter')
    })

    // off

    object.querySelector('input').addEventListener('blur', () => {
      object.classList.remove('expand-focus')
      if (!object.classList.contains('expand-enter')) {
        object.classList.remove('expand')
      }
    })

    object.addEventListener('mouseleave', () => {
      object.classList.remove('expand-enter')
      if (!object.classList.contains('expand-focus')) {
        object.classList.remove('expand')
      }
    })
  },
})
