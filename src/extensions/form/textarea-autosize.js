import {Xt} from 'xtend-library'

//////////////////////
// TextareaAutosize
//////////////////////

class TextareaAutosize {

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @constructor
   */
  constructor(object) {
    let self = this;
    self.object = object;
    // @FIX multiple initializations
    let alreadyDefinedInstance = Xt.get(self.componentName, self.object)
    if (!alreadyDefinedInstance) {
      // set
      Xt.set(self.componentName, self.object, self);
      // init
      self.init();
    } else {
      return alreadyDefinedInstance;
    }
  }

  //////////////////////
  // init
  //////////////////////

  /**
   * init
   */
  init() {
    let self = this;
    // key
    self.object.addEventListener('keydown', self.keychange.bind(self));
    self.object.addEventListener('keyup', self.keychange.bind(self));
    // form
    let form = self.object.closest('form');
    if (form) {
      form.addEventListener('reset', self.keychange.bind(self));
    }
    // initial
    self.keychange.bind(self)();
  }

  //////////////////////
  // methods
  //////////////////////

  /**
   * keychange
   */
  keychange() {
    let self = this;
    self.object.style.height = '5px';
    self.object.style.height = (self.object.scrollHeight) + 'px'; // fixes both safari RAF and form reset
    requestAnimationFrame(function () {
      self.object.style.height = '5px'; // fixes both safari RAF and form reset
      self.object.style.height = (self.object.scrollHeight) + 'px';
    });
  }

  //////////////////////
  // destroy
  //////////////////////

  /**
   * destroy
   */
  destroy() {
    let self = this;
    // key
    self.object.removeEventListener('keydown', self.keychange.bind(self));
    self.object.removeEventListener('keyup', self.keychange.bind(self));
    // form
    let form = self.object.closest('form');
    if (form) {
      form.removeEventListener('reset', self.keychange.bind(self));
    }
  }

}

//////////////////////
// option
//////////////////////

TextareaAutosize.componentName = 'xt-textarea-autosize';

//////////////////////
// export
//////////////////////

Xt.TextareaAutosize = TextareaAutosize;

//////////////////////
// observe
//////////////////////

Xt.mount.push({
  matches: '[data-' + Xt.TextareaAutosize.componentName + ']',
  fnc: function mount(object) {

    let self = new Xt.TextareaAutosize(object);

    // unmount

    return function unmount() {
      self.destroy();
      self = null;
    };

  }
});
