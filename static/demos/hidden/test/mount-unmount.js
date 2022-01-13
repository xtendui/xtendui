import { Xt } from 'xtendui'
import 'xtendui/src/drop'
import 'xtendui/src/overlay'

/* mountTest */

const mountTest = ({ ref }) => {
  // vars

  const overlay = ref.querySelector('[data-xt-overlay]')
  const self = Xt.get({ name: 'xt-overlay', el: overlay })
  const tr = self.targets[0]

  // mount granularly

  Xt.mount({
    root: ref,
    matches: '[data-xt-overlay]',
    mount: () => {
      const count = parseFloat(ref.getAttribute('data-test-mountroot') ?? 0) + 1
      ref.setAttribute('data-test-mountroot', count)
      // eslint-disable-next-line no-console
      console.log('TEST mount root once, this should be 1 on init, should remain 1 on deactivation.', count)
    },
  })

  // init

  // eslint-disable-next-line no-console
  console.log('TEST init xtNamespace, should be 1.', Xt.dataStorage.get(self.ns, 'xtNamespace').length)
  // eslint-disable-next-line no-console
  console.log(
    'TEST init classes and properties, should be `true true true true`.',
    tr.classList.contains('on'),
    tr.classList.contains('in'),
    tr.classList.contains('initial'),
    self.initial
  )
  ref.setAttribute(
    'data-test-initial',
    `${tr.classList.contains('on')} ${tr.classList.contains('in')} ${tr.classList.contains('initial')} ${self.initial}`
  )
  requestAnimationFrame(() => {
    // eslint-disable-next-line no-console
    console.log(
      'TEST after init classes and properties, should be `true true false false`.',
      tr.classList.contains('on'),
      tr.classList.contains('in'),
      tr.classList.contains('initial'),
      self.initial
    )
  })

  // off

  const off = () => {
    // eslint-disable-next-line no-console
    console.log('TEST unmount should disable on deactivate, should remove from dom overlay.')
  }

  tr.addEventListener('off.xt.overlay', off)

  // resize

  const resize = () => {
    const count = parseFloat(ref.getAttribute('data-test-resize') ?? 0) + 1
    ref.setAttribute('data-test-resize', count)
    // eslint-disable-next-line no-console
    console.log('TEST unmount, this should increase by one on changing page and resize.', count)
  }

  addEventListener('resize', resize)

  // unmount

  return () => {
    // eslint-disable-next-line no-console
    console.log(
      'TEST unmount, unmountArr should be the same, xtNamespace should be 0.',
      Xt._unmountArr.length,
      Xt.dataStorage.get(self.ns, 'xtNamespace').length
    )
    removeEventListener('resize', resize)
  }
}

/* mount */

Xt.mount({
  matches: '.demo--mount-unmount',
  mount: ({ ref }) => {
    const unmountTest = mountTest({ ref })

    // unmount

    return () => {
      unmountTest()
    }
  },
})
