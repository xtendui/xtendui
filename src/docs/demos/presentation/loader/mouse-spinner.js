Xt.observe.push({
  matches: '.loader',
  fnc: function (main, index, query) {

    // follow mouse

    let loader = main;
    let container = document.documentElement;
    let rect = loader.getBoundingClientRect();
    let width = rect.width;
    let height = rect.height;

    function mousemove(e) {
      let top = e.clientY + height / 2;
      let left = e.clientX + width / 2;
      loader.style.top = top + 'px';
      loader.style.left = left + 'px';
    }

    function mouseenter(e) {
      loader.classList.add('active');
      loader.classList.remove('out');
      let top = e.clientY + height / 2;
      let left = e.clientX + width / 2;
      loader.style.top = top + 'px';
      loader.style.left = left + 'px';
    }

    function mouseleave(e) {
      loader.classList.remove('active');
      loader.classList.add('out');
    }

    container.removeEventListener('mousemove', mousemove);
    container.addEventListener('mousemove', mousemove);
    container.removeEventListener('mouseenter', mouseenter);
    container.addEventListener('mouseenter', mouseenter);
    container.removeEventListener('mouseleave', mouseleave);
    container.addEventListener('mouseleave', mouseleave);

  }
});
