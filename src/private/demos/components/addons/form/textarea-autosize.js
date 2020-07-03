import { Xt } from 'xtend-library'
import 'xtend-library/src/addons/form/textarea-autosize.js'

Xt.mount.push({
  matches: '.demo--textarea-autosize',
  mount: object => {
    // init

    let self = new Xt.TextareaAutosize(object, {})

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
