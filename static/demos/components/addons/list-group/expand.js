import { Xt } from 'xtendui'

Xt.mount.push({
  matches: '.CCC--group-expand',
  mount: ({ object }) => {
    const unmountExpand = mountExpand({ object })

    // unmount

    return () => {
      unmountExpand()
    }
  },
})

/* mountExpand */

const mountExpand = ({ object }) => {
  const lists = object.querySelectorAll('.xt-list')

  for (const list of lists) {
    // on

    list.querySelector('input').addEventListener('focus', () => {
      list.classList.add('expand')
      list.classList.add('expand-focus')
    })

    list.addEventListener('mouseenter', () => {
      list.classList.add('expand-enter')
    })

    // off

    list.querySelector('input').addEventListener('blur', () => {
      list.classList.remove('expand-focus')
      if (!list.classList.contains('expand-enter')) {
        list.classList.remove('expand')
      }
    })

    list.addEventListener('mouseleave', () => {
      list.classList.remove('expand-enter')
      if (!list.classList.contains('expand-focus')) {
        list.classList.remove('expand')
      }
    })
  }

  // unmount

  return () => {}
}
