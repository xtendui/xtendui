import { Xt } from 'xtendui'

/* mountFormLoaders */

const mountFormLoaders = ({ ref }) => {
  // vars

  const loadables = ref.querySelectorAll('button[type="submit"], .xt-loadable')
  const loaderTemplate = ref.querySelector('[data-node-loader-template]')

  for (const loadable of loadables) {
    // vars

    const form = loadable.form || loadable.closest('form')

    // submit

    const submit = () => {
      loadable.classList.add('xt-loading')
    }

    if (!loadable.classList.contains('xt-loadable-ignore')) {
      form.addEventListener('submit', submit)
    }

    // reset
    // if you want to deactivate xt-loading on ajax use form.dispatchEvent(new CustomEvent('reset'))

    const reset = () => {
      loadable.classList.remove('xt-loading')
    }

    if (!loadable.classList.contains('xt-loadable-ignore')) {
      form.addEventListener('reset', reset)
      addEventListener('pageshow', reset)
    }

    // inject

    if (loadable.classList.contains('xt-loadable')) {
      loadable.append(Xt.node({ str: loaderTemplate.innerHTML }))
    } else {
      loadable.classList.add('xt-loadable')
      const text = loadable.innerHTML
      loadable.innerHTML = ''
      loadable.append(Xt.node({ str: `<span class="xt-loadable-content"></span>` }))
      loadable.append(Xt.node({ str: loaderTemplate.innerHTML }))
      const content = loadable.querySelector('.xt-loadable-content')
      content.innerHTML = Xt.sanitize(text)
    }
  }

  // unmount

  return () => {}
}

/* mount */

Xt.mount({
  matches: '.demo--form-loader-filler',
  mount: ({ ref }) => {
    const unmountFormLoaders = mountFormLoaders({ ref })

    // unmount

    return () => {
      unmountFormLoaders()
    }
  },
})
