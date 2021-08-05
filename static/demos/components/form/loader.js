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
    matches: 'button[type="submit"]',
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

  const button = ref
  const form = button.form
  const loaderTemplate = document.querySelector('[data-js-loader-template]')

  // submit

  const submit = () => {
    form.classList.add('loading')
  }

  form.addEventListener('submit', submit)

  // inject

  if (form.classList.contains('xt-loading')) {
    form.append(Xt.node({ str: loaderTemplate.innerHTML }))
  } else if (!button.classList.contains('xt-loading')) {
    button.classList.add('xt-loading')
    const text = button.innerHTML
    button.innerHTML = ''
    button.append(Xt.node({ str: `<span class="xt-loading-content"></span>` }))
    button.append(Xt.node({ str: loaderTemplate.innerHTML }))
    const content = button.querySelector('.xt-loading-content')
    content.innerHTML = text
  }

  // unmount

  return () => {}
}
