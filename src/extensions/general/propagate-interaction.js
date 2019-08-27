import {Xt} from 'xtend-library'

//////////////////////
// PropagateInteraction
//////////////////////

class PropagateInteraction {

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  constructor(object, optionsJs = {}) {
    let self = this;
    self.object = object;
    self.options = optionsJs;
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
    self.targets = self.object.querySelectorAll(self.options.targets);
    if (self.targets.length) {
      self.object.addEventListener('mouseenter', self.hoverOn.bind(self));
      self.object.addEventListener('mouseleave', self.hoverOff.bind(self));
      self.object.addEventListener('mousedown', self.activeOn.bind(self));
      addEventListener('mouseup', self.activeOff.bind(self).bind(self, false));
      self.object.addEventListener('click', self.activeOff.bind(self).bind(self, true));
    }
  }

  //////////////////////
  // methods
  //////////////////////

  /**
   * hoverOn
   */
  hoverOn() {
    let self = this;
    for (let tr of self.targets) {
      tr.classList.add('hover');
      tr.dispatchEvent(new CustomEvent('mouseenter'));
    }
  }

  /**
   * hoverOff
   */
  hoverOff() {
    let self = this;
    for (let tr of self.targets) {
      tr.classList.remove('hover');
      tr.dispatchEvent(new CustomEvent('mouseleave'));
    }
  }

  /**
   * activeOn
   */
  activeOn() {
    let self = this;
    for (let tr of self.targets) {
      tr.classList.add('active');
      tr.dispatchEvent(new CustomEvent('mousedown'));
    }
  }

  /**
   * activeOff
   */
  activeOff(isClick) {
    let self = this;
    for (let tr of self.targets) {
      if (isClick) {
        tr.dispatchEvent(new CustomEvent('click'));
      } else {
        tr.classList.remove('active');
        tr.dispatchEvent(new CustomEvent('mouseup'));
      }
    }
  }

  //////////////////////
  // destroy
  //////////////////////

  /**
   * destroy
   */
  destroy() {
    let self = this;
    self.object.removeEventListener('mouseenter', self.hoverOn.bind(self));
    self.object.removeEventListener('mouseleave', self.hoverOff.bind(self));
    self.object.removeEventListener('mousedown', self.activeOn.bind(self));
    removeEventListener('mouseup', self.activeOff.bind(self));
  }

}

//////////////////////
// export
//////////////////////

Xt.PropagateInteraction = PropagateInteraction;
