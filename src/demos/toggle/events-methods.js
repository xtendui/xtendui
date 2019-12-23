import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '#demo_toggle-events',
  mount: function(object) {
    // init

    let self = new Xt.Toggle(object, {
      min: 2,
      max: 2,
    })

    // log

    let logTimeout
    const log = document.querySelector('#demo_toggle-events-log')

    const logAdd = function(text) {
      log.innerHTML += text + '<br/>'
      // scroll
      log.scrollTo(0, log.scrollHeight)
      // hr
      clearTimeout(logTimeout)
      logTimeout = setTimeout(function() {
        log.innerHTML += '<hr/>'
      }, 1000)
    }

    // reinit

    const reinitBtn = document.querySelector('#demo_toggle-events-reinit')

    const reinit = function() {
      logAdd('toggle <strong>reinit</strong>')
      self.reinit()
    }

    reinitBtn.addEventListener('click', reinit)

    // restart

    const restartBtn = document.querySelector('#demo_toggle-events-restart')

    const restart = function() {
      logAdd('toggle <strong>restart</strong>')
      self.restart()
    }

    restartBtn.addEventListener('click', restart)

    // destroy

    const destroyBtn = document.querySelector('#demo_toggle-events-destroy')

    const destroy = function() {
      logAdd('toggle <strong>destroy</strong>')
      self.destroy()
    }

    destroyBtn.addEventListener('click', destroy)

    // first

    const firstBtn = document.querySelector('#demo_toggle-events-first')

    const first = function() {
      logAdd('toggle <strong>first</strong>')
      object.querySelector('button').dispatchEvent(new CustomEvent('on.xt'))
    }

    firstBtn.addEventListener('click', first)

    // events

    const events = function(e) {
      logAdd('toggle event: <strong>' + e.type + '</strong> > <strong>' + e.target.innerHTML + '</strong>')
    }

    object.addEventListener('on.xt', events)
    object.addEventListener('off.xt', events)

    // unmount

    return function unmount() {
      reinitBtn.removeEventListener('click', reinit)
      restartBtn.removeEventListener('click', restart)
      destroyBtn.removeEventListener('click', destroy)
      firstBtn.removeEventListener('click', first)
      object.removeEventListener('on.xt', events)
      object.removeEventListener('off.xt', events)
      self.destroy()
      self = null
    }
  },
})
