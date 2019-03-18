Xt.observe.push({
  matches: '.loader',
  fnc: function (main, index, query) {

    // follow mouse

    let loader = document.querySelectorAll('.loader--mouse')[0];
    let container = Xt.parents(main, '.card')[0];
    let width;
    let height;

    function mousemove(e) {
      // fix initial
      if (width === undefined) {
        mouseenter(e);
      }
      // position
      Xt.friction(loader, {
        "x": e.clientX + width / 2,
        "y": e.clientY + height / 2
      });
    }

    function mouseenter(e) {
      if (!loader.classList.contains('loader--disabled') || loader.classList.contains('loader--js')) {
        // size
        let rect = loader.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        // class
        loader.classList.add('active');
        loader.classList.remove('out');
      }
    }

    function mouseleave(e) {
      if (!loader.classList.contains('loader--disabled') || loader.classList.contains('loader--js')) {
        // class
        loader.classList.remove('active');
        loader.classList.add('out');
      }
    }

    container.removeEventListener('mousemove', mousemove);
    container.addEventListener('mousemove', mousemove);
    container.removeEventListener('mouseenter', mouseenter);
    container.addEventListener('mouseenter', mouseenter);
    container.removeEventListener('mouseleave', mouseleave);
    container.addEventListener('mouseleave', mouseleave);

  }
});
