import { Xt } from 'xtendui'

Xt.mount({
  matches: '.demo--form-loader',
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
  // mount granularly

  Xt.mount({
    root: ref,
    matches: 'button[type="submit"], .xt-loadable',
    mount: ({ ref }) => {
      return mountFormLoader({ ref })
    },
  })

  // unmount

  return () => {}
}

/* mountFormLoader */

const mountFormLoader = ({ ref }) => {
  // vars

  const loadable = ref
  const form = loadable.form || loadable.closest('form')
  const loaderTemplate = document.querySelector('[data-node-loader-template]')

  // submit

  const submit = () => {
    console.log(loadable, loadable.classList.contains('xt-loadable-ignore'))
    loadable.classList.add('xt-loading')
  }

  if (!loadable.classList.contains('xt-loadable-ignore')) {
    form.addEventListener('submit', submit)
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
