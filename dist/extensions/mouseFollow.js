const mouseFollow = function (options) {
  let element = options.element;
  let container = options.container;
  let mouseCheck = options.mouseCheck;
  let width;
  let height;

  let mousemove = function (e) {
    // fix initial
    if (width === undefined) {
      mouseenter(e);
    }
    // position
    Xt.friction(element, {
      "x": e.clientX + width / 2,
      "y": e.clientY + height / 2
    });
  };

  let mouseenter = function (e) {
    if (mouseCheck(options)) {
      // size
      let rect = element.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      // class
      element.classList.add('active');
      element.classList.remove('out');
      // initial
      Xt.friction(element, {
        "x": e.clientX - width / 2,
        "y": e.clientY - height / 2,
        "friction": "return delta",
      });
    }
  };

  let mouseleave = function (e) {
    if (mouseCheck(options)) {
      // class
      element.classList.remove('active');
      element.classList.add('out');
    }
  };

  container.removeEventListener('mousemove', mousemove);
  container.addEventListener('mousemove', mousemove);
  container.removeEventListener('mouseenter', mouseenter);
  container.addEventListener('mouseenter', mouseenter);
  container.removeEventListener('mouseleave', mouseleave);
  container.addEventListener('mouseleave', mouseleave);

};

export {mouseFollow};
