//////////////////////
// MouseFollow
//////////////////////

class MouseFollow {

  /**
   * constructor
   * @param {Object} options User options
   * @constructor
   */
  constructor(options = {}) {
    let self = this;
    self.options = options;
    self.object = options.object;
    self.container = options.container;
    self.mouseCheck = options.mouseCheck;
    self.destroy();
    self.init();
  }

  //////////////////////
  // init
  //////////////////////

  /**
   * init
   */
  init() {
    let self = this;
    self.container.addEventListener('mousemove', self.mousemove.bind(self));
    self.container.addEventListener('mouseenter', self.mouseenter.bind(self));
    self.container.addEventListener('mouseleave', self.mouseleave.bind(self));
  }

  //////////////////////
  // methods
  //////////////////////

  /**
   * mousemove
   */
  mousemove(e) {
    let self = this;
    // fix initial
    if (self.width === undefined) {
      self.mouseenter(e);
    }
    // position
    Xt.friction(self.object, {
      "x": e.clientX + self.width / 2,
      "y": e.clientY + self.height / 2
    });
  }

  /**
   * mouseenter
   */
  mouseenter(e) {
    let self = this;
    let options = self.options;
    if (self.mouseCheck(options)) {
      // size
      let rect = self.object.getBoundingClientRect();
      self.width = rect.width;
      self.height = rect.height;
      // class
      self.object.classList.add('active');
      self.object.classList.remove('out');
      // initial
      Xt.friction(self.object, {
        "x": e.clientX - self.width / 2,
        "y": e.clientY - self.height / 2,
        "friction": "return delta",
      });
    }
  }

  /**
   * mouseleave
   */
  mouseleave() {
    let self = this;
    let options = self.options;
    if (self.mouseCheck(options)) {
      // class
      self.object.classList.remove('active');
      self.object.classList.add('out');
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
    self.container.removeEventListener('mousemove', self.mousemove.bind(self));
    self.container.removeEventListener('mouseenter', self.mouseenter.bind(self));
    self.container.removeEventListener('mouseleave', self.mouseleave.bind(self));
  }

}

//////////////////////
// export
//////////////////////

Xt.MouseFollow = MouseFollow;

