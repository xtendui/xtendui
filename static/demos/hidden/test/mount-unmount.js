import { Xt } from 'xtendui'
import 'xtendui/src/drop'
import 'xtendui/src/overlay'

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

/* mountTest */

const mountTest = ({ ref }) => {
  // vars

  const drop = ref
  const overlay = ref

  // mount

  Xt.mount({
    root: ref,
    matches: '.xt-overlay',
    mount: () => {
      // eslint-disable-next-line no-console
      console.log('TEST MOUNT this should be called once and should NOT be called on overlay close.')
    },
  })

  // init

  let self = new Xt.Overlay(overlay, {
    duration: 500,
  })

  const selfDrop = new Xt.Drop(drop, {})

  // on

  const on = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      tr.removeEventListener('on.xt.overlay', on)
      // eslint-disable-next-line no-console
      console.log(
        'TEST INITIAL ON 1 this should be `true true true true`.',
        tr.classList.contains('on'),
        tr.classList.contains('in'),
        tr.classList.contains('initial'),
        self.initial
      )
      requestAnimationFrame(() => {
        // eslint-disable-next-line no-console
        console.log(
          'TEST INITIAL ON 2 this should be `true true false false`.',
          tr.classList.contains('on'),
          tr.classList.contains('in'),
          tr.classList.contains('initial'),
          self.initial
        )
      })
    }
  }

  for (const tr of self.targets.filter(x => self.hasCurrent({ el: x }))) {
    // eslint-disable-next-line no-console
    console.log(
      'TEST INITIAL ON 0 this should be `true true true true`.',
      tr.classList.contains('on'),
      tr.classList.contains('in'),
      tr.classList.contains('initial'),
      self.initial
    )
    tr.addEventListener('on.xt.overlay', on)
  }

  // off

  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // eslint-disable-next-line no-console
      console.log(
        'TEST UNMOUNT 0 closeauto when overlay open and change page (browser location prev next) should be called on unmount and overlay should close'
      )
    }
  }

  for (const tr of self.targets) {
    tr.addEventListener('off.xt.overlay', off)
  }

  // off drop

  const offDrop = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // eslint-disable-next-line no-console
      console.log(
        'TEST UNMOUNT 1 disableDeactivate when drop open and change page (browser location prev next) this should NOT be called.'
      )
    }
  }

  for (const tr of selfDrop.targets) {
    tr.addEventListener('off.xt.drop', offDrop)
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
    console.log('TEST UNMOUNT 2 this should be called on change page.')
    removeEventListener('resize', resize)
    self.destroy()
    self = null
  }
}
