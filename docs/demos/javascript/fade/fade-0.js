

/* FARE DEMO CON JS E TWEENMAX
new XtFade(document.documentElement, {
  "elements": ".box-giant",
  "mode": "scroll" // scroll visible infinite
  "dist": 0, // px distance from top and bottom
});
*/

/*
// custom elements add fade
$('.messages, .global-site-notice').addClass('xt-fade');

// options
// 'visible': fade in visible elements
// 'scroll': fade in on scroll only 1 time
// 'infinite': fade in and out on scroll infinite times
var xtFadeMode = 'scroll';
var xtFadeDist = 0; // px distance from top and bottom
if ($('html').hasClass('mobile')) {
  xtFadeMode = 'visible';
  xtFadeDist = 0;
}

// animations functions
function xtFadeAnimate(init) {
  var dheight = $(document).height();
  // detect window
  var wtop = $(window).scrollTop();
  var wheight = $(window).height();
  var wbottom = wtop + wheight;
  // detect direction
  var direction = 'up';
  if ($(window).data('old-wtop') === undefined || wtop > $(window).data('old-wtop')) {
    direction = 'down';
  }
  $(window).data('old-wtop', wtop);
  // loop elements
  $('.xt-fade').each(function(i){
    var $element = $(this);
    var dist = xtFadeDist;
    // if visible
    if($element.is(':visible')) {
      // detect if in viewport
      var top = Math.round($element.offset().top);
      var bottom = top + $element.outerHeight();
      // dist
      if ((top < dist) || (dheight - bottom < dist)) { // remove dist when on top or bottom of window
        dist = 0;
      }
      if(bottom > wtop + dist && top < wbottom - dist){
        // if inside the viewport
        if(!$element.hasClass('xt-fade-in')) {
          $element.removeClass('xt-fade-out xt-fade-instant');
          $element.addClass('xt-fade-in');
          if (direction === 'up') {
            $element.addClass('xt-fade-inverse');
          } else {
            $element.removeClass('xt-fade-inverse');
          }
        }
      } else {
        // if outide viewport
        if (xtFadeMode === 'visible') {
          // show all instantly
          $element.addClass('xt-fade-in xt-fade-instant');
        } else if (xtFadeMode === 'infinite') {
          if(!$element.hasClass('xt-fade-out')) {
            $element.removeClass('xt-fade-in xt-fade-instant');
            if (dist) { // only when xt-fade-out makes sense
              $element.addClass('xt-fade-out');
              if (direction === 'up') {
                $element.addClass('xt-fade-inverse');
              } else {
                $element.removeClass('xt-fade-inverse');
              }
              // instant on init
              if (init) {
                $element.addClass('xt-fade-instant');
              }
            }
          }
        }
      }
    }
  });
}
function xtFadeIn() {
  $(window).on('scroll.xtFadeIn resize.xtFadeIn', function(e) {
    xtFadeAnimate();
  });
  xtFadeAnimate(true);
}
function xtFadeOut() {
  $(window).off('scroll resize');
  $('.xt-fade').each(function(i){
    var $element = $(this);
    $element.removeClass('xt-fade-in xt-fade-out xt-fade-instant xt-fade-inverse');
  });
}
*/