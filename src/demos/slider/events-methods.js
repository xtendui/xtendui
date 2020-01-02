import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '#demo_slider-events',
  mount: function(object) {
    // init

    let self = new Xt.Slider(object, {
      auto: {
        time: 2000,
        initial: false,
      },
      align: 'center',
      drag: { wrap: true },
    })

    // log

    let logTimeout
    const log = document.querySelector('#demo_slider-events-log')

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

    // first element

    const firstEl = document.querySelector('#demo_slider-events-first-element')

    const firstElFnc = function() {
      logAdd('<strong>1st element</strong>')
      const elements = self.elements.filter(x => !x.classList.contains('xt-wrap'))
      elements[0].dispatchEvent(new CustomEvent('on.trigger.xt'))
    }

    firstEl.addEventListener('click', firstElFnc)

    // first target

    const firstTr = document.querySelector('#demo_slider-events-first-target')

    const firstTrFnc = function() {
      logAdd('<strong>1st target</strong>')
      const targets = self.targets.filter(x => !x.classList.contains('xt-wrap'))
      targets[0].dispatchEvent(new CustomEvent('on.trigger.xt'))
    }

    firstTr.addEventListener('click', firstTrFnc)

    // autostart

    const autostartEl = document.querySelector('#demo_toggle-events-autostart')

    const autstartFnc = function() {
      logAdd('<strong>autostart</strong>')
      self.object.dispatchEvent(new CustomEvent('autostart.trigger.xt'))
    }

    autostartEl.addEventListener('click', autstartFnc)

    // autostop

    const autostopEl = document.querySelector('#demo_toggle-events-autostop')

    const autostopFnc = function() {
      logAdd('<strong>autostop</strong>')
      self.object.dispatchEvent(new CustomEvent('autostop.trigger.xt'))
    }

    autostopEl.addEventListener('click', autostopFnc)

    // add

    const addBtn = document.querySelector('#demo_slider-events-add')

    const addFnc = function() {
      clearTimeout(parseFloat(object.dataset.reinitTimeout))
      object.dataset.reinitTimeout = setTimeout(function() {
        logAdd('<strong>add</strong>')
        // targets
        const targets = self.targets.filter(x => !x.classList.contains('xt-wrap'))
        const trIndex = targets.length + 1
        const tr = `
        <li class="slide col-6 col-4-sm">
          <div class="slide-inner">

            <div class="card card-slide align-center">
              <div class="card-design"></div>
              <div class="card-inner">
                <div class="card-content">
                  <div class="card-block card-item">
                    <div class="card-title">${trIndex}</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </li>`
        targets[targets.length - 1].after(Xt.createElement(tr))
        // reinit
        logAdd('<strong>reinit</strong>')
        self.reinit()
      }, 1000).toString()
    }

    addBtn.addEventListener('click', addFnc)

    // remove

    const removeBtn = document.querySelector('#demo_slider-events-remove')

    const removeFnc = function() {
      clearTimeout(parseFloat(object.dataset.reinitTimeout))
      object.dataset.reinitTimeout = setTimeout(function() {
        logAdd('<strong>remove</strong>')
        if (self.elements.length > 1 && self.targets.length > 1) {
          // elements
          const elements = self.elements.filter(x => !x.classList.contains('xt-wrap'))
          elements[elements.length - 1].remove()
          // targets
          const targets = self.targets.filter(x => !x.classList.contains('xt-wrap'))
          targets[targets.length - 1].remove()
          // reinit
          logAdd('<strong>reinit</strong>')
          self.reinit()
        }
      }, 1000).toString()
    }

    removeBtn.addEventListener('click', removeFnc)

    // reinit

    const reinitBtn = document.querySelector('#demo_slider-events-reinit')

    const reinitFnc = function() {
      clearTimeout(parseFloat(object.dataset.reinitTimeout))
      object.dataset.reinitTimeout = setTimeout(function() {
        logAdd('<strong>reinit</strong>')
        self.reinit()
      }, 1000).toString()
    }

    reinitBtn.addEventListener('click', reinitFnc)

    // restart

    const restartBtn = document.querySelector('#demo_slider-events-restart')

    const restartFnc = function() {
      logAdd('<strong>restart</strong>')
      self.restart()
    }

    restartBtn.addEventListener('click', restartFnc)

    // destroy

    const destroyBtn = document.querySelector('#demo_slider-events-destroy')

    const destroyFnc = function() {
      logAdd('<strong>destroy</strong>')
      self.destroy()
    }

    destroyBtn.addEventListener('click', destroyFnc)

    // unmount

    const unmountBtn = document.querySelector('#demo_slider-events-unmount')

    const unmountFnc = function() {
      logAdd('<strong>unmount</strong>')
      unmount()
    }

    unmountBtn.addEventListener('click', unmountFnc)

    // events

    const events = function(e) {
      let str = 'event <strong>' + e.type + '</strong>'
      if (e.target.getAttribute('title')) {
        str += ' from <strong>' + e.target.getAttribute('title') + '</strong>'
      } else if (e.target.querySelector('.card-title')) {
        str += ' from <strong>' + e.target.querySelector('.card-title').innerHTML + '</strong>'
      } else if (!e.target.querySelector('*')) {
        str += ' from <strong>' + e.target.innerHTML + '</strong>'
      }
      logAdd(str)
    }

    object.addEventListener('init.xt', events)
    object.addEventListener('destroy.xt', events)
    object.addEventListener('on.xt', events)
    object.addEventListener('off.xt', events)

    // unmount

    const unmount = function() {
      firstEl.removeEventListener('click', firstElFnc)
      firstTr.removeEventListener('click', firstTrFnc)
      addBtn.removeEventListener('click', addFnc)
      removeBtn.removeEventListener('click', removeFnc)
      reinitBtn.removeEventListener('click', reinitFnc)
      restartBtn.removeEventListener('click', restartFnc)
      destroyBtn.removeEventListener('click', destroyFnc)
      unmountBtn.removeEventListener('click', unmountFnc)
      object.removeEventListener('init.xt', events)
      object.removeEventListener('destroy.xt', events)
      object.removeEventListener('on.xt', events)
      object.removeEventListener('off.xt', events)
      self.destroy()
      self = null
    }
    return unmount
  },
})
