import { Xt } from 'xtendui'

Xt.mount.push({
  matches: '#demo--drop-events',
  mount: ({ object }) => {
    // init

    let self = new Xt.Drop(object)

    // log

    const log = document.querySelector('#demo--drop-events-log')

    const logAdd = text => {
      log.innerHTML += `${text}<br/>`
      // scroll
      log.scrollTo(0, log.scrollHeight)
      // hr
      clearTimeout(window.logTimeout)
      window.logTimeout = setTimeout(() => {
        log.innerHTML += '<hr/>'
      }, 1000)
    }

    // first element

    const firstEl = document.querySelector('#demo--drop-events-first-element')

    const firstElFnc = () => {
      logAdd('<strong>1st element</strong>')
      const elements = self.elements
      elements[0].dispatchEvent(new CustomEvent('on.trigger.xt.drop'))
    }

    firstEl.addEventListener('click', firstElFnc)

    // first target

    const firstTr = document.querySelector('#demo--drop-events-first-target')

    const firstTrFnc = () => {
      logAdd('<strong>1st target</strong>')
      const targets = self.targets
      targets[0].dispatchEvent(new CustomEvent('on.trigger.xt.drop'))
    }

    firstTr.addEventListener('click', firstTrFnc)

    // add

    const addBtn = document.querySelector('#demo--drop-events-add')

    const addFnc = () => {
      clearTimeout(parseFloat(object.dataset.reinitTimeout))
      object.dataset.reinitTimeout = setTimeout(() => {
        logAdd('<strong>add</strong>')
        // elements
        const elements = self.elements.filter(x => !x.classList.contains('xt-wrap'))
        const indexEl = elements.length + 1
        const strEl = `
          <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            Element ${indexEl}
          </button>
        `
        document.querySelector('#demo--drop-events').append(Xt.createElement(strEl))
        const targets = self.targets.filter(x => !x.classList.contains('xt-wrap'))
        const indexTr = targets.length + 1
        const strTr = `
          <div class="xt-drop p-4" title="Target ${indexTr}">
            <div class="xt-card w-64 py-3.5 rounded-md shadow-drop text-black xt-links-default bg-white">
              <nav class="list flex-col">
                <a href="#" class="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </a>
                <button type="button" class="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                  Dolor sit
                </button>
                <button type="button" class="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                  Amet
                </button>
              </nav>
            </div>
          </div>
        `
        document.querySelector('#demo--drop-events').append(Xt.createElement(strTr))
        // reinit
        logAdd('<strong>reinit</strong>')
        self.reinit()
      }, 200).toString()
    }

    addBtn.addEventListener('click', addFnc)

    // remove

    const removeBtn = document.querySelector('#demo--drop-events-remove')

    const removeFnc = () => {
      clearTimeout(parseFloat(object.dataset.reinitTimeout))
      object.dataset.reinitTimeout = setTimeout(() => {
        logAdd('<strong>remove</strong>')
        // element
        const elements = self.elements
        elements[elements.length - 1].remove()
        // reinit
        logAdd('<strong>reinit</strong>')
        self.reinit()
      }, 200).toString()
    }

    removeBtn.addEventListener('click', removeFnc)

    // reinit

    const reinitBtn = document.querySelector('#demo--drop-events-reinit')

    const reinitFnc = () => {
      clearTimeout(parseFloat(object.dataset.reinitTimeout))
      object.dataset.reinitTimeout = setTimeout(() => {
        logAdd('<strong>reinit</strong>')
        self.reinit()
      }, 200).toString()
    }

    reinitBtn.addEventListener('click', reinitFnc)

    // restart

    const restartBtn = document.querySelector('#demo--drop-events-restart')

    const restartFnc = () => {
      logAdd('<strong>restart</strong>')
      self.restart()
    }

    restartBtn.addEventListener('click', restartFnc)

    // destroy

    const destroyBtn = document.querySelector('#demo--drop-events-destroy')

    const destroyFnc = () => {
      logAdd('<strong>destroy</strong>')
      self.destroy()
    }

    destroyBtn.addEventListener('click', destroyFnc)

    // unmount

    const unmountBtn = document.querySelector('#demo--drop-events-unmount')

    const unmountFnc = () => {
      logAdd('<strong>unmount</strong>')
      unmount()
    }

    unmountBtn.addEventListener('click', unmountFnc)

    // events

    const events = e => {
      let str = `event <strong>${e.type}</strong>` + ` direction <strong>${self.direction}</strong>`
      if (e.target.getAttribute('title')) {
        str += ` from <strong>${e.target.getAttribute('title')}</strong>`
      } else if (e.target.querySelector(':scope > .xt-button')) {
        str += ` from <strong>${e.target.querySelector(':scope > .xt-button').textContent}</strong>`
      } else if (e.target.querySelector('.xt-card > *')) {
        str += ` from <strong>${e.target.querySelector('.xt-card > *').textContent}</strong>`
      } else if (e.target.querySelector(':scope > *')) {
        str += ` from <strong>${e.target.querySelector(':scope > *').textContent}</strong>`
      } else if (!e.target.querySelector('*')) {
        str += ` from <strong>${e.target.innerHTML}</strong>`
      }
      logAdd(str)
    }

    object.addEventListener('init.xt.drop', events)
    object.addEventListener('destroy.xt.drop', events)
    document.addEventListener('on.xt.drop', events, true)
    document.addEventListener('off.xt.drop', events, true)

    // unmount

    const unmount = () => {
      firstEl.removeEventListener('click', firstElFnc)
      firstTr.removeEventListener('click', firstTrFnc)
      addBtn.removeEventListener('click', addFnc)
      removeBtn.removeEventListener('click', removeFnc)
      reinitBtn.removeEventListener('click', reinitFnc)
      restartBtn.removeEventListener('click', restartFnc)
      destroyBtn.removeEventListener('click', destroyFnc)
      unmountBtn.removeEventListener('click', unmountFnc)
      object.removeEventListener('init.xt.drop', events)
      object.removeEventListener('destroy.xt.drop', events)
      document.removeEventListener('on.xt.drop', events, true)
      document.removeEventListener('off.xt.drop', events, true)
      self.destroy()
      self = null
    }
    return unmount
  },
})
