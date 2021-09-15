import { Xt } from 'xtendui'

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

/* mountFormLoaders */

const mountFormLoaders = ({ ref }) => {
  // vars

  const loaderTemplate = ref.querySelector('[data-node-loader-template]')

  // mount granularly

  Xt.mount({
    root: ref,
    raf: false,
    matches: 'button[type="submit"], .xt-loadable',
    mount: ({ ref }) => {
      return mountFormLoader({ ref, loaderTemplate })
    },
  })

  // unmount

  return () => {}
}

/* mountFormLoader */

const mountFormLoader = ({ ref, loaderTemplate }) => {
  // vars

  const loadable = ref
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
    content.innerHTML = text
  }

  // unmount

  return () => {}
}
