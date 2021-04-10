import { Xt } from 'xtendui'

Xt.mount({
  matches: '.demo--group-expand',
  mount: ({ ref }) => {
    const unmountExpand = mountExpand({ ref })

    // unmount

    return () => {
      unmountExpand()
    }
  },
})

/* mountExpand */

const mountExpand = ({ ref }) => {
  // vars

  const lists = ref.querySelectorAll('.xt-list')

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
