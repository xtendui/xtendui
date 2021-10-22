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
      // eslint-disable-next-line no-console
      console.log('TEST MOUNT this should be called once and should NOT be called on overlay close.')
    },
  })

  // init

  for (const tr of self.targets.filter(x => self.hasCurrent({ el: x }))) {
    tr.setAttribute('data-test-unique-id', self.uniqueId)
    // eslint-disable-next-line no-console
    console.log('TEST INITIAL xtNamespace should be 1.', Xt.dataStorage.get(self.ns, 'xtNamespace').length)
    // eslint-disable-next-line no-console
    console.log(
      'TEST INITIAL 0 this should be `true true true true`.',
      tr.classList.contains('on'),
      tr.classList.contains('in'),
      tr.classList.contains('initial'),
      self.initial
    )
    requestAnimationFrame(() => {
      // eslint-disable-next-line no-console
      console.log(
        'TEST INITIAL 1 this should be `true true false false`.',
        tr.classList.contains('on'),
        tr.classList.contains('in'),
        tr.classList.contains('initial'),
        self.initial
      )
    })
  }

  // off

  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // eslint-disable-next-line no-console
      console.log(
        'TEST UNMOUNT 1 disableDeactivate when overlay open and change page (browser location prev next) overlay should close automatically and this should NOT be called.'
      )
    }
  }

  for (const tr of self.targets) {
    tr.addEventListener('off.xt.overlay', off)
  }

  // resize

  const resize = () => {
    // eslint-disable-next-line no-console
    console.log('TEST UNMOUNT this should NOT be called multiple times on changing page and resize.')
  }

  addEventListener('resize', resize)

  // unmount

  return () => {
    // eslint-disable-next-line no-console
    console.log(
      'TEST UNMOUNT 2 Xt.unmountArr should be the same and xtNamespace should be 0.',
      Xt.unmountArr.length,
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
