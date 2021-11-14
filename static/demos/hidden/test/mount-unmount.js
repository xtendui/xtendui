import { Xt } from 'xtendui'
import 'xtendui/src/drop'
import 'xtendui/src/overlay'

/* mountTest */

const mountTest = ({ ref }) => {
  // vars

  const overlay = ref.querySelector('[data-xt-overlay]')
  const self = Xt.get({ name: 'xt-overlay', el: overlay })

  // mount granularly

  Xt.mount({
    root: ref,
    matches: '.xt-overlay',
    mount: () => {
      const count = parseFloat(ref.getAttribute('data-test-mountroot') ?? 0) + 1
      ref.setAttribute('data-test-mountroot', count)
      // eslint-disable-next-line no-console
      console.log('TEST mount root once this should be 1 on init and should remain 1 on deactivation.', count)
    },
  })

  // init

  for (const tr of self.targets.filter(x => self.hasCurrent({ el: x }))) {
    // eslint-disable-next-line no-console
    console.log('TEST init xtNamespace should be 1.', Xt.dataStorage.get(self.ns, 'xtNamespace').length)
    // eslint-disable-next-line no-console
    console.log(
      'TEST init classes and properties should be `true true true true`.',
      tr.classList.contains('on'),
      tr.classList.contains('in'),
      tr.classList.contains('initial'),
      self.initial
    )
    requestAnimationFrame(() => {
      // eslint-disable-next-line no-console
      console.log(
        'TEST after init classes and properties should be `true true false false`.',
        tr.classList.contains('on'),
        tr.classList.contains('in'),
        tr.classList.contains('initial'),
        self.initial
      )
    })
  }

  // off

  const off = () => {
    // eslint-disable-next-line no-console
    console.log(
      'TEST unmount 1 disableDeactivate when overlay open and change page (browser location prev next) overlay should close automatically and this should NOT be called.'
    )
  }

  for (const tr of self.targets) {
    tr.addEventListener('off.xt.overlay', off)
  }

  // resize

  const resize = () => {
    // eslint-disable-next-line no-console
    console.log('TEST unmount this should NOT be called multiple times on changing page and resize.')
  }

  addEventListener('resize', resize)

  // unmount

  return () => {
    // eslint-disable-next-line no-console
    console.log(
      'TEST unmount 2 Xt._unmountArr should be the same and xtNamespace should be 0.',
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
