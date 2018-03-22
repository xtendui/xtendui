/*! xtend v0.0.6 (http://www.minimit.com/xtend/)
@copyright (c) 2016 - 2017 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend/blob/master/LICENSE) */

;( function($, window, document, undefined) {

  'use strict';
  
  //////////////////////
  // constructor
  //////////////////////

  var Xt = function(group, defaults, options) {
    this.group = group;
    this.init(defaults, options);
  };
  
  var XtToggle = function(group, defaults, options) {
    Xt.call(this, group, defaults, options);
  };
  XtToggle.prototype = Object.create(Xt.prototype);
  XtToggle.prototype.constructor = XtToggle;
  $.fn.xtToggle = function(options) {
    var defaults = {
      'name': 'xt-toggle',
      'elements': '> .button',
      'targets': '[class^="toggle-"], [class*=" toggle-"]',
      'class': 'active',
      'on': 'click',
      'min': 0,
      'max': 1,
    };
    return this.each( function() {
      if (!$.data(this, defaults.name)) {
        $.data(this, defaults.name, new XtToggle(this, defaults, options));
      }
    });
  };
  
  var XtDrop = function(group, defaults, options) {
    Xt.call(this, group, defaults, options);
  };
  XtDrop.prototype = Object.create(Xt.prototype);
  XtDrop.prototype.constructor = XtDrop;
  $.fn.xtDrop = function(options) {
    var defaults = {
      'name': 'xt-drop',
      'elements': '> .button',
      'targets': '.drop',
      'class': 'active',
      'on': 'click',
      'min': 0,
      'max': 1,
    };
    return this.each( function() {
      if (!$.data(this, defaults.name)) {
        $.data(this, defaults.name, new XtDrop(this, defaults, options));
      }
    });
  };
  
  var XtOverlay = function(group, defaults, options) {
    Xt.call(this, group, defaults, options);
  };
  XtOverlay.prototype = Object.create(Xt.prototype);
  XtOverlay.prototype.constructor = XtOverlay;
  $.fn.xtOverlay = function(options) {
    var defaults = {
      'name': 'xt-overlay',
      'class': 'active',
      'on': 'click',
      'min': 0,
      'max': 1,
      'anim': '.overlay-inner',
      'backdrop': '.overlay-inner',
    };
    return this.each( function() {
      if (!$.data(this, defaults.name)) {
        $.data(this, defaults.name, new XtOverlay(this, defaults, options));
      }
    });
  };
  
  var XtScroll = function(group, defaults, options) {
    Xt.call(this, group, defaults, options);
  };
  XtScroll.prototype = Object.create(Xt.prototype);
  XtScroll.prototype.constructor = XtScroll;
  $.fn.xtScroll = function(options) {
    var defaults = {
      'name': 'xt-scroll',
      'class': 'active',
      'on': 'scroll',
      'min': 0,
      'max': 1,
    };
    return this.each( function() {
      if (!$.data(this, defaults.name)) {
        $.data(this, defaults.name, new XtScroll(this, defaults, options));
      }
    });
  };
  
  var XtAjax = function(group, defaults, options) {
    Xt.call(this, group, defaults, options);
  };
  XtAjax.prototype = Object.create(Xt.prototype);
  XtAjax.prototype.constructor = XtAjax;
  $.fn.xtAjax = function(options) {
    var defaults = {
      'name': 'xt-ajax',
      'class': 'active',
      'on': 'click',
    };
    return this.each( function() {
      if (!$.data(this, defaults.name)) {
        $.data(this, defaults.name, new XtAjax(this, defaults, options));
      }
    });
  };
  
  //////////////////////
  // init
  //////////////////////
  
  $.fn.xt = {
    'uid': 0
  };
  
  $.fn.xtInitAll = function(deep) {
    return this.each( function() {
      if ($(this).is('[data-xt-toggle]')) {
        $(this).xtToggle();
      }
      if ($(this).is('[data-xt-drop]')) {
        $(this).xtDrop();
      }
      if ($(this).is('[data-xt-overlay]')) {
        $(this).xtOverlay();
      }
      if ($(this).is('[data-xt-scroll]')) {
        $(this).xtScroll();
      }
      if ($(this).is('[data-xt-ajax]')) {
        $(this).xtAjax();
      }
      if (deep) {
        $(this).find('[data-xt-toggle]').xtToggle();
        $(this).find('[data-xt-drop]').xtDrop();
        $(this).find('[data-xt-overlay]').xtOverlay();
        $(this).find('[data-xt-scroll]').xtScroll();
        $(this).find('[data-xt-ajax]').xtAjax();
      }
    });
  };
  
  //////////////////////
  // init methods
  //////////////////////

  Xt.prototype.init = function(defaults, options) {
    var object = this;
    var settings = this.settings = {};
    var group = this.group;
    var $group = $(this.group);
    // override with js settings
    settings = $.extend(settings, defaults, options);
    // override with html settings
    $.extend(settings, $group.data(settings.name));
    // defaults.class
    var arr = settings.class.split(' ');
    if (arr.indexOf(defaults.class) === -1) {
      settings.class += ' ' + defaults.class;
    }
    object.defaultClass = defaults.class;
    // debug
    if ($group.attr('debug') || $group.attr('debug') === '') {
      settings.debug = true;
    }
    // setup
    object.scope();
    object.namespace();
    object.setup();
    object.events();
  };

  Xt.prototype.namespace = function() {
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // namespace
    if (settings.targets && settings.targets.indexOf('#') !== -1) {
      settings.uid = settings.targets;
    } else if($group.attr('id')) {
      settings.uid = $group.attr('id');
    } else {
      settings.uid = 'unique' + $.fn.xt.uid++;
    }
    settings.namespace = settings.name + '_' + settings.uid + '_' + settings.class;
    $group.attr('data-xt-namespace', settings.namespace);
  };
  
  Xt.prototype.scope = function() {
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // $elements
    settings.$elements = null;
    if (settings.elements) {
      if (settings.elements.indexOf('#') !== -1) {
        settings.$elements = $(settings.elements).filter(':parents(.xt-ignore)');
      } else {
        settings.$elements = $group.find(settings.elements).filter(':parents(.xt-ignore)');
      }
    }
    if (!settings.$elements || !settings.$elements.length) {
      settings.$elements = $group;
    }
    // $targets
    settings.$targets = null;
    if (settings.name === 'xt-scroll') {
      // wrapper
      var $outside = $group.parent('.xt-container.xt-position');
      if (!$outside.length) {
        $outside = $group.wrap($('<div class="xt-container xt-position"></div>'));
      }
      // xt-scroll $targets
      settings.$targets = $outside.find('.xt-clone.xt-ignore');
      if (!settings.$targets.length) {
        settings.$targets = $group.clone().addClass('xt-clone xt-ignore').css('visibility', 'hidden');
        $.each(settings.$targets.data(), function(i) {
          settings.$targets.removeAttr('data-' + i);
        });
        settings.$targets.insertAfter($group);
      }
      // stuff
      if (settings.mode === 'absolute') {
        $group.css('position', 'absolute');
      } else if (settings.mode === 'fixed') {
        $group.css('position', 'fixed');
      }
      if ($group.is(':fixed') || $group.is(':absolute')) {
        $group.css('z-index', 70);
        settings.$targets.css('display', 'block');
      } else {
        settings.$targets.css('display', 'none');
      }
    } else if(settings.targets) {
      if (settings.targets.indexOf('#') !== -1) {
        settings.$targets = $(settings.targets).filter(':parents(.xt-ignore)');
      } else {
        var $t = $group.find(settings.targets);
        var $tinner = $t.find(settings.targets);
        settings.$targets = $t.not($tinner).filter(':parents(.xt-ignore)');
      }
    }
  };
  
  Xt.prototype.setup = function() {
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // initial activations
    if (settings.name === 'xt-ajax') {
      var url;
      var found;
      if (history.state && history.state.url) {
        // detect from history
        url = history.state.url;
      } else {
        // detect from url location (absolute url without domain name)
        var loc = window.location.href.split('#')[0];
        url = loc.replace(/https?:\/\/[^\/]+/i, '');
      }
      settings.$elements.each( function() {
        if ($(this).attr('href') === url) {
          found = $(this);
          return false;
        }
      });
      if (found) {
        // set ajaxified
        settings.$targets.attr('data-xt-ajaxified', url);
        object.pushstate(url, document.title);
        // then on
        object.on(found);
        // api
        settings.$targets.trigger('ajax.init.xt', [object]);
      }
    } else {
      // automatic reinit if has class
      if (settings.$elements) {
        settings.$elements.each( function() {
          if ($(this).hasClass(object.defaultClass)) {
            $(this).removeClass(settings.class);
            object.on($(this));
          }
        });
        // automatic init if $currents < min
        var $currents = object.getCurrents();
        var todo = settings.min - $currents.length;
        if (todo) {
          for (var i = 0; i < todo; i++) {
            object.on(settings.$elements.eq(i));
          }
        }
      }
      if (settings.name === 'xt-overlay') {
        settings.$targets.appendTo('body');
      }
    }
  };
  
  Xt.prototype.events = function() {
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // events
    if (settings.name === 'xt-scroll') {
      object.eventsScroll();
    } else {
      object.eventsDefault();
    }
  };
  
  Xt.prototype.eventsDefault = function() {
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // $elements events
    var $eventElement;
    var $eventTarget = settings.$elements.slice(0);
    if (settings.name === 'xt-drop' && settings.off === 'mouseleave') {
      $eventElement = $eventTarget;
      $eventTarget = $group;
    }
    if ($eventTarget) {
      // on off events
      if (settings.on) {
        $eventTarget.off(settings.on + '.xt').on(settings.on + '.xt', function(e) {
          var $t = $eventElement ? $eventElement : $(this);
          object.toggle($t);
          if (settings.name === 'xt-ajax') {
            e.preventDefault();
          }
        });
      }
      if (settings.off) {
        $eventTarget.off(settings.off + '.xt').on(settings.off + '.xt', function(e) {
          var $t = $eventElement ? $eventElement : $(this);
          object.toggle($t);
        });
      }
      // close on link click
      if (settings.name === 'xt-drop') {
        settings.$targets.find('[href], [data-xt-reset]').off('click.xt.href').on('click.xt.href', function(e) {
          object.off($eventTarget);
        });
      }
      // remove html classes
      $eventTarget.off('xtRemoved').on('xtRemoved', function(e) {
        if (settings.name === 'xt-overlay') { // @TODO $group.is('[data-xt-reset]')
          settings.$targets.remove();
          object.off($(this), false, true, true);
        }
      });
      // api
      $eventTarget.off('on.xt').on('on.xt', function(e, obj) {
        if (e.target === this) {
          object.on($(this), true);
        }
      });
      $eventTarget.off('off.xt').on('off.xt', function(e, obj) {
        if (e.target === this) {
          object.off($(this), true);
        }
      });
    }
    // ajax events
    if (settings.name === 'xt-ajax') {
      // popstate
      $(window).off('popstate.xt.' + settings.namespace).on('popstate.xt.' + settings.namespace, function(e) {
        if (history.state && history.state.url) {
          object.ajax(history.state.url, history.state.title);
        }
      });
    }
  };
  
  //////////////////////
  // events methods
  //////////////////////

  Xt.prototype.eventsScroll = function() {
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // resize
    var $outside = settings.$targets.parent('.xt-container.xt-position');
    var resizeNamespace = 'resize.xt.' + settings.namespace;
    $(window).off(resizeNamespace);
    $(window).on(resizeNamespace, function(e) {
      $outside.css('width', $outside.parent().width()); // fix fixed width
    });
    $(window).trigger(resizeNamespace);
    // scroll
    var scrollNamespace = 'scroll.xt.' + settings.namespace;
    $(window).off(scrollNamespace);
    $(window).on(scrollNamespace, function(e) {
      var scrollTop = $(this).scrollTop();
      if (scrollTop !== settings.scrollTopOld) {
        // on or off
        var top = $outside.offset().top;
        var bottom = Infinity;
        if (settings.top !== undefined) {
          if (!isNaN(parseFloat(settings.top))) {
            top = settings.top;
          } else {
            top = $(settings.top).offset().top;
          }
        }
        if (settings.bottom !== undefined) {
          if (!isNaN(parseFloat(settings.bottom))) {
            bottom = settings.bottom;
          } else if ($(settings.bottom).length) {
            bottom = $(settings.bottom).offset().top;
          }
        }
        if (scrollTop >= top && scrollTop < bottom) {
          if (!$group.hasClass(object.defaultClass)) {
            window.xtRequestAnimationFrame( function() {
              object.on($group);
            });
            // direction classes
            $group.removeClass('scroll-off-top scroll-off-bottom');
            if (settings.scrollTopOld > scrollTop) {
              $group.removeClass('scroll-on-top');
              window.xtRequestAnimationFrame( function() {
                $group.addClass('scroll-on-bottom');
              });
            } else {
              $group.removeClass('scroll-on-bottom');
              window.xtRequestAnimationFrame( function() {
                $group.addClass('scroll-on-top');
              });
            }
          }
        } else {
          if ($group.hasClass(object.defaultClass)) {
            window.xtRequestAnimationFrame( function() {
              object.off($group);
            });
            // direction classes
            $group.removeClass('scroll-on-top scroll-on-bottom');
            if (settings.scrollTopOld > scrollTop) {
              $group.removeClass('scroll-off-top');
              window.xtRequestAnimationFrame( function() {
                $group.addClass('scroll-off-bottom');
              });
            } else {
              $group.removeClass('scroll-off-bottom');
              window.xtRequestAnimationFrame( function() {
                $group.addClass('scroll-off-top');
              });
            }
          }
        }
      }
      settings.scrollTopOld = scrollTop;
    });
    $(window).trigger(scrollNamespace);
    // remove window event on remove
    $group.on('xtRemoved', function(e) {
      $(window).off(resizeNamespace);
      $(window).off(scrollNamespace);
    });
  };
  
  //////////////////////
  // toggle methods
  //////////////////////

  Xt.prototype.toggle = function($el, triggered, isSync, skipState) {
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // choose based on state
    if (!$el.hasClass(object.defaultClass)) {
      object.on($el, triggered, isSync, skipState);
    } else {
      object.off($el, triggered, isSync, skipState);
    }
  };
  
  Xt.prototype.on = function($el, triggered, isSync, skipState) {
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // on
    if ($el) {
      // on and add in $currents
      if (!$el.hasClass(object.defaultClass)) {
        var $elements = object.getIndexed(settings.$elements, $el, settings.$elements);
        object.onAfter($elements, triggered);
        var $currents = object.getCurrents();
        $currents = object.setCurrents($currents.pushElement($el));
        // sync
        if (!isSync) {
          window.xtRequestAnimationFrame( function() {
            var $sync = $('[data-xt-namespace="' + settings.namespace + '"]').filter(':parents(.xt-ignore)').not($group);
            $sync.each( function() {
              var xt = $(this).data(settings.name);
              xt.on($(this), true, true);
            });
          });
        }
        // control over ond
        if (settings.name === 'xt-ajax') {
          // ajax
          object.ajax($el.attr('href'));
        } else {
          // [disabled]
          object.checkDisabled($el);
          // off max or differents
          if (!isSync) {
            if ($currents.length > settings.max) {
              var $first = $currents.first();
              object.off($first);
            }
          }
        }
      }
    }
    // on $target
    if (settings.$targets) {
      var $target = object.getIndexed(settings.$elements, $el, settings.$targets);
      if (!$target.hasClass(object.defaultClass)) {
        object.onAfter($target, triggered);
        // overlay html
        if (settings.name === 'xt-overlay') {
          var $additional = $('html');
          if (!$additional.hasClass(object.defaultClass)) {
            $additional.addClass(settings.class);
            // add paddings
            object.onFixed($('html, .xt-backdrop')); // use this for all position fixed $('*:fixed').not($target);
          }
        }
      }
    }
  };
  
  Xt.prototype.off = function($el, triggered, isSync, skipState) {
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // off
    if ($el) {
      var $currents = object.getCurrents();
      if ($el.hasClass(object.defaultClass)) {
        if (isSync || settings.name === 'xt-ajax' || $currents.length > settings.min) {
          var $elements = object.getIndexed(settings.$elements, $el, settings.$elements);
          object.offAfter($elements, triggered);
          if ($el.attr('data-group')) {
            $currents = object.setCurrents($currents.not('[data-group=' + $el.attr('data-group') + ']'));
          } else {
            $currents = object.setCurrents($currents.not($elements));
          }
          // sync
          if (!isSync) {
            window.xtRequestAnimationFrame( function() {
              var $sync = $('[data-xt-namespace="' + settings.namespace + '"]').filter(':parents(.xt-ignore)').not($group);
              $sync.each( function() {
                var xt = $(this).data(settings.name);
                xt.off($(this), true, true);
              });
            });
          }
        }
        // [disabled]
        if (isSync || settings.name === 'xt-ajax') {
          object.checkDisabled($el, 'enable');
        } else {
          object.checkDisabled($el);
        }
      }
    }
    // off $target
    if (settings.$targets) {
      var $target = object.getIndexed(settings.$elements, $el, settings.$targets);
      if ($target.hasClass(object.defaultClass)) {
        object.offAfter($target, triggered);
      }
    }
  };
  
  Xt.prototype.checkDisabled = function($el, force) {
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // manage [disabled] attribute
    var str = 'disabled';
    if (settings.on === 'click') {
      if (!force) {
        // automatic based on max
        var $currents = object.getCurrents();
        var min = settings.min;
        var add;
        if ($currents.length === min) {
          add = true;
          $currents.attr(str, str);
        } else {
          $currents.removeAttr(str);
        }
        // sync data-group
        $currents.filter('[data-group]').each( function() {
          var g = $(this).attr('data-group');
          var $dataGroup = settings.$elements.not(this).filter('[data-group="' + g + '"]');
          if (add) {
            $dataGroup.attr(str, str);
          } else {
            $dataGroup.removeAttr(str);
          }
        });
      } else if (force === 'disable') {
        // force disable
        $el.attr(str, str);
      } else if (force === 'enable') {
        // force enable
        $el.removeAttr(str);
      }
    }
  };
  
  //////////////////////
  // on and off methods
  //////////////////////
  
  Xt.prototype.onAfter = function($elements, triggered) {
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // $anim
    var $el = $elements.slice(0);
    var $anim = $el;
    if (settings.anim) {
      $anim = $el.find(settings.anim);
      $el = $el.pushElement($anim);
    }
    // on
    $el.addClass(settings.class).removeClass('fade-out');
    object.animationDelayClear($el, 'anim');
    // in
    object.animationMultiple($el, triggered, object.onDone, 'fade-in');
    // animations
    object.onBackdrop($el, triggered);
    object.onCollapse($el, triggered);
    object.onMiddle($el, triggered);
    object.onCenter($el, triggered);
    // events
    if (settings.name === 'xt-drop') {
      // close on document click
      $(document).off('click.xt.' + settings.namespace).on('click.xt.' + settings.namespace, function(e) {
        var $target = $(e.target);
        if (!$group.is($target) && !$group.has($target).length) {
          object.off(settings.$elements, true, true, true);
        }
      });
    }
    if (settings.name === 'xt-overlay') {
      // close on .overlay-close
      $el.find('.overlay-close').off('click.xt.' + settings.namespace).on('click.xt.' + settings.namespace, function(e) {
        object.off(settings.$elements, true, false, true);
      });
    }
    // api
    if (!triggered) {
      window.xtRequestAnimationFrame( function() {
        $el.trigger('on', [object]);
      });
    }
  };
  Xt.prototype.onDone = function($el, triggered) {
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // collapse-width and collapse-height
    if ($el.hasClass('collapse-height')) {
      $el.css('height', 'auto');
    }
    if ($el.hasClass('collapse-width')) {
      $el.css('width', 'auto');
    }
    // api
    if (!triggered) {
      window.xtRequestAnimationFrame( function() {
        $el.trigger('fadein.xt', [object]);
      });
    }
  };
  
  Xt.prototype.offAfter = function($elements, triggered) {
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // $anim
    var $el = $elements.slice(0);
    var $anim = $el;
    if (settings.anim) {
      $anim = $el.find(settings.anim);
      $el = $el.pushElement($anim);
    }
    // off
    $el.removeClass(settings.class).removeClass('fade-in').addClass('fade-out');
    object.animationDelayClear($el, 'anim');
    // out
    object.animationMultiple($el, triggered, object.offDone);
    // animations
    object.offBackdrop($el, triggered);
    window.xtRequestAnimationFrame( function() {
      object.offCollapse($el, triggered);
    });
    // close on document click
    if (settings.name === 'xt-drop') {
      $(document).off('click.xt.' + settings.namespace);
    }
    // api
    if (!triggered) {
      window.xtRequestAnimationFrame( function() {
        $el.trigger('off', [object]);
      });
    }
  };
  Xt.prototype.offDone = function($el, triggered) {
    var object = this;
    var settings = this.settings;
    // when animation is done
    $el.removeClass('fade-out');
    // collapse-width and collapse-height
    if ($el.hasClass('collapse-height')) {
      $el.css('height', 0).css('padding-top', 0).css('padding-bottom', 0);
    }
    if ($el.hasClass('collapse-width')) {
      $el.css('width', 0).css('padding-left', 0).css('padding-right', 0);
    }
    // overlay html
    if (settings.name === 'xt-overlay') {
      var $additional = $('html');
      if ($additional.hasClass(object.defaultClass)) {
        $additional.removeClass(settings.class);
        // remove paddings
        object.offFixed($('.xt-fixed')); // use this for all position fixed $('*:fixed').not($target);
      }
    }
    // api
    if (!triggered) {
      window.xtRequestAnimationFrame( function() {
        $el.trigger('fadeout.xt', [object]);
      });
    }
  };
  
  Xt.prototype.animationMultiple = function($el, triggered, callout, add) {
    var object = this;
    // animationMultiple
    var done = 0;
    $el.each( function() {
      var $single = $(this);
      window.xtCancelAnimationFrame($single.data('frame.timeout'));
      var frame = window.xtRequestAnimationFrame( function() {
        if (add) {
          $single.addClass(add);
        }
        object.animationDelay($single, 'anim', function() {
          if (++done < $el.length) {
            return false;
          }
          callout.apply(object, [$el, triggered]);
        });
      });
      $single.data('frame.timeout', frame);
    });
  };
  Xt.prototype.animationDelay = function($el, ns, callout) {
    var object = this;
    var settings = this.settings;
    // time
    var t = settings.timing;
    var transition = $el.css('transitionDuration');
    var animation = $el.css('animationDuration');
    if (settings.timing === undefined && (transition !== undefined || animation !== undefined) && (transition !== '0s' || animation !== '0s')) {
      transition = object.stringToMilliseconds(transition);
      animation = object.stringToMilliseconds(animation);
      t = Math.max(transition, animation);
    }
    // delay for animations
    if (t) {
      var timeout = window.setTimeout( function(object) {
        callout();
      }, t);
      $el.data('fade.timeout.' + ns, timeout);
    } else {
      callout();
    }
  };
  Xt.prototype.animationDelayClear = function($el, ns) {
    clearTimeout($el.data('fade.timeout.' + ns));
    $el.off('transitionend.xt.' + ns);
    clearTimeout($el.data('fade.timeout.' + ns));
    $el.off('transitionend.xt.' + ns);
  };
  
  //////////////////////
  // animations methods
  //////////////////////
  
  Xt.prototype.onBackdrop = function($el, triggered) {
    var object = this;
    var settings = this.settings;
    // animation in
    var $container = $el.find(settings.backdrop);
    var $position = $([]);
    if ($container.length) { // for .backdrop ex: modals
      $position = $container.parent();
    } else if($el.hasClass('backdrop')) {
      $position = $el.parent();
    }
    if ($position.length) {
      var $backdrop = $position.find('> .xt-backdrop');
      if (!$backdrop.length) {
        $backdrop = $('<div class="xt-backdrop xt-ignore"></div>').appendTo($position);
      }
      // animations
      object.animationDelayClear($backdrop, 'backdrop');
      window.xtCancelAnimationFrame($backdrop.data('frame.timeout'));
      var frame = window.xtRequestAnimationFrame( function() {
        $backdrop.addClass('fade-in');
        $backdrop.removeClass('fade-out');
      });
      $backdrop.data('frame.timeout', frame);
      // events
      var ns = 'click.backdrop.xt';
      if (settings.off === 'mouseleave') {
        ns = 'mouseenter.backdrop.xt';
      }
      $backdrop.off(ns).on(ns, function(e) {
        object.off(settings.$elements, true, false, true);
      });
      if ($container.length) { // for .backdrop ex: modals
        $el.off(ns).on(ns, function(e) {
          if ($(e.target).is($container)) {
            object.off(settings.$elements, true, false, true);
          }
        });
      }
    }
  };
  Xt.prototype.offBackdrop = function($el, triggered) {
    var object = this;
    var settings = this.settings;
    // animation out
    var $position = $el.hasClass('backdrop') ? $el.parent() : $el.find(settings.backdrop).parent();
    if ($position.length) {
      var $backdrop = $position.find('> .xt-backdrop');
      if ($backdrop.length) {
        // animations
        $backdrop.removeClass('fade-in');
        object.animationDelayClear($backdrop, 'backdrop');
        window.xtCancelAnimationFrame($backdrop.data('frame.timeout'));
        var frame = window.xtRequestAnimationFrame( function() {
          $backdrop.addClass('fade-out');
          object.animationDelay($backdrop, 'backdrop', function() {
            $backdrop.removeClass('fade-out').remove();
          });
        });
        $backdrop.data('frame.timeout', frame);
        // events
        $backdrop.off('click.backdrop.xt');
        $el.off('click.backdrop.xt');
      }
    }
  };
  
  Xt.prototype.onCollapse = function($el) {
    var object = this;
    // animation in
    $el.each( function() {
      var $single = $(this);
      if ($single.hasClass('collapse-height')) {
        $single.addClass('no-transition').css('height', 'auto').css('padding-top', '').css('padding-bottom', '');
        var h = $single.outerHeight();
        var pt = $single.css('padding-top');
        var pb = $single.css('padding-bottom');
        $single.css('height', 0).css('padding-top', 0).css('padding-bottom', 0);
      }
      if ($single.hasClass('collapse-width')) {
        $single.addClass('no-transition').css('width', 'auto').css('padding-left', '').css('padding-right', '');
        var w = $single.outerWidth();
        var pl = $single.css('padding-left');
        var pr = $single.css('padding-right');
        $single.css('width', 0).css('padding-left', 0).css('padding-right', 0);
      }
      window.xtCancelAnimationFrame($single.data('frame.collapse'));
      var frame = window.xtRequestAnimationFrame( function() {
        if ($single.hasClass('collapse-height')) {
          $single.removeClass('no-transition').css('height', h).css('padding-top', pt).css('padding-bottom', pb);
        }
        if ($single.hasClass('collapse-width')) {
          $single.removeClass('no-transition').css('width', w).css('padding-left', pl).css('padding-right', pr);
        }
        if ($single.hasClass('collapse-top')) {
          $single.css('margin-top', -h);
        }
        if ($single.hasClass('collapse-bottom')) {
          $single.css('margin-bottom', -h);
        }
        if ($single.hasClass('collapse-left')) {
          $single.css('margin-left', -w);
        }
        if ($single.hasClass('collapse-right')) {
          $single.css('margin-right', -w);
        }
      });
      $single.data('frame.collapse', frame);
    });
  };
  Xt.prototype.offCollapse = function($el) {
    // animation out
    $el.each( function() {
      var $single = $(this);
      if ($single.hasClass('collapse-height')) {
        var h = $single.outerHeight();
        var pt = $single.css('padding-top');
        var pb = $single.css('padding-bottom');
        $single.css('height', h).css('padding-top', pt).css('padding-bottom', pb);
      }
      if ($single.hasClass('collapse-width')) {
        var w = $single.outerWidth();
        var pl = $single.css('padding-left');
        var pr = $single.css('padding-right');
        $single.css('width', w).css('padding-left', pl).css('padding-right', pr);
      }
      window.xtCancelAnimationFrame($single.data('frame.collapse'));
      var frame = window.xtRequestAnimationFrame( function() {
        if ($single.hasClass('collapse-height')) {
          $single.css('height', 0).css('padding-top', 0).css('padding-bottom', 0);
        }
        if ($single.hasClass('collapse-width')) {
          $single.css('width', 0).css('padding-left', 0).css('padding-right', 0);
        }
        if ($single.hasClass('collapse-top')) {
          $single.css('margin-top', 0);
        }
        if ($single.hasClass('collapse-bottom')) {
          $single.css('margin-bottom', 0);
        }
        if ($single.hasClass('collapse-left')) {
          $single.css('margin-left', 0);
        }
        if ($single.hasClass('collapse-right')) {
          $single.css('margin-right', 0);
        }
      });
      $single.data('frame.collapse', frame);
    });
  };
  
  Xt.prototype.onMiddle = function($el) {
    // animation out
    $el.each( function() {
      var $single = $(this);
      if ($single.hasClass('middle') && !$single.attr('middle.done')) {
        var $outside = $single.parent();
        var add = $outside.outerHeight() / 2;
        var remove = $single.outerHeight() / 2;
        $single.attr('middle.done', true).css('top', add - remove);
      }
    });
  };
  Xt.prototype.onCenter = function($el) {
    // animation out
    $el.each( function() {
      var $single = $(this);
      if ($single.hasClass('center') && !$single.attr('center.done')) {
        var $outside = $single.parent();
        var add = $outside.outerWidth() / 2;
        var remove = $single.outerWidth() / 2;
        $single.attr('center.done', true).css('left', add - remove);
      }
    });
  };
  
  //////////////////////
  // utils methods
  //////////////////////

  Xt.prototype.getCurrents = function() {
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // get $currents on $group data
    var $currents = $group.data('$currents.' + settings.namespace) || $([]);
    return $currents;
  };
  
  Xt.prototype.setCurrents = function($currents) {
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // set $currents on $group data
    $group.data('$currents.' + settings.namespace, $currents);
    return $currents;
  };
  
  Xt.prototype.getIndexed = function($elements, $el, $g) {
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // $elements and $el
    if ($elements.is($group)) {
      return $g;
    } else if ($el.is('[data-group]')) {
      // with [data-group]
      var g = $el.attr('data-group');
      return $g.filter('[data-group="' + g + '"]');
    } else {
      if (settings.$targets.has($g)) {
        var index = object.getIndex($elements.not('[data-group]'), $el);
        return $g.not('[data-group]').eq(index);
      } else {
        return $el;
      }
    }
  };
  
  Xt.prototype.onFixed = function($el) {
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // add scrollbar padding
    var w = object.scrollbarWidth($el);
    w = $el.css('overflow-y') === 'hidden' ? 0 : w;
    $el.addClass('xt-fixed').css('right', w).css('padding-right', w);
  };
  
  Xt.prototype.offFixed = function($el) {
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // remove scrollbar padding
    $el.removeClass('xt-fixed').css('right', 0).css('padding-right', 0);
  };
  
  Xt.prototype.getIndex = function($elements, $el) {
    var index = 0;
    if ($elements && $el) {
      $elements.each( function(i) {
        if ($(this).is($el.get(0))) {
          index = i;
          return false;
        }
      });
    }
    return index;
  };
  
  Xt.prototype.scrollbarWidth = function($el) {
    var parent, child, width;
    if(width === undefined) {
      parent = $('<div style="width:50px; height:50px; overflow:auto;"><div /></div>').appendTo($el);
      child = parent.children();
      width = child.innerWidth() - child.height(99).innerWidth();
      parent.remove();
    }
    return width;
  };
  
  Xt.prototype.stringToMilliseconds = function(str) {
    var num = parseFloat(str, 10);
    var unit = str.match(/m?s/);
    var ms;
    if (unit) {
      unit = unit[0];
    }
    switch (unit) {
      case "s":
        ms = num * 1000;
        break;
      case "ms":
        ms = num;
        break;
      default:
        ms = 0;
        break;
    }
    return ms;
  };
  
  //////////////////////
  // ajax methods
  //////////////////////
  
  Xt.prototype.ajax = function(url, title) {
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // do ajax only one time
    if (settings.$targets.attr('data-xt-ajaxified') !== url) {
      // ajax
      $.ajax({
        type: 'GET',
        url: url,
        success: function(data, textStatus, jqXHR) {
          var $data = $('<div />').html(data);
          // api
          settings.$targets.trigger('ajax.success.xt', [object, $data]);
          // populate
          var $html = $data.find(settings.targets).contents();
          title = !title ? $data.find('title').text() : title;
          settings.$targets.html($html);
          settings.$targets.attr('data-xt-ajaxified', url);
          // reinit $elements and events
          object.scope();
          object.events();
          // pushstate
          object.pushstate(url, title);
          // api
          settings.$targets.trigger('ajax.populated.xt', [object, $data]);
          settings.$targets.xtInitAll(true); // init xt
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.error('ajax error url:' + url + ' ' + errorThrown);
        }
      });
    }
  };
  
  Xt.prototype.pushstate = function(url, title) {
    var object = this;
    var settings = this.settings;
    var group = this.group;
    var $group = $(this.group);
    // also when on popstate
    document.title = title;
    // trigger on registered
    settings.$elements.filter('[href="' + url + '"]').each( function() {
      object.on($(this), true, false, true);
    });
    // push object state
    if (!history.state || !history.state.url || history.state.url !== url) {
      history.pushState({'url': url, 'title': title}, title, url);
    }
  };
  
  //////////////////////
  // utils
  //////////////////////
  
  // https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
  window.xtRequestAnimationFrame = ( function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  })();
  window.xtCancelAnimationFrame = ( function(id) {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(callback) {
      window.clearTimeout(id);
    };
  })();

  // http://stackoverflow.com/questions/13281897/how-to-preserve-order-of-items-added-to-jquery-matched-set
  // push jquery group inside jquery query, use $([]) for empty query
  // usage: $groups.pushElement($group)
  $.fn.pushElement = function($el) {
    Array.prototype.push.apply(this, $el);
    return this;
  };
  
  // http://stackoverflow.com/questions/2200494/jquery-trigger-event-when-an-group-is-removed-from-the-dom
  // xtRemoved event fired when an group is removed from DOM
  $.event.special.xtRemoved = {
    remove: function(o) {
      if (o.handler) { o.handler(); }
    }
  };
  
  // http://stackoverflow.com/questions/965816/what-jquery-selector-excludes-items-with-a-parent-that-matches-a-given-selector
  // filter out $groups with :parents(.classname)
  // usage: $groups.filter(':parents(.xt-ignore)')
  $.expr[':'].parents = function(a, i, m){
    return $(a).parents(m[3]).length < 1;
  };
  
  // select all elements with position: fixed;
  // usage: $('*:fixed')
  $.expr[':'].fixed = function(a, i, m){
    return $(a).css('position') === 'fixed';
  };
  
  // select all elements with position: absolute;
  // usage: $('*:absolute')
  $.expr[':'].absolute = function(a, i, m){
    return $(a).css('position') === 'absolute';
  };
  
})(jQuery, window, document);