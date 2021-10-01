import { Xt } from 'xtendui'

/* mountExpands */

const mountExpands = ({ ref }) => {
  // mount granularly

  Xt.mount({
    root: ref,
    matches: '.xt-list',
    mount: ({ ref }) => {
      return mountExpand({ ref })
    },
  })

  // unmount

  return () => {}
}

/* mountExpand */

const mountExpand = ({ ref }) => {
  // vars

  const list = ref

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

  // unmount

  return () => {}
}

/* mount */

Xt.mount({
  matches: '.demo--group-expand',
  mount: ({ ref }) => {
    const unmountExpands = mountExpands({ ref })

    // unmount

    return () => {
      unmountExpands()
    }
  },
})
