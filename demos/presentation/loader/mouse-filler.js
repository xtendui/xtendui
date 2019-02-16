Xt.observe.push({
  matches: '.loader',
  fnc: function (main, index, query) {

    // follow mouse

    let loader = document.querySelectorAll('.loader--mouse')[0];
    let container = Xt.parents(main, '.card')[0];
    let width;
    let height;

    function mousemove(e) {
      requestAnimationFrame(function () {
        // fix initial
        if (width === undefined) {
          mouseenter(e);
        }
        // position
        let top = e.clientY + height / 2;
        let left = e.clientX + width / 2;
        loader.style.top = top + 'px';
        loader.style.left = left + 'px';
      });
    }

    function mouseenter(e) {
      requestAnimationFrame(function () {
        // size
        let rect = loader.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        // class
        loader.classList.add('active');
        loader.classList.remove('out');
        // position
        let top = e.clientY + height / 2;
        let left = e.clientX + width / 2;
        loader.style.top = top + 'px';
        loader.style.left = left + 'px';
      });
    }

    function mouseleave(e) {
      requestAnimationFrame(function () {
        // class
        loader.classList.remove('active');
        loader.classList.add('out');
      });
    }

    container.removeEventListener('mousemove', mousemove);
    container.addEventListener('mousemove', mousemove);
    container.removeEventListener('mouseenter', mouseenter);
    container.addEventListener('mouseenter', mouseenter);
    container.removeEventListener('mouseleave', mouseleave);
    container.addEventListener('mouseleave', mouseleave);

  }
});
