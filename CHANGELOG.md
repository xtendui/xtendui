# [1.0.0-beta.44](https://github.com/xtendui/xtendui/compare/v1.0.0-beta.43...v1.0.0-beta.44) (2021-10-04)


### Bug Fixes

* **css:** xt-body added overflow-x-hidden to prevent horizontal scrolling ([63f8f34](https://github.com/xtendui/xtendui/commit/63f8f3486bd2238bfd1ac6d32a35ecb12a95c86d))


### Features

* **javascript:** added Xt.scrolltriggerRerfreshFix for fix resize scrolltrigger on mobile ([0d98882](https://github.com/xtendui/xtendui/commit/0d9888280f0da086af233697555b3bf4b7ae83a5))

# [1.0.0-beta.43](https://github.com/xtendui/xtendui/compare/v1.0.0-beta.42...v1.0.0-beta.43) (2021-10-02)


### Reverts

* Revert "docs: svgo" ([75a31e8](https://github.com/xtendui/xtendui/commit/75a31e822812cb8e42952822aac6088f98f6b8ac))

# [1.0.0-beta.42](https://github.com/xtendui/xtendui/compare/v1.0.0-beta.41...v1.0.0-beta.42) (2021-10-01)


### Bug Fixes

* fix drop and tooltip popperjs console error ([613274c](https://github.com/xtendui/xtendui/commit/613274c2a7f851c6250cf38cd1b83f89f7c6acc3))
* **javascript:** fix unmount not unmounting mounted object with the same ref and matches ([60574e0](https://github.com/xtendui/xtendui/commit/60574e08c6b2a0711bcf97e46f1541fc58a025ce))
* **scrollto:** fix error not valid querySelector on scroll with not valid hash ([05992b1](https://github.com/xtendui/xtendui/commit/05992b11446ee4f7e482d8db9430fbc1459745de))
* **toggle:** fix options.groupSame not triggering hash change, now same element deactivation/activation skip is only with options.groupSame and skips only on class and events activations ([642e6fc](https://github.com/xtendui/xtendui/commit/642e6fc47947c4340c4c585563000caaa731784f))


### Code Refactoring

* **groupnumber:** changed default min options and added limit and validation options ([51b3694](https://github.com/xtendui/xtendui/commit/51b3694152573bfb572a6f11c44cff550a14c25f))
* **javascript:** refactor Xt.mount logic to fix unmount not working properly and refactor sticky pinned elements and refactor react demos with useLayoutEffect to wait for document ready and now disable doesn't deactivate ([e30c988](https://github.com/xtendui/xtendui/commit/e30c988b1d6bb6e8e8909c9b0c457b1587c4d4a8))
* **javascript:** refactor Xt.ready now by default without requestAnimationFrame and Xt.mount refactor to aignore nodes not removed from DOM without using xt-ignore ([34760b9](https://github.com/xtendui/xtendui/commit/34760b9a896f0cf763025feb3f02d88af456adbe))
* **javascript:** Xt.options note because Xt.ready has no raf ([d1c83e1](https://github.com/xtendui/xtendui/commit/d1c83e1f0be79d4593d79ace8947368174ab96ee))
* **toggle:** little fix Xt.off classes and removed options.groupSameAnimate no more needed because depends on tailwind classes ([59bf255](https://github.com/xtendui/xtendui/commit/59bf2551a79b95d630fb3c82b4813b1d7ee95b70))


### Features

* **css:** added desktop first media queries -sm -md -lg -xl -2xl ([65152f1](https://github.com/xtendui/xtendui/commit/65152f1cc756c8dedf0b68d6739bd33388f954b3))
* **groupnumber:** added input step attribute on groupnumber and supported multiple inputs and different steps ([18032a2](https://github.com/xtendui/xtendui/commit/18032a2a23400ad3ff000ca92bf4fd7c23d19f78))
* **toggle:** added options.groupSameAnimate and docs gallery v1 ([039f7ee](https://github.com/xtendui/xtendui/commit/039f7eec8d766f6dc0ec97cd47bdac8ae9f00d3e))


### BREAKING CHANGES

* **javascript:** now because Xt.ready and Xt.mount has no requestAnimationFrame, to apply custom Xt.options they need to be imported before other components import or data-xt- initializations don't have those options
* **toggle:** reverted the add of options.groupSameAnimate on this same release
* **javascript:** now Xt.ready and Xt.mount are instant, be sure to reference functions and variables already initialized in javascript
Instead of Xt.mountIgnore and Xt.unmountIgnore use Xt.mount argument ignoreMount and ignoreUnmount
Removed previous commit of Xt.registerPlugin no longer needed
* **javascript:** removed "options.disableDeactivate" because now the destroy and disable methods resets internally "appendTo" and "classBody", now components DONT disable on deactivation

removed "Xt.mount" ignore argument and added "Xt.mountIgnore" and "Xt.unmountIgnore"

IMPORTANT now you need to register ScrolltoPlugin with "Xt.registerPlugin({ name: 'ScrollTrigger', plugin: ScrollTrigger })" to fix infinite Xt.mount loop on pinned nodes
* **groupnumber:** now options.min is -Infinity before was 1

# [1.0.0-beta.41](https://github.com/xtendui/xtendui/compare/v1.0.0-beta.40...v1.0.0-beta.41) (2021-09-01)


### Bug Fixes

* **googlelocator:** fix search radius on reset and initial ([0e3a629](https://github.com/xtendui/xtendui/commit/0e3a6298f829cf92a7837de8ebb03466ea0cf273))


### Features

* **googlelocator:** added options.autocompleteOptions and options.autocompleteServiceOptions ([0c23924](https://github.com/xtendui/xtendui/commit/0c23924b6779ce0881c0ea953874d7ebdc522ec9))

# [1.0.0-beta.40](https://github.com/xtendui/xtendui/compare/v1.0.0-beta.39...v1.0.0-beta.40) (2021-09-01)


### Bug Fixes

* **javascript:** fix Xt.queryAll array instead of NodeList, fixes some errors on toggle components ([1e7c253](https://github.com/xtendui/xtendui/commit/1e7c253cdd68b58cd5c490efa64d974e763442d4))

# [1.0.0-beta.39](https://github.com/xtendui/xtendui/compare/v1.0.0-beta.38...v1.0.0-beta.39) (2021-08-26)


### Bug Fixes

* **css:** added touch action to xt-button and xt-slides ([f39b482](https://github.com/xtendui/xtendui/commit/f39b482ce115c74a643bb087876e27c75050e629))
* **css:** removed touch action to xt-slides ([a310682](https://github.com/xtendui/xtendui/commit/a31068234b8a2fae2f0b1e8e99dbb9065a44711e))
* **javascript:** fix loop mousefollow and Xt.friction ([a863dec](https://github.com/xtendui/xtendui/commit/a863decd0475961dc75d6eaa336de458d5ee99c9))
* **javascript:** Xt.mount no raf on mountcheck for instant mount especially with automatic activations ([124a7a9](https://github.com/xtendui/xtendui/commit/124a7a98d5bc08ba13e0a99caf6ee50b246b1928))
* **javascript:** Xt.on and Xt.off fix namespace ([020cf3b](https://github.com/xtendui/xtendui/commit/020cf3b54058ef0b4433987a2849d0bad5e3aba8))
* **scrollto:** scrollto ignore empty hash links ([5fc4350](https://github.com/xtendui/xtendui/commit/5fc4350b9aaf8a4502f6f2b82ba5d854637e4ee8))
* **slider:** fix initial dragger position no transition ([5dc7e42](https://github.com/xtendui/xtendui/commit/5dc7e42000c7467f8bcd49eac52660917c1efb34))
* **slider:** fix initial wrap position when a slide is already activated + demos fix iframe js execution ([419c9f8](https://github.com/xtendui/xtendui/commit/419c9f81db12223fe9fe675933f8beda40853f18))
* **slider:** fix wrap positions automatic scrolling ([1838058](https://github.com/xtendui/xtendui/commit/1838058fcbc9f9bd30d43c05cb14735e3dadf9b1))
* **slider:** refactor slider wrap that fixes multiple issues and refactor slider draglock ([63a9a23](https://github.com/xtendui/xtendui/commit/63a9a232538beb9a784f570b016e6403363e3e0e))
* **slider:** revert fix slider initial dragger transition frame ([70f1945](https://github.com/xtendui/xtendui/commit/70f19450db42cbcc978695e2e641bd3629265f4b))
* fix autostart on initial ([2ea90cd](https://github.com/xtendui/xtendui/commit/2ea90cd58ba4bccd376cfdab95625b54e82aac97))
* fix tooltip and drop popperjs custom modifiers ([3180e36](https://github.com/xtendui/xtendui/commit/3180e364b288e1622e119b7c6a8cf1e32f57c5d8))
* **toggle:** fix medialoaded when using [data-xt-slider-content] ([09c8ae4](https://github.com/xtendui/xtendui/commit/09c8ae4ce4bc09821202fb41757de3e11a326cf9))


### Code Refactoring

* **css:** removed shadow-overlay shadow-drop shadow-tooltip ([aa1353f](https://github.com/xtendui/xtendui/commit/aa1353fd43ca86d09ce62439067a6127202f74c7))
* **docs:** refactor docs structure ([bec5dc2](https://github.com/xtendui/xtendui/commit/bec5dc25a65f9ae6ceaa32419b3feeba9cb0dd43))
* **googlelocator:** refactor locateRadius to searchRadius and used as minimum search radius ([6427db3](https://github.com/xtendui/xtendui/commit/6427db399b20c27d9e0062a19b02ade655dbd136))
* **list:** removed xt-list-inner on another commit ([2083cb2](https://github.com/xtendui/xtendui/commit/2083cb23bc3c424061c0b17eb30026003a2a9210))
* **scrollto:** added defaults options.space and options.duration and simplified demos ([7f933ce](https://github.com/xtendui/xtendui/commit/7f933ce78f7f0a33203efd5cbcde3c033dcf58da))
* refactor raf code and mutation observer without Xt.ready and added Xt.ready argument frame optional and Xt.eventDelay arguments ([456b70b](https://github.com/xtendui/xtendui/commit/456b70b74fefb94a293f29c9f98ffe32c255fa6e))
* separator is typography addon now ([c8aa175](https://github.com/xtendui/xtendui/commit/c8aa175a766d9b13496aaa9baa3cb2bdd3e997e0))


### Documentation

* refactor docs ([60b7673](https://github.com/xtendui/xtendui/commit/60b767359e6f97d3d4502d366db6390ff726a519))


### Features

* **javascript:** usability added Xt.usabilityHostnames enabled only on localhost ([1e822fc](https://github.com/xtendui/xtendui/commit/1e822fc4e2b6b8f259680eae30add75b26cc6a77))
* **javascript:** Xt.on and Xt.off initial argument for instant animations ([425982a](https://github.com/xtendui/xtendui/commit/425982a917bbe0d04dc82db1b89add795302cb85))
* **mousefollow:** added options.classSkip ([1424f9e](https://github.com/xtendui/xtendui/commit/1424f9e3f12cb903f1f828fcd840f14ae6e56a65))
* **slider:** slider mode relative with css transition ([853de5f](https://github.com/xtendui/xtendui/commit/853de5fdb47f00251ec4c1f6df5affb62db6f68c))
* **toggle:** toggle added scrolltoInit: false ([06794ec](https://github.com/xtendui/xtendui/commit/06794ec9832220f821f56c25a1de56547fe03603))
* drop and tooltip inset positions ([fa9b2a3](https://github.com/xtendui/xtendui/commit/fa9b2a3d5c949dbd077e89a9f49bfbdd6f2b7e03))
* self.autoblock to block auto ([26b46df](https://github.com/xtendui/xtendui/commit/26b46dfa4de775c6b855340d3268ed7c80fb9cbb))
* **slider:** wrap can have value from 0 to 1 to check if activate depending on dragger width and added options.groupSame to disable groupSame calculations ([b034453](https://github.com/xtendui/xtendui/commit/b034453278e4991a493643fdd215907731ae9f78))
* Xt.script now has defer and async ([b298b2b](https://github.com/xtendui/xtendui/commit/b298b2b9809bb86443e66a57a1b32a61ef8469af))


### refactors

* docs toolbar and removed flex-full use flex-auto instead ([9e6ec15](https://github.com/xtendui/xtendui/commit/9e6ec154148a8bfdc8773cf0f53acf23b181f96e))


### BREAKING CHANGES

* **googlelocator:** changed options.locateRadius to options.searchRadius
* **list:** instead of 'xt-list-inner' use 'inline-flex flex-auto'
* **scrollto:** scrollto duration and space are different now, if you didn't override it they will change
* **toggle:** toggle options.scrollto doesn't automatically scroll on initialization now, use options.scrolltoInit: true to have that
* **css:** use shadow-xl instead of shadow-overlay, use shadow-lg instead of shadow-drop, use shadow-md instead of shadow-tooltip
* use flex-auto instead of flex-full
* instead of 'xt-separator' use 'inline relative align-baseline'
* **docs:** layout.css.js and javascript.css.js becomes global.css.js, if you extended xtendui.layout or xtendui.javascript move them to xtendui.global
* Xt.eventDelay arguments { event, element } changed to { e, el }
* **slider:** sliders relative mode set new option options.dragposition: true or use transition classes on dragger and remove js listen to event dragposition.xt.slider
* changed cssinjs path theme.extend.xtendui.scroll to theme.extend.xtendui.scrolltrigger

# [1.0.0-beta.38](https://github.com/xtendui/xtendui/compare/v1.0.0-beta.37...v1.0.0-beta.38) (2021-08-02)


### Bug Fixes

* **js:** fix Xt.ready on interactive instead of on complete ([64c46b7](https://github.com/xtendui/xtendui/commit/64c46b7cbdb44bd3ae225181865643122b9e4928))
* **js:** fix Xt.ready on interactive instead of on complete ([6977b6e](https://github.com/xtendui/xtendui/commit/6977b6ecd20f827e9f196d4e382fca51063d0f47))
* **toggle:** fix instat scrollto when initial and fixed iinitial activation with no animation duration and delay duration on initial ([0c60a73](https://github.com/xtendui/xtendui/commit/0c60a73c8b2c7e54f016741b04e9a0516235b69a))
* **toggle:** refactor intersection observer ([1036818](https://github.com/xtendui/xtendui/commit/1036818c31b0a8025b707f61d3ebd19ccfbdeeda))
* Xt.mount pass ignore to unmount also ([f5af94d](https://github.com/xtendui/xtendui/commit/f5af94dd0a4a022b4ab97ae3513c7d3fb62f9a4c))


### Code Refactoring

* Xt.addScript to Xt.script ([205a2d5](https://github.com/xtendui/xtendui/commit/205a2d5df6aec60dc98e4ce04434f656d7b311c1))
* **js:** refactor Xt.ready with object arguments ([f45b963](https://github.com/xtendui/xtendui/commit/f45b9633e01c5e88eac35e41b4acc1bc4c7a13a5))
* added Xt.mount argument container:Node and fixed Xt unmount not working and fixed unmount errors ([3d19c97](https://github.com/xtendui/xtendui/commit/3d19c9707329b681e76c7425d6633a05d6db873a))
* refactor Xt.mount check granularly on mount instead of document ready, removed Xt.init, fixed Xt.mount root, refactor scrollto init after raf ([8ecf908](https://github.com/xtendui/xtendui/commit/8ecf908705eebe3b100afe27286de9c3b1bee21c))


### BREAKING CHANGES

* instead of Xt.addScript use Xt.script
* **js:** Xt.ready now has object arguments pass { func: yourfunction } as argument
* removed Xt.init not needed anymore
* if you used Xt.init() remove it

# [1.0.0-beta.37](https://github.com/xtendui/xtendui/compare/v1.0.0-beta.36...v1.0.0-beta.37) (2021-07-26)


### Bug Fixes

* **js:** fix off.trigger not having force true ([26c400a](https://github.com/xtendui/xtendui/commit/26c400ae4e33c1ba5a1d111f55070af7a600b991))
* **overlay:** closeInside close also when clicking space ([9a83ce0](https://github.com/xtendui/xtendui/commit/9a83ce0b266f14444319582e42db14b95031ff44))


### Code Refactoring

* **form:** removed cssinjs validation styles and added new variants for valid and invalid ([6ee7b78](https://github.com/xtendui/xtendui/commit/6ee7b78f719c11a4437e9c8094bea582aca4cbf6))
* **form:** removed xt-label-required default styles ([98f3868](https://github.com/xtendui/xtendui/commit/98f38688a2e8909a6f3ffba313cd3d26a34a5160))
* **media:** removed xt-ratio classes in favor of padding bottom jit ([027d5ab](https://github.com/xtendui/xtendui/commit/027d5ab56eb263713253d026db46dc385aaf251a))
* **overlay:** removed pointer-events-none from xt-backdrop and fixes closeInside interaction clicking on scrollbar no longer closes overlay ([3fbb285](https://github.com/xtendui/xtendui/commit/3fbb285d4289e2d1063fa4a450a9950cbd7e7667))


### BREAKING CHANGES

* **form:** style xt-label-required with asterisk
* **form:** style valid and invalid with css .valid-submit and .invalid-submit or variants valid-submit: invalid-submit:
Also removed default colors error and success from xtendui
* **media:** instead of xt-ratio-<number> classes use jit pb-[<number>%]
* **overlay:** remove pointer-events-none from xt-backdrop

# [1.0.0-beta.36](https://github.com/xtendui/xtendui/compare/v1.0.0-beta.35...v1.0.0-beta.36) (2021-07-15)


### Bug Fixes

* **xt:** fix xt contains ([d2ae4d3](https://github.com/xtendui/xtendui/commit/d2ae4d341f7cfc4b62111b2342ec759a07f42716))
* **xt:** fix Xt.contains and allow import of js outside body ([03a7af6](https://github.com/xtendui/xtendui/commit/03a7af6a741b80c7fa93ea934954e3ad12a30c07))


### Code Refactoring

* **js:** Xt.node and Xt.nodes with object destructuring ([78900fb](https://github.com/xtendui/xtendui/commit/78900fbc5ea1e5f1c658a07e827d496a0e025f5c))


### BREAKING CHANGES

* **js:** use Xt.node({ str }) and Xt.nodes({ str })

# [1.0.0-beta.35](https://github.com/xtendui/xtendui/compare/v1.0.0-beta.34...v1.0.0-beta.35) (2021-07-14)


### Bug Fixes

* **js:** fix options.zIndex reset when activation stops ([a1e75a1](https://github.com/xtendui/xtendui/commit/a1e75a18d6cdbd62b8d35f0b8249b13c680a89c1))
* **slider:** fix absolute mode slider when changing more than 1 slide at time ([fd6fdbf](https://github.com/xtendui/xtendui/commit/fd6fdbf8fe9078aeb582c95bddb1184d973b2ae8))
* **slider:** fix absolute mode slider when changing more than 1 slide at time ([6a10604](https://github.com/xtendui/xtendui/commit/6a10604db1ea3f0c03da807d20966e214a095ae9))
* **toggle:** toggle initial and restart remove classes from also groups ([b4fcd9e](https://github.com/xtendui/xtendui/commit/b4fcd9e8c390325db7d8517a30f6a3c21f226a4b))


### Code Refactoring

* **js:** getElements and getTargets arguments with object destructuring ([9029f89](https://github.com/xtendui/xtendui/commit/9029f89b6b492b82efadfa1ec3485fdbeb6ae92c))
* **js:** self.currentIndex to self.index ([de6388d](https://github.com/xtendui/xtendui/commit/de6388d1ffad12c3fe6369b89061fc0e931cc14b))
* **js:** Xt methods with object destructuring ([a685dca](https://github.com/xtendui/xtendui/commit/a685dca4e2abd902ccf2b0fd7c2836987ebddcc2))
* **js:** Xt.createElement to Xt.node and added Xt.nodes ([e303db0](https://github.com/xtendui/xtendui/commit/e303db05a294df9386ead4fb09aa4ba522f445c3))
* **slider:** refactor self.detail to self.drag and names revision ([1f0bda4](https://github.com/xtendui/xtendui/commit/1f0bda4209238e6f19e5c24b24dd466787ff18bb))
* **slider:** xt-slide-absolute with off:hidden ([d855024](https://github.com/xtendui/xtendui/commit/d855024d77df0ffd0f72dd44cc22ee5d96e8ddd1))


### Features

* **js:** interactive elements scrollto can be also by type now ([d1180de](https://github.com/xtendui/xtendui/commit/d1180deaffa03a4b19fe44d721b1d9b5dfac9e9e))
* interaction components with options.scrollto ([1d09533](https://github.com/xtendui/xtendui/commit/1d095331a2b08d0a356bb0f0d6ec440b0f62f852))
* **slider:** options.hideDisable ([c5a4312](https://github.com/xtendui/xtendui/commit/c5a4312ded84ba23a5f11fef72c4bec9a74750b8))
* **slider:** slider.nooverflow with js options instead of css ([8cbfc0b](https://github.com/xtendui/xtendui/commit/8cbfc0b04983e578a15f6d8d511d7acefadd1c14))
* options.visibleReinit ([3a7622d](https://github.com/xtendui/xtendui/commit/3a7622def484181ab8301dc10eac07855e73606f))


### BREAKING CHANGES

* **js:** Xt.createElement to Xt.node
* **slider:** `dragPosition: self.detail.dragFinal` to `position: self.drag.final`
detail.draggerWidth to drag.size
detail.dragPosition to drag.position
detail.dragFinal to drag.final
detail.dragRatio to drag.ratio
detail.dragRatioInverse to drag.ratioInverse
detail.instant to drag.instant
all sliders detail. to drag. and no drag.drag
* **slider:** use off:hidden with xt-slide-absolute
* **js:** use self.index instead of self.currentIndex
* **slider:** remove .xt-slider-nooverflow and use options.nooverflow to assign classes to drag.dragger
* **js:** use object on arguments in Xt.get({ name, el })
* **js:** use `self.getElements({ el = null, same = false })` and  `self.getTargets({ el = null, same = false })`

# [1.0.0-beta.34](https://github.com/minimit/xtendui/compare/v1.0.0-beta.33...v1.0.0-beta.34) (2021-07-08)


### Bug Fixes

* eventmatch no need to off now with disabled that does off ([450f3ca](https://github.com/minimit/xtendui/commit/450f3ca693a46f1af934ebc5524254c0a40ab870))
* **js:** Xt.ready no raf always and Xt.mount always raf ([c7a6e48](https://github.com/minimit/xtendui/commit/c7a6e48dda79a47ca52beb0fd1774d2995387da4))
* **toggle:** disableDeactivate now doesn't add out classes on deactivation ([53cb0b5](https://github.com/minimit/xtendui/commit/53cb0b5a1d93407296852d76b597b10195ebe086))
* xt-container-reset with styles ([9dd04e4](https://github.com/minimit/xtendui/commit/9dd04e4ebaffa445be146f740fa3904dc731ba8c))
* **toggle:** fix focustrap error ([e5e9379](https://github.com/minimit/xtendui/commit/e5e937969d6af7c5123b0458fe1f489c74dfbf3c))
* **toggle:** fix focusTrap with multiple targets ([dbe6390](https://github.com/minimit/xtendui/commit/dbe639079b7020dd8a359fe473046260b772f2dc))
* **toggle:** fix focusTrap with multiple targets ([99d81c5](https://github.com/minimit/xtendui/commit/99d81c56698ffeac52c873cbc4a92b038b156a48))
* **toggle:** fix init.xt. class on activation ([ff461b6](https://github.com/minimit/xtendui/commit/ff461b6eecf01ea7114fc1e4043e45cab17aea55))
* fix disabled no activation also on initial ([954ece5](https://github.com/minimit/xtendui/commit/954ece53a27fe91d90ada5e6f820f0cf80a7d359))
* **toggle:** fix matches destroy ([49d115a](https://github.com/minimit/xtendui/commit/49d115a20c57b15f851ecddaf58163fa8cf6ccaa))
* **toggle:** fix matches destroy ([31c30cc](https://github.com/minimit/xtendui/commit/31c30cc3ffcaa034c92a2a576a4f46a5bc7f259d))
* **toggle:** on disable remove classBody ([a9eff26](https://github.com/minimit/xtendui/commit/a9eff268a2a61061abd981b737295c679c3f18b1))
* **xt:** fix Xt.ready not working properly on ready state change ([bb9fac1](https://github.com/minimit/xtendui/commit/bb9fac1b0d47c128c8da068957ab4f289ccb4793))
* **xt:** refactor Xt.ready ([b02e541](https://github.com/minimit/xtendui/commit/b02e5412ef0d8741a173cf03c6b877615cb92131))
* focusTrap default no initial focus ([b134a19](https://github.com/minimit/xtendui/commit/b134a19fa5d432c99a78786fd767b7e88443a299))


### Code Refactoring

* **js:** refactor one raf on activations and refactor Xt utils with object destructuring ([a54039b](https://github.com/minimit/xtendui/commit/a54039b8c41d5b5831953f76361d2c33769e39af))
* **js:** self.object to self.container ([b46c429](https://github.com/minimit/xtendui/commit/b46c42996890f90c958c4092d4af99dd80bc249e))
* refactor demos elements and targets ([f84ede4](https://github.com/minimit/xtendui/commit/f84ede441850e0c5e782f77df2217115d98db8f1))
* refactor init and disabled data- attribute instead of classes and added option disableDeactivate ([cfbf0d4](https://github.com/minimit/xtendui/commit/cfbf0d49c5ea9c3aba1306a89809469387526d4d))
* refactor interaction display with tailwind classes ([38a2f50](https://github.com/minimit/xtendui/commit/38a2f505afa72361104349e77426c1b718e60681))
* self.detail.instant to self.detail.isDrag and absolute demos ([91bb380](https://github.com/minimit/xtendui/commit/91bb380de15b808d8ad062b129751b709847c6bf))
* xt-drop and xt-overlay and xt-toggle and xt-slide-absolute now have cssinjs activation classes ([cae1373](https://github.com/minimit/xtendui/commit/cae13730fe616d1a9080215d3bb6befceb15d569))
* **slider:** refactor slider selectors with data-xt- ([554f5f7](https://github.com/minimit/xtendui/commit/554f5f74cd43b007e253739d609536312eaa9748))
* **toggle:** classHtml to classBody ([88894fc](https://github.com/minimit/xtendui/commit/88894fc92e468c70e1427c2705bc53aef526bc24))


### Features

* added getIndex method and refactor slider animations ([7990cfc](https://github.com/minimit/xtendui/commit/7990cfca25288ef7b90a8825c46d43460e105a42))
* options.debug on all components to debug single components ([07f2554](https://github.com/minimit/xtendui/commit/07f2554d3b5e84f97037a1718f6d1da9b69eb533))
* **toggle:** added delay and duration raf and revision added raf after animation to match activation raf ([8deaa76](https://github.com/minimit/xtendui/commit/8deaa76564c0b1a4417d60d63447ca81e2d2c7d4))
* WIP demo toggle inverse and added done tailwind variant ([2737d22](https://github.com/minimit/xtendui/commit/2737d2229942c63ef18547cdad9d20e7acbb3565))
* **toggle:** focustrap options and fix overlay when close is outside targets ([9921210](https://github.com/minimit/xtendui/commit/99212105bbd02a2e5e3345846a3366385885dbf5))


### BREAKING CHANGES

* **js:** use self.container instead of self.object
* **js:** Xt.on and Xt.off use object destructuring on arguments { el, ns = '', duration = null }
Xt.eventDelay renamed argument `prefix` to `ns` and instead of `instant:Bool` use `duration:Number`
* use xt-slide-absolute on slider absolute
reverted partialli a previous breaking change: no more need of off: variants activation classes on xt-slide xt-drop xt-overlay and xt-tooltip
* instead of `xt-toggle` use `off:hidden
out:pointer-events-none`
add `off:hidden out:pointer-events-none` to `xt-drop` and `xt-overlay`
and `xt-tooltip`
instead of `xt-toggle-absolute` use `absolute top-0 left-0 on:relative`
instead of `xt-toggle-visible` use `off:visibility-hidden
off:pointer-events-none out:pointer-events-none`
instead of `xt-slider-absolute` use in the slides `off:hidden
out:pointer-events-none absolute top-0 left-0 on:relative`
* instead of .xt-<component>-init and .xt-<compontent>-disabled now use the attribute [data-xt-<component>-init] and [data-xt-<component>-disabled]
* **slider:** add to all the sliders the required data-xt-slider- selectors
* mousefollow target selector changed to data- attribute
* self.detail.instant to self.detail.isDrag
* **toggle:** now use options.classBody instead of options.classHtml and the class gets added to body instead of html element

# [1.0.0-beta.33](https://github.com/minimit/xtendui/compare/v1.0.0-beta.32...v1.0.0-beta.33) (2021-06-24)


### Bug Fixes

* **css:** added body overflow-y-scroll by default with xt-body ([fdc874f](https://github.com/minimit/xtendui/commit/fdc874ff3bdf180b4904bfbea48f52e9f8a29264))
* **toggle:** fix focusTrap with multiple targets ([ff230a7](https://github.com/minimit/xtendui/commit/ff230a7204eac893ac5970a9a8307645f69f708e))

# [1.0.0-beta.32](https://github.com/minimit/xtendui/compare/v1.0.0-beta.31...v1.0.0-beta.32) (2021-06-24)


### Bug Fixes

* **js:** fix Xt.on and Xt.off when no duration instant now ([65c72a6](https://github.com/minimit/xtendui/commit/65c72a65a2fbd570ba8be19e865e710315f43fdb))
* **toggle:** fix focustrap with namespace on unique mode + fix focustrap nested ([2e5b9b9](https://github.com/minimit/xtendui/commit/2e5b9b9787059c6a4bbd378b4d5ab00b94a65bfa))

# [1.0.0-beta.31](https://github.com/minimit/xtendui/compare/v1.0.0-beta.30...v1.0.0-beta.31) (2021-06-23)


### Bug Fixes

* **scroll:** automatic fix Xt mount and unmount on ScrollTrigger pin with raf, no need to add .xt-ignore ([a67a2de](https://github.com/minimit/xtendui/commit/a67a2de2696031907fdcdf84bb274088e66012dd))

# [1.0.0-beta.30](https://github.com/minimit/xtendui/compare/v1.0.0-beta.29...v1.0.0-beta.30) (2021-06-22)


### Bug Fixes

* **slider:** fix no xt-content span and fix autoheight no inner child ([309e986](https://github.com/minimit/xtendui/commit/309e9866c61128a2d6460cd89002e840a3e4c910))
* **sticky:** fix sticky Xt.mount ignore ([41b7975](https://github.com/minimit/xtendui/commit/41b7975b1408e9fa0d6805897e6215325548e6ae))


### Code Refactoring

* refactor defaults exclude now it's false ([8ca2a75](https://github.com/minimit/xtendui/commit/8ca2a75a1fa2842537466687a6160afa06d1762f))


### BREAKING CHANGES

* if you need to exclude .hidden add the option because now exclude default is false
* **sticky:** add another requestAnimationFrame to ScrollTrigger refresh see code

# [1.0.0-beta.29](https://github.com/minimit/xtendui/compare/v1.0.0-beta.28...v1.0.0-beta.29) (2021-06-15)


### Bug Fixes

* **toggle:** prevent page scroll on hash off ([0dc76d6](https://github.com/minimit/xtendui/commit/0dc76d6755f6de4e709e154098f4e495d3de57f0))

# [1.0.0-beta.28](https://github.com/minimit/xtendui/compare/v1.0.0-beta.27...v1.0.0-beta.28) (2021-06-14)


### Features

* exclude hidden class by default on element and targets ([6c636df](https://github.com/minimit/xtendui/commit/6c636dfcdaab913316da0e8b445b6c2640cd8427))

# [1.0.0-beta.27](https://github.com/minimit/xtendui/compare/v1.0.0-beta.26...v1.0.0-beta.27) (2021-06-12)


### Bug Fixes

* **slider:** refactor slider dragDirection fix slider relative bugs and fix slider direction when going back ([5613015](https://github.com/minimit/xtendui/commit/561301550c99f442b72b2e2c7d0b3b35397d79c3))

# [1.0.0-beta.26](https://github.com/minimit/xtendui/compare/v1.0.0-beta.25...v1.0.0-beta.26) (2021-06-07)


### Bug Fixes

* **drop, tooltip:** fix popperjs drop and tooltip with merge options now it overrides default options with custom options + demos ([edacaca](https://github.com/minimit/xtendui/commit/edacaca2ef208bdb773077dc01c0d74ff17094c6))
* **slider:** fix absolute loop when dragging ([c9583ea](https://github.com/minimit/xtendui/commit/c9583ea796124172377b95bd7edb8fdf7a55eeb6))
* **slider:** fix slider absolute loop and fix dragreset ([00dd69b](https://github.com/minimit/xtendui/commit/00dd69b345e97a30844ad29a33d60c78b294e9f5))
* **slider:** fix slider absolute loop animation ([edd68e2](https://github.com/minimit/xtendui/commit/edd68e21a8053158e25e91eeee4b44bcb09bede7))
* **slider:** fix slider absolute loop wwith fake direction ([01e4bee](https://github.com/minimit/xtendui/commit/01e4beef38ee7fd6eef1310cb0471bed0c6d9c2c))
* **slider:** initial dragposition ([b63cfe4](https://github.com/minimit/xtendui/commit/b63cfe4fc0b671f36e093e23d4b30704be070954))
* **slider:** slider absolute no overflow possible ([cfe6285](https://github.com/minimit/xtendui/commit/cfe628512f009cd1240a6ca023880b795973ad42))
* **slider:** slider absolute self.detail.dragging inside on and off events ([84396ef](https://github.com/minimit/xtendui/commit/84396ef837f733850f75fe8692b578e05892eaac))
* **slider:** slider nooverflow automatic group and some refactor slider ([2951316](https://github.com/minimit/xtendui/commit/2951316f7a30e1db82ddabebbba29cad4536f569))
* **slider:** WIP fix slider absolute ([40d4aeb](https://github.com/minimit/xtendui/commit/40d4aeb11282ca5f4537566654f36ecaf6a24af1))


### Code Refactoring

* **slider:** self.detail.dragging to self.detail.instant ([c64499a](https://github.com/minimit/xtendui/commit/c64499a5785ad62ca440a5fcdd2a39993f3616f6))


### BREAKING CHANGES

* **slider:** use self.detail.instant instead of self.detail.dragging

# [1.0.0-beta.25](https://github.com/minimit/xtendui/compare/v1.0.0-beta.24...v1.0.0-beta.25) (2021-05-28)


### Bug Fixes

* **toggle:** fix collapse initial with no animation ([0f08129](https://github.com/minimit/xtendui/commit/0f0812910b77b58cb70c1f243acf33ec114f0dd3))
* **toggle:** fix multiple delay and anim on document mode on same targets ([258bb71](https://github.com/minimit/xtendui/commit/258bb71dd8e90e3b9f6cd5bdc54b5dbd2c1ffb8f))


### Features

* **form:** new switch svg and form paddings ([fa1321a](https://github.com/minimit/xtendui/commit/fa1321a6e86c6d27dce90c7861bd42a9754bad2c))

# [1.0.0-beta.24](https://github.com/minimit/xtendui/compare/v1.0.0-beta.23...v1.0.0-beta.24) (2021-05-25)


### Bug Fixes

* test fix release github ([942f505](https://github.com/minimit/xtendui/commit/942f5050e393b32b9c0eb12e7328cc66bc470775))

# [1.0.0-beta.23](https://github.com/minimit/xtendui/compare/v1.0.0-beta.22...v1.0.0-beta.23) (2021-05-25)


### Bug Fixes

* test fix release github ([b72cd78](https://github.com/minimit/xtendui/commit/b72cd7838c3255c0f278819b9e2a9739e126a314))

# [1.0.0-beta.22](https://github.com/minimit/xtendui/compare/v1.0.0-beta.21...v1.0.0-beta.22) (2021-05-25)


### Bug Fixes

* **scrollto:** fix toggle hash force false on activation ([170db95](https://github.com/minimit/xtendui/commit/170db955ccf903e196adfb1ad38b80b93b69bf74))
* fix order Xt.read first observe then mount to fix xt-ignore-once ([15cb7fc](https://github.com/minimit/xtendui/commit/15cb7fc68305db3fbb05f3196917604673ebadff))
* removed toggle Xt.scrolltoHashforce ([362a8d1](https://github.com/minimit/xtendui/commit/362a8d10774c5eb9d819ff9f8feedb67121a0d59))

# [1.0.0-beta.21](https://github.com/minimit/xtendui/compare/v1.0.0-beta.20...v1.0.0-beta.21) (2021-05-25)


### Bug Fixes

* added relaxed json to dependencies ([20c5a60](https://github.com/minimit/xtendui/commit/20c5a60594ebfcfc3d3537ac8e11f19c01c08d0f))

# [1.0.0-beta.20](https://github.com/minimit/xtendui/compare/v1.0.0-beta.19...v1.0.0-beta.20) (2021-05-24)


### Bug Fixes

* **groupnumber:** no event on init ([c408c67](https://github.com/minimit/xtendui/commit/c408c67364028160f8300855cddd0e72c69cf3ae))
* **scrollto:** fix scrollto hashchange instant with null value ([b0162f8](https://github.com/minimit/xtendui/commit/b0162f882f105e0d194a156fc9f5b3daad7a0ae0))
* **slider:** automatically disable wrap if there's not enough space ([77ce605](https://github.com/minimit/xtendui/commit/77ce60581346f9f1ac72c06e24d413ca45e7aa77))
* **slider:** clean data-xt-group-same ([e1d8cb8](https://github.com/minimit/xtendui/commit/e1d8cb833ed0b54a26a1f401d9f4c708ebbe833e))
* **slider:** fix contain end slides automatic groups ([f898f3d](https://github.com/minimit/xtendui/commit/f898f3dd2cc4dc931d2df93129a46f0866bbec10))
* **slider:** fix wrap activation and some refactor ([92da975](https://github.com/minimit/xtendui/commit/92da97543d96164ff4196b05cc0e83ab7d597b7d))
* **slider:** fix wrap data-xt-group-same when wrapping ([644af6a](https://github.com/minimit/xtendui/commit/644af6af201e0f628d6f5cbf3823f35c0c5f40a3))
* **toggle:** fix initialization starting classes when multiple elements in groups ([3570203](https://github.com/minimit/xtendui/commit/357020396e25496aac99a4eb1975080e555b09cc))


### Code Refactoring

* removed defaults elements and targets from interactions ([522071b](https://github.com/minimit/xtendui/commit/522071bd40fd437a1fc62a6274ad899b8689f6b8))


### Features

* relaxed-json instead of json5 less kb ([71eefd1](https://github.com/minimit/xtendui/commit/71eefd16124ad5300aa847ce23678718a306b6ca))
* **sticky:** added classes options xt-sticky-nozindex adn xt-sticky-noheight ([480af8b](https://github.com/minimit/xtendui/commit/480af8b42026b7bbe75c3ad9a15f89afb59139a9))
* **typography:** added text 4xs and revision border radius ([c0e4e07](https://github.com/minimit/xtendui/commit/c0e4e07efa68e36349a28e68e65bff3c12215001))


### BREAKING CHANGES

* always set delements and targets on xt-drop xt-tooltip xt-toggle xt-overlay close#32

# [1.0.0-beta.19](https://github.com/minimit/xtendui/compare/v1.0.0-beta.18...v1.0.0-beta.19) (2021-05-19)


### Bug Fixes

* **googlelocator:** fix sequential locate search radius ([3632734](https://github.com/minimit/xtendui/commit/3632734958d834542dc83053b3a5f476579625bc))
* **googlelocator:** result classes on self.object ([18b5b0b](https://github.com/minimit/xtendui/commit/18b5b0b212d58c01630c22b132ca9ad7bf25ddfe))
* **scroll:** fix fade demos once bug ([3fa9317](https://github.com/minimit/xtendui/commit/3fa93176ed36bcdc4ff840a9b1a19b3a8f51490d))
* **slider:** fix multiple group-same ([f4a71c4](https://github.com/minimit/xtendui/commit/f4a71c4536326e42101daa0fc9c0e5a7e0d01131))
* **slider:** fix slider direction when looping ([12a00a4](https://github.com/minimit/xtendui/commit/12a00a4a57401637bad18fa83507e53a1370dafb))
* **toggle:** fix collape width animation and refactor raf names for both height and width ([db9b2c6](https://github.com/minimit/xtendui/commit/db9b2c668ee19c6bb02f1143a9b8105400cb4fff))
* **toggle:** fix hash change non activating sometimes ([181d975](https://github.com/minimit/xtendui/commit/181d9757e6e813c93f367054a6a0a77612c614c4))
* fix hash multiple activations with multiple hash activations ([1d4f17c](https://github.com/minimit/xtendui/commit/1d4f17cbd87e5321029b286fa5e077c001556144))
* fix xt and toggle activation multiple frame ([3c756b1](https://github.com/minimit/xtendui/commit/3c756b1a9ab1fcbb253ba1e54b154c9233090c23))
* **toggle:** fix hasCurrent with multiple groups ([59c0aa8](https://github.com/minimit/xtendui/commit/59c0aa8f027b896736bd044b45ec1a989c49521c))


### Code Refactoring

* **link:** refactor xt-body class links ([8605e8b](https://github.com/minimit/xtendui/commit/8605e8b1cec7f18dd6574cfaa4dd8e3a2d400720))


### Features

* **toggle:** removed delayInitial option was not working ([144095c](https://github.com/minimit/xtendui/commit/144095c41a94caabf54a84be04b363ad5cd387dc))
* disabled options.aria for now until refactor usability ([c6c8d01](https://github.com/minimit/xtendui/commit/c6c8d01c329ba56503ec0b88f3113067a2694712))


### Reverts

* Revert "docs: links styles inside xt-body" ([06debc9](https://github.com/minimit/xtendui/commit/06debc91f66449a67099937433cd81f064076da2))


### BREAKING CHANGES

* **link:** you need to specify body class xt-links-default or xt-links-inverse to have automatic links styles

# [1.0.0-beta.18](https://github.com/minimit/xtendui/compare/v1.0.0-beta.17...v1.0.0-beta.18) (2021-05-12)


### Bug Fixes

* **drop:** fix xt-drop-static reset styles ([9b986c6](https://github.com/minimit/xtendui/commit/9b986c61b0e5fe5d5772f271a5fb967c77cc0d37))
* **slider:** fix slider nooverflow when exactly the size ([4792c65](https://github.com/minimit/xtendui/commit/4792c658fbd8b2b2ea7cbf873dd7ecdb4d167a3f))
* **toggle:** fix api multiple groups ([a90c436](https://github.com/minimit/xtendui/commit/a90c436a3da1f087f69bcb889c5d1ad2249ab63d))
* **toggle:** hash fix targets classes on hash activation ([ac7b8e5](https://github.com/minimit/xtendui/commit/ac7b8e5434019722e728010e011ead774b37ea13))
* **toggle:** initialization add also options.class ([2d53937](https://github.com/minimit/xtendui/commit/2d53937d6eb192b80aae9ccf9f6b10066f41a1ce))


### Features

* **toggle:** options.exclude to exclude elements or targets matches ([2abc074](https://github.com/minimit/xtendui/commit/2abc074dccb171f586adce5839b7586133a6b3fa))


### BREAKING CHANGES

* **toggle:** removed getTargetsGroups from api not needed

# [1.0.0-beta.17](https://github.com/minimit/xtendui/compare/v1.0.0-beta.16...v1.0.0-beta.17) (2021-05-10)


### Bug Fixes

* removed important from cssinjs when possible ([06bd97e](https://github.com/minimit/xtendui/commit/06bd97e34c4597e1125275e19a5494a33c230155))
* **card:** card text align left when used with button tag ([303c00a](https://github.com/minimit/xtendui/commit/303c00a84783abac0d7f4a38103c007c7de1d038))
* fix xt event delay when no detail ([a428a4b](https://github.com/minimit/xtendui/commit/a428a4b74e2275e8bd4c461d83c8277959c2526d))
* **mousefollow:** page load with automatic scroll fix ([56e6909](https://github.com/minimit/xtendui/commit/56e69099a9d2e3f0c3517654e7de2dc59e98de7c))
* **slider:** do not initialize slider when hidden ([bb41397](https://github.com/minimit/xtendui/commit/bb413976d1cadc31191da6ffa2c88d7808fb2c92))
* **slider:** fix contain and group options together wrong final grouping ([51c621a](https://github.com/minimit/xtendui/commit/51c621a335a8b231a82159d3ebbf85eac6fc78e5))
* **slider:** revert direction drag ([cfcaf73](https://github.com/minimit/xtendui/commit/cfcaf73b08568a0b41637ef06e41728b4507741f))
* **slider:** slider wrap calculations fixes with new automatic group and refactor slider direction ([1f753f4](https://github.com/minimit/xtendui/commit/1f753f44c260f02ef3c1278c99eb363d9ad9001b))
* **toggle:** fix autostart did start on window focus ([04bb316](https://github.com/minimit/xtendui/commit/04bb3165d391507b618a24cc0096415e2ce1a94c))


### Code Refactoring

* refactor base styles and layout and animation body classes ([4a63f92](https://github.com/minimit/xtendui/commit/4a63f9234ba9a97fbfc6025eb8ae0d762b511650))
* Xt.animOn and Xt.animOff to Xt.on and Xt.off ([2f1771e](https://github.com/minimit/xtendui/commit/2f1771ead2dd7de3933d00b4a310f9af9eebb023))


### Features

* xt-body also have links and typography now ([ec5ec02](https://github.com/minimit/xtendui/commit/ec5ec024249fe002af0d3dc1e0f93589560aba28))
* **scrollto:** scrollto events ([0b53f5a](https://github.com/minimit/xtendui/commit/0b53f5af2937bbc96f796a7d6d0b03b6d72dce3a))
* **slider:** slider relative with automatic grouping activation ([019a1da](https://github.com/minimit/xtendui/commit/019a1dac79ec758fb3cfa8fb881a462d85bf2506))
* added focus on labels with checks and radio ([05a9c43](https://github.com/minimit/xtendui/commit/05a9c433309dd6f6ff740166748c8c464e332331))


### BREAKING CHANGES

* use Xt.on instead of Xt.animOn and Xt.off instead of Xt.animOff
* changed animation and layout opt out body classes and now you need to add xt-body class to body to opt-in to all body features

# [1.0.0-beta.16](https://github.com/minimit/xtendui/compare/v1.0.0-beta.15...v1.0.0-beta.16) (2021-05-04)


### Bug Fixes

* **button:** default button text-center ([835aa50](https://github.com/minimit/xtendui/commit/835aa50b879bb56537c30c03cc4b0c24a9075dac))
* **groupnumber:** fix css groupnumber ([e011cd4](https://github.com/minimit/xtendui/commit/e011cd4ad8f1e6c999e5b681572adf7b7dec247c))
* **ripple:** fix ripple destroy and fix ripple no sizeInitial ([0836731](https://github.com/minimit/xtendui/commit/0836731b4281068e4d13dd50e9613d3fd95c44d1))
* **scrollto:** fix activation only if target is visible ([8b2ee09](https://github.com/minimit/xtendui/commit/8b2ee09c3ffde3a0dc5f4cdbd198862acc462225))
* **scrollto:** fix click usecapture and fix init on xt.ready and fix scrollers overlay disable ([e949163](https://github.com/minimit/xtendui/commit/e949163a067cf7859d6ad08b70662e35321caa46))
* **scrollto:** fix hashchange value inside raf ([21707f2](https://github.com/minimit/xtendui/commit/21707f26e12298742edd857ae6d92f376e75cc98))
* **scrollto:** fix raf after initial event ([7a9aac2](https://github.com/minimit/xtendui/commit/7a9aac21718733cfc141c967e74229294ac8e120))
* **scrollto:** fixed scrollto openauto when clicking on anchors that are elements of openauto components ([7793b65](https://github.com/minimit/xtendui/commit/7793b651451eec88e5fd089404f7088562606976))
* **scrollto:** initial activation and reverted demos duration ([7bd2bff](https://github.com/minimit/xtendui/commit/7bd2bff98a738d8ecf1b60868189c07fd07d37df))
* **scrollto:** listener dispatch after raf and demos better and some other fixes ([01d0147](https://github.com/minimit/xtendui/commit/01d014761e9b1e47c06ed5e180033c3363b7bbd9))
* **scrollto:** no raf fix flick on some occasion ([4ec8812](https://github.com/minimit/xtendui/commit/4ec8812fbe2ae73518fe531a20bc90acabeba721))
* **scrollto:** no raf scrollto and toggle force hash ([9c97b23](https://github.com/minimit/xtendui/commit/9c97b23347ff90d3679a9900d44ec8fc145f1659))
* **toggle:** fix collapse sequential off retain value ([dad97b4](https://github.com/minimit/xtendui/commit/dad97b4acccbea80785fcca1fbb44b2ff40e1d37))
* **toggle:** fix collapse width values ([455d038](https://github.com/minimit/xtendui/commit/455d038cbdf3946bf2e80af5cf3badc5b1635ff0))
* **toggle:** fix form when component is initialized after form js and fix initial activation when no event ([95adbee](https://github.com/minimit/xtendui/commit/95adbee66cfcd84a2f2c51bbf9726ac87c596f0d))
* **toggle:** fix unique mode namespace reset on reinit, fixed multiple calls on events unique mode ([84adb34](https://github.com/minimit/xtendui/commit/84adb34f224f5e4569af01fafb721d20af9be391))
* **toggle:** force events pass also if queue running ([7f26ff9](https://github.com/minimit/xtendui/commit/7f26ff93744cabedf0fa7d4866b84d0e058484bc))


### Features

* **animation:** refactor toggle collapse working also with initial values ([3587d96](https://github.com/minimit/xtendui/commit/3587d9638499b4fdb8e17073c48ff5bde9aa942a))
* **button:** button default justify center ([1e9b5c7](https://github.com/minimit/xtendui/commit/1e9b5c798992c7cad27e3451b7f5a43ef9f86eed))
* **scrollto:** manual hashchange skip with Xt.skiphash ([8ed7b47](https://github.com/minimit/xtendui/commit/8ed7b47eff77117af7836baa6304c979f858b494))
* **toggle:** delay with data attributes and refactor duration and delay ([30284bf](https://github.com/minimit/xtendui/commit/30284bfb1e93598ace82353a1a893dcb8946af98))
* **toggle:** xt-toggle-visible added ([fef7ed5](https://github.com/minimit/xtendui/commit/fef7ed524d6f84b161ddd5a7382037822e4340ad))


* Xt.skipHash to Xt.scrolltoHashforce ([120e683](https://github.com/minimit/xtendui/commit/120e683775d72f23bd1ebfe32e8cb15dc25d1b65))


### Code Refactoring

* auto pause default refactor ([a2fcd04](https://github.com/minimit/xtendui/commit/a2fcd048be9d8265a37f7b56703e6c937c119222))


### BREAKING CHANGES

* **button:** use justify-start on button if you want that old default justification
* use Xt.scrolltoHashforce instead of Xt.skipHash
* now auto.pause is 'a, button' inside self.object

# [1.0.0-beta.15](https://github.com/minimit/xtendui/compare/v1.0.0-beta.14...v1.0.0-beta.15) (2021-04-27)


### Bug Fixes

* **slider:** slider pagination hidden instead of xt-ignore ([80ee403](https://github.com/minimit/xtendui/commit/80ee403c740cb7f02a4f31bd03cc7676b397bd23))
* removed xt-ignore from toggle and scrollto to mount on scrollTrigger pinned items ([8f593fe](https://github.com/minimit/xtendui/commit/8f593fedc5b702d3de5cafd7a30b3f6ba21d5b3d))
* **scrollto:** fix scrollto initialization after overlay and fix scrollto only if hash in elements or targets ([0c68273](https://github.com/minimit/xtendui/commit/0c682739ae9abb55e5b6852979e84f6b0b2c252b))
* added group-hover tailwind variant ([cd8327b](https://github.com/minimit/xtendui/commit/cd8327bbd1bedb5e5e289cf8448a153155cb54e2))
* **scrollto:** do not force hash scroll position use scrollrestoration defaults of browser ([8ea14b3](https://github.com/minimit/xtendui/commit/8ea14b3756ab0eb5c25fdec73dc3a321c6d04857))
* **scrollto:** scrollto new options initial and hashchange and new demos with instant duration on initial and hashchange + refactor initial event after activation in other components ([9507b5f](https://github.com/minimit/xtendui/commit/9507b5f4e6cf860e616af72b86deba3fbfdd18eb))
* **toggle:** activation initial after custom listeners ([80d2d5b](https://github.com/minimit/xtendui/commit/80d2d5b72aecfa381e1f4c8a6461a9ab95005ac1))
* **toggle:** default groupelements is true now ([682197c](https://github.com/minimit/xtendui/commit/682197c48801ce7b6a3379109bc05204c6066a0b))
* **toggle:** fix getTargets and getElements return empty array if not applicable and no loop and various refactor index API ([fb1147c](https://github.com/minimit/xtendui/commit/fb1147c041b2e63d3322d0b9bbda49a53fea5e47))


### Features

* **css:** container defaults as tailwind ([d883bb6](https://github.com/minimit/xtendui/commit/d883bb6390d1f196b6725efe71e5a7ed101db454))
* **googlelocator:** custom filters refactor ([9c777f2](https://github.com/minimit/xtendui/commit/9c777f2e375ff23b79e24196df71ad34d999f233))


### BREAKING CHANGES

* **css:** use container: settings for fluid container and custom padding and center
* **toggle:** use groupelements: false if you don't want groupelements

# [1.0.0-beta.14](https://github.com/minimit/xtendui/compare/v1.0.0-beta.13...v1.0.0-beta.14) (2021-04-22)


### Bug Fixes

* **toggle:** initial also if checked ([ea20130](https://github.com/minimit/xtendui/commit/ea20130d43a331ed5b2f21c582e76e8755b92bc7))

# [1.0.0-beta.13](https://github.com/minimit/xtendui/compare/v1.0.0-beta.12...v1.0.0-beta.13) (2021-04-22)


### Bug Fixes

* **scrollto:** add option attribute for hash and some fixes ([3d33042](https://github.com/minimit/xtendui/commit/3d330425325468c40e7cd36c508130155e3ab3d7))
* **scrollto:** fix automatic scroll on change hash ([503d2f3](https://github.com/minimit/xtendui/commit/503d2f3ebb788872ba503a29512ccd357317f537))
* **scrollto:** fix hash change animation ([b27e827](https://github.com/minimit/xtendui/commit/b27e8276604509e1eeab23812fe22a265bdf2147))
* **scrollto:** fix prevent page scrolling on hash change ([702fabb](https://github.com/minimit/xtendui/commit/702fabbeb486c51efdeeefcc40d0c81dc421db03))
* **slider:** default contain true for slider and some fixes ([32e5fc7](https://github.com/minimit/xtendui/commit/32e5fc72c32f1c0739488c28dbfd74056dd07025))
* **slider:** fix contain group and positioning and fix drag positioning ([4bc6358](https://github.com/minimit/xtendui/commit/4bc63583f9e935448451bda9506d2151d38eaf67))
* **slider:** fix jump mobile and mobile lock scroll ([5088bbc](https://github.com/minimit/xtendui/commit/5088bbcc426bd7f9cfbbafa29305e3678db604df))
* **slider:** fix slider calculations height and width and refactor functions in various components ([fca04d5](https://github.com/minimit/xtendui/commit/fca04d563ff83a2c92a579af37241cfe4d80f71c))
* **slider:** fix slider overflow values and demos with custom overflow ([6150357](https://github.com/minimit/xtendui/commit/615035739385905bbc15d42bd9ecde55856a9d3a))
* **toggle:** fix initial animations instant and fix reinit keep in class ([fdceab8](https://github.com/minimit/xtendui/commit/fdceab8448a55d5e62434baf01b950bdebf00a7e))
* **toggle:** fix initialization remove classes with raf no flick and respect options.classSkip ([c283bb3](https://github.com/minimit/xtendui/commit/c283bb30583eebb84f16998a405952846f6e878c))
* **toggle:** fix initialization with hash bug that didn't remove initial on ([097bdbe](https://github.com/minimit/xtendui/commit/097bdbe668ac00cfc8b42ce69a23c52e8742e6b9))
* **toggle:** fix openauto triggering on wrong elements ([8c6dece](https://github.com/minimit/xtendui/commit/8c6deceac0e1ed4df01aa9a092653f2be89c5edb))
* **toggle:** fix reinit after disable keep currents ([e3dd28c](https://github.com/minimit/xtendui/commit/e3dd28c7c38e80ff61e94890c23959adc1481e28))
* fix toggle initialization classes and refactor scrollto ([eb48f53](https://github.com/minimit/xtendui/commit/eb48f53851f54db7daa534b710ee7ccebe01afd2))
* **toggle:** hash activated by default and option is string ([95194fb](https://github.com/minimit/xtendui/commit/95194fb9daa6d2f60fbaf1ec72964378831d6e57))
* initialization with one raf ([0b0864c](https://github.com/minimit/xtendui/commit/0b0864c03936793106a26381296c3ea63cef38b0))
* toggle and slider defaults revision ([c6fa4eb](https://github.com/minimit/xtendui/commit/c6fa4eb5daa5a5b1dfb95b4b54651edc98fd79d5))
* **toggle:** hash option toggle only true or false ([5ac9783](https://github.com/minimit/xtendui/commit/5ac9783819bcdce032555a9de5a9ef612b3fe846))


### Code Refactoring

* openauto and closeauto name ([8c72499](https://github.com/minimit/xtendui/commit/8c72499209a715a60b7166bbdc7946559f00dc52))


### Features

* **scrollto:** scrollto duration and removed distance and refactor ([f4f7195](https://github.com/minimit/xtendui/commit/f4f7195f90f87dc5c158dbd00dd9f43e2502d8be))
* **toggle:** hash option with demos and fix form.js multiple triggers on initial ([977b0a3](https://github.com/minimit/xtendui/commit/977b0a34f5d20ad3faf25061202c9219c09c2dc7))


### BREAKING CHANGES

* closeAuto option to closeauto
* **scrollto:** duration false by default scrollto use function or value if you want duration
* **slider:** set contain: false if you don't want the contain in sliders
* **slider:** mousefollow friction delta argument now as object
* **scrollto:** new options. and self. for scrollto see documentation

# [1.0.0-beta.12](https://github.com/minimit/xtendui/compare/v1.0.0-beta.11...v1.0.0-beta.12) (2021-04-13)


### Bug Fixes

* tailwind default transition duration changed to 500ms ([36ad6a0](https://github.com/minimit/xtendui/commit/36ad6a080ab8d93355fb29ecf2556ffabb5c144e))


### Features

* **toggle:** options.groupSeparator and multiple groups ([56dca74](https://github.com/minimit/xtendui/commit/56dca7402b2372e0c5f0fe89cac5a635eea1995f))
* added group-active variant ([5da544c](https://github.com/minimit/xtendui/commit/5da544c88f78359134fcfff33f84fd6002aa950d))
* **slider:** xt-overflow-auto styles ([dd8579a](https://github.com/minimit/xtendui/commit/dd8579a04430c68278ee01466358d64fab0441ac))

# [1.0.0-beta.11](https://github.com/minimit/xtendui/compare/v1.0.0-beta.10...v1.0.0-beta.11) (2021-04-12)


### Bug Fixes

* **row:** xt-row-overlflow from css ([39cd2d0](https://github.com/minimit/xtendui/commit/39cd2d016a2a8a6e33e0aa0f804c6d9a62241c1a))
* **slider:** autoheight transition with tailwind classes ([499e9af](https://github.com/minimit/xtendui/commit/499e9af05ca8ea07e5909481d331996aa0e2bb03))
* **slider:** fix initial instant disabled and xt-overflow ([f98fa18](https://github.com/minimit/xtendui/commit/f98fa186bc4a48e2fb36b682a97445654f8b5d68))
* fix toggle and slider xt-grab and xt-jump on activation deactivation ([e090709](https://github.com/minimit/xtendui/commit/e0907095b85440611e4ebafe60c91e9976edde9d))


### Code Refactoring

* **slider:** refactor slider overflow ([26ff9e9](https://github.com/minimit/xtendui/commit/26ff9e9fbe3e0cb913d2ec9e5e2c1f8a180fbd99))
* **slider:** refactor some slider drag options ([745ea83](https://github.com/minimit/xtendui/commit/745ea835a4efabbddde0b59712cdbf4e4ad27ffc))
* **slider:** removed xt-slides-inner ([26beff2](https://github.com/minimit/xtendui/commit/26beff2078719a2b7e7e5a0c0ba4a00decfcc9a7))
* all interaction classes with xt- prefix and xt-active tailwind variant instead of active ([0f5a255](https://github.com/minimit/xtendui/commit/0f5a2550187cbfcb9ca9508a8f02544a29050f80))
* on class instead of active and revision tailwind variants ([3205cb2](https://github.com/minimit/xtendui/commit/3205cb2b0f10755a656cd60705002593fc70cf04))
* refactor slider pagination and no clone for calculating slideWidth ([4ff8383](https://github.com/minimit/xtendui/commit/4ff83836a956f14c9c2be2d8b8cb59c51aacfef8))
* refactor tailwind variants and activation classes ([79a0f5a](https://github.com/minimit/xtendui/commit/79a0f5a88a195c6cff93b72e4f308c4aa9214eee))
* revision activation classes and tailwind varians ([80fb28e](https://github.com/minimit/xtendui/commit/80fb28e6c57ea2e14fcdc5cbc1e4c2b101ace223))


### Features

* added new selector to toggle and drop and tooltip and overlay ([f9a6426](https://github.com/minimit/xtendui/commit/f9a64263fbebc232aaea29243ae51b2b3f33300a))
* **form:** refactor form classes ([8bcc5c6](https://github.com/minimit/xtendui/commit/8bcc5c6b76a0fc2aa1911558198df77a7b7b2609))
* **media:** removed xt-media-inner not needed ([f016fb2](https://github.com/minimit/xtendui/commit/f016fb2fd24a33664069b0bd9a08d610899d0906))


### BREAKING CHANGES

* **row:** if you use xt-row-overflow assign css because the class is not styled anymore
* **slider:** drag.wrap e dra.nooverflow oustide drag object in options
* **slider:** options.overflowAuto becomes options.drag.noooverflow and the html class applied from .xt-overflow-auto to .xt-slider-nooverflow
* **slider:** use xt-slides instead of xt-slides-inner in all css and js, and revisit autoHeight as the demos
* use .on instead of .active for activation and now you can use variants on: group-on: active:
* data-xt-pag with hidden instead of xt-ignore
* **slider:** use tailwind classes for slides autoheight transition
* FINAL VERSION use this tailwind variants for animations: in: out: group-in: group-out:
now activation classes are without xt- prefix: .active .in .out .initial .done .dir-before .dir-after
* use tailwind variants xt-in: and group-xt-in: instead of xt-active: and group-xt-active:
added xt-out: and group-xt-out: for out animation
use xt-active instead of xt-in for initial activation
use xt-active for activation and xt-in and xt-out for in and out animations
* instead of active: and group-active: use xt-active: and group-xt-active:
default classes for interaction now are .xt-in instead of .in, .xt-out instead of .out, .xt-active instead of .active, .xt-before instead of .direction-before, .xt-after instead of .direction-after, .xt-initial intead of .initial, .xt-done instead of .done
removed in-toggle in-drop in-tooltip in-overlay for instant activation use instead the class xt-in
* **media:** remove xt-media-inner div and use relative on xt-media instead of xt-media-inner

# [1.0.0-beta.10](https://github.com/minimit/xtendui/compare/v1.0.0-beta.9...v1.0.0-beta.10) (2021-04-07)


### Bug Fixes

* **infinitescroll:** fixed infinitescroll position resume and fixed general activation ([fa0afa9](https://github.com/minimit/xtendui/commit/fa0afa92f5be914e6132e0e6927c3a1e55b69810))
* **scrolltoanchor:** refactor and changed events ([a0f6379](https://github.com/minimit/xtendui/commit/a0f63792f43d6da710fd1f07e516bee189ab9943))
* **slider:** fix contain and wrap jump activation ([04c0ca0](https://github.com/minimit/xtendui/commit/04c0ca00e0c0b3836e6ec28778e689adfb8ee45c))
* **toggle:** initial direction when inverse is set ([868d8f4](https://github.com/minimit/xtendui/commit/868d8f4622e5f899ceae5b2bb65e45deb326c497))
* removed xt animation utils ([23e7e72](https://github.com/minimit/xtendui/commit/23e7e72f9cde8dc82d8f1cbf4e25bb504f36c9b2))
* **slider:** slider no overflow hidden by default only on absolute mode ([0005a66](https://github.com/minimit/xtendui/commit/0005a6611adb8e060e9868b1936b0363e9ab0fe4))
* defaults without elements and targets items ([712f43f](https://github.com/minimit/xtendui/commit/712f43f177f42828d0a28c5e8f154aaebd7b3806))
* fixes options.closeInside and unique mode fixes on activation and xt-backdrop optional pointer-events-none ([6cb72d4](https://github.com/minimit/xtendui/commit/6cb72d4c612c91764dc322aa124dff028486c6ad))
* **links:** fix specificity xt-links-default and xt-links-inverse when nested ([97ed9d3](https://github.com/minimit/xtendui/commit/97ed9d3e77f47258db1c7b56b768b8dbab14f572))
* **toggle:** fix flickr on active display deactivation ([47e1a78](https://github.com/minimit/xtendui/commit/47e1a78b0d018d0499e0fd3fe7c90531159c6260))
* **toggle:** options.elements now have unique mode with id selector ([c09e50e](https://github.com/minimit/xtendui/commit/c09e50ec51b2bbf029361e85ca1253059986293e))
* google locator and infinitscroll and stickyflow default options ([e43e173](https://github.com/minimit/xtendui/commit/e43e1730188cb81eff1de28eeec3b9fdb28acfe3))
* initial zindex for components ([f222bb0](https://github.com/minimit/xtendui/commit/f222bb0f858f9c2d63c6068676c93c84bb1716dc))
* refactor build and generation ([7fa6377](https://github.com/minimit/xtendui/commit/7fa6377be3c4ec02de9e972467634f8a04c5ffde))
* refactor demos react ([5a83beb](https://github.com/minimit/xtendui/commit/5a83beb6e726405d0169f223a000a1efa30297bd))
* refactor events fixed multiple calls with destroy and off event triggering on event ([3c739bd](https://github.com/minimit/xtendui/commit/3c739bdfe705192858a7540dd94948b303a49cf1))
* toggle and drop items selectors inside self.object ([14cd7c0](https://github.com/minimit/xtendui/commit/14cd7c0e964947911dede500e5c15d340cbdff7f))
* tooltip and drop fixed strange behaviour on off, removed popperInstance destroy ([1fcdcc5](https://github.com/minimit/xtendui/commit/1fcdcc54365b3c96961e21b2698d1d76d391530e))
* **toggle:** toggle unique mode can have multiple targets now ([529bb07](https://github.com/minimit/xtendui/commit/529bb07b3f9aa42c612d7231000a86cbcbaca3fb))
* **typography:** revision spacing typography ([3e6e950](https://github.com/minimit/xtendui/commit/3e6e9501fa4f29a548bef5b129cc8bcaeedaa563))
* toggle now has display css activation also on active ([aa6aae5](https://github.com/minimit/xtendui/commit/aa6aae57f05e9ac3d7791d0421c11ec6c0b29b97))
* unique mode now can also have elements ([b4f5947](https://github.com/minimit/xtendui/commit/b4f5947e3f907ab7b09e753314f769e2dc54d4f8))


* fix(slider) refactor jump and interaction slider ([ad4b422](https://github.com/minimit/xtendui/commit/ad4b4222a81e1a75045f7ba910ccd2c37306f7cd))


### Features

* **scrollto:** options.scrollActivation added ([75c52aa](https://github.com/minimit/xtendui/commit/75c52aabeb333a2c33aea0fa883fd58afd94964d))
* **scrolltoanchor:** changed scrolltoanchor elements default query and removed matches options ([6427458](https://github.com/minimit/xtendui/commit/6427458e75a49c254d77d0b93e69eccb1e2129df))
* **scrolltoanchor:** refactor scrolltoanchor component ([f79f52b](https://github.com/minimit/xtendui/commit/f79f52b45fb1dfb4a6b3283feb81538082e7e911))
* fix reinit and self.options  refactor ([9697862](https://github.com/minimit/xtendui/commit/9697862e88a597113001b920aa4a46a774df3c05))
* refactor structure with all components in src folder and removed addons ([9a1c55b](https://github.com/minimit/xtendui/commit/9a1c55ba27e289eabdbe0c056db88283d554921e))
* reinit on components and refactor ([e0fabfe](https://github.com/minimit/xtendui/commit/e0fabfec6ef823e1cfa328b2bd9f7dd944d2da33))
* **slider:** refactor slider always interactive ([f342847](https://github.com/minimit/xtendui/commit/f342847a1685e4b400486b053cf18aee6f9ea85f))
* refactor infinite scroll ([db26fcf](https://github.com/minimit/xtendui/commit/db26fcf47038b5abfa60409d4f431b593a0ba947))
* refactor xt.mount ([d2d29db](https://github.com/minimit/xtendui/commit/d2d29dbb067c14730bca9f2e406673a5663c9b05))


### Reverts

* Revert "Revert "Revert "chore: updated latest""" ([7ad09db](https://github.com/minimit/xtendui/commit/7ad09db6df7d889110321058cd3ad6d44f889820))


### BREAKING CHANGES

* xt-slider has overflow-hidden by default or the page scrolls
* **scrolltoanchor:** change the following
options.elements to options.anchors
options.scrollElements to options.scrolls
self.scrollElement to self.scroll
src/scrolltoanchor to src/scrollto
xt.scrolltoanchor to xt.scrollto
Xt.Scrolltoanchor to Xt.Scrollto
* **scrolltoanchor:** changed event change.xt.scrolltoanchor to scrollto.xt.scrolltoanchor and supported event on non anchors with trigger
* **scrolltoanchor:** new default options.elements no options.matches for scrolltoanchor
* **slider:** if you need overflow-hidden class on xt-slider add it on the markup
* use function Xt.mount() instead of Xt.mount.push()
use ref argument in Xt.mount instead of object
* if you are activating xt-drop-item or xt-tooltip-item now tou have to query it in elements and targets
* now drop and tooltip with xt-drop-item and xt-drop-tooltip must be direct descendant of the object
* stickyflow googlelocator and infinitescroll set default options for selectors now are false by default
* use src/componentName for all components and addons

# [1.0.0-beta.9](https://github.com/minimit/xtendui/compare/v1.0.0-beta.8...v1.0.0-beta.9) (2021-03-18)


### Bug Fixes

* **form:** fix check and radio active ([c7941af](https://github.com/minimit/xtendui/commit/c7941af4b78838f52ba2f0196544469d3c377595))

# [1.0.0-beta.8](https://github.com/minimit/xtendui/compare/v1.0.0-beta.7...v1.0.0-beta.8) (2021-03-18)


### Bug Fixes

* **form:** refactor form change radio and checkbox ([99e74e2](https://github.com/minimit/xtendui/commit/99e74e236c4835514babcd91e497c2bf172f1eb6))
* **toggle:** fix toggle multiple activation ([01f18c5](https://github.com/minimit/xtendui/commit/01f18c53750d55a43ffd63eb456d40c7cc7c6878))

# [1.0.0-beta.7](https://github.com/minimit/xtendui/compare/v1.0.0-beta.6...v1.0.0-beta.7) (2021-03-17)


### Bug Fixes

* aria disabled on disable ([338feac](https://github.com/minimit/xtendui/commit/338feacc6185cd93c55930b968274a7a0f44c369))
* event limit refactor and fix eventLimit ([c098d2d](https://github.com/minimit/xtendui/commit/c098d2d7faa44b2e0ee501a50c830382166764c2))
* fix form activation of radios when triggering change event ([89dcf89](https://github.com/minimit/xtendui/commit/89dcf897b8736eade4f2a440626a648110ac7876))
* fix ssr window undefined error ([1bb0e85](https://github.com/minimit/xtendui/commit/1bb0e85da62e7be2a411234e89f12cba78606d98))
* fixed classHtml to remeber others opened classes ([9e1fcf9](https://github.com/minimit/xtendui/commit/9e1fcf9394b81526b0191ee624f20b64c98a7afe))
* items with line height and demos card ([f2901ea](https://github.com/minimit/xtendui/commit/f2901ea54674826e4bcf09bbb79dbee0010e1e52))
* list and row all spacing ([3b4e0ad](https://github.com/minimit/xtendui/commit/3b4e0ad267ba8825e4c510452329b16c7578c2e5))
* **media:** xt-media inherit border radius ([4700785](https://github.com/minimit/xtendui/commit/4700785b12136da65c699470364b9a368bbf09c1))
* overlay zIndex from javascript and sticky below components ([f9a17d8](https://github.com/minimit/xtendui/commit/f9a17d80ce9150c9c29ef88b6c8f8e1038bc3f5f))
* refactor backdrop pointer events and closeInside ([b433cb0](https://github.com/minimit/xtendui/commit/b433cb06f7055fdf1ca4ace09c822e85a5d4138c))
* removed toggle zIndex and refactor backdrop ([d9c69f8](https://github.com/minimit/xtendui/commit/d9c69f8ab4217326706b14766c2fa7e7c9856073))
* removed zIndex base and active ([21af787](https://github.com/minimit/xtendui/commit/21af787bc9f85f343719788182ac1790b909593c))
* trigger events force because of eventLimit ([f9b7e82](https://github.com/minimit/xtendui/commit/f9b7e825ec1f821bb6c44d61383b4ec7aa51f556))
* xt-design no zindex ([0825124](https://github.com/minimit/xtendui/commit/08251249e8b8be033fe8babdb2d039833a23a3df))
* zIndex in self mode ([4bc078c](https://github.com/minimit/xtendui/commit/4bc078c8ae54e0f27d617ad579a8926e60e879ee))
* zIndex resets now on toggle components ([cb18242](https://github.com/minimit/xtendui/commit/cb1824248753fb5336847816d4a2ce1f164423c1))


### Features

* **scrolltoanchor:** refactor scrolltoanchor ([f2964a0](https://github.com/minimit/xtendui/commit/f2964a066c732afff3d579cc7b4f050c63beb2f8))


### BREAKING CHANGES

* if you use zIndex.base or zIndex.active use tailwind zIndex instead

# [1.0.0-beta.6](https://github.com/minimit/xtendui/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2021-03-03)


### Bug Fixes

* **button:** no default justification xt-button ([95b649e](https://github.com/minimit/xtendui/commit/95b649ebf23d4387d9020ee2e31e298fa3e8aff1))
* **css:** body with no ligatures and font smoothing by default ([626e9cf](https://github.com/minimit/xtendui/commit/626e9cf7b4f0cde963c3c2d40e6a92f2c7312f3f))
* **css:** design setup zindex ([bb065c1](https://github.com/minimit/xtendui/commit/bb065c12b03a174ccbacddf01d3fd932c5dfe3e1))
* **drop:** drop options off with click ([de99bb7](https://github.com/minimit/xtendui/commit/de99bb72b7011260288f9d23ee5bd67bd85c9496))
* **hero:** refactor hero markup ([88c4e79](https://github.com/minimit/xtendui/commit/88c4e79402cb1ed0cbf4c48687670ddc912a8ac8))
* **overlay:** no more scrollbar option and remember classHtml as scrollbar did ([ef390c9](https://github.com/minimit/xtendui/commit/ef390c9640465d6e6da9df1428a2aafddc335d4a))
* refactor drop and tooltip event limit to trigger targets ([3642d1e](https://github.com/minimit/xtendui/commit/3642d1eb3a828111b0b6404746f52f3806f3df43))
* **toggle:** fix group index and direction ([3afce63](https://github.com/minimit/xtendui/commit/3afce63a713a16ec3c9dc9debe3d2532144cfb4e))
* extended broswser support ([88fb3d5](https://github.com/minimit/xtendui/commit/88fb3d5af3ee2782e678f9ca4d6f799466228b50))
* fix activation initial on reinit and removed onBlock offBlock and ([737a918](https://github.com/minimit/xtendui/commit/737a918afc2ca2c12b2b5c6d0d6a145e6a6c1b20))
* fix disabled after initialization with initial activation ([30c5aec](https://github.com/minimit/xtendui/commit/30c5aec514ffb211f2568a5a1187d81d70aac245))
* plugin tailwind with respect prefix and esacape fix ([2b902ee](https://github.com/minimit/xtendui/commit/2b902ee0151d6cb24c8594e0e7ed6d3e55600a91))
* **overlay:** fix closeInside to check if inside so closes one nested overlay at time ([4345717](https://github.com/minimit/xtendui/commit/43457171a10aeddbba67adbe3ddab78e9021917b))
* **row:** xt-row-overflow also on non touch devices ([d54aec9](https://github.com/minimit/xtendui/commit/d54aec93610e98981af20df35218b00b416ba54b))
* **toggle:** fixed deactivation on on event when off false ([05599a7](https://github.com/minimit/xtendui/commit/05599a798fc61031218488ca10fd61dc76ec9a94))
* **toggle:** fixed deactivation on on event when off false ([c15598f](https://github.com/minimit/xtendui/commit/c15598f149e05c484ef35e97d7f5a6606ab9061f))
* refactor backdrop and arrow z-index ([c90c480](https://github.com/minimit/xtendui/commit/c90c480d9e43ab41d3f3b0c929cb5f87dd3d8484))


### Features

* **toggle:** refactor group activation and trigger xt events pass event object ([62d08aa](https://github.com/minimit/xtendui/commit/62d08aa926abfa181aad4d1d079b02163a8168ec))
* refactor disabled styles not in cssinjs but custom ([2031cbd](https://github.com/minimit/xtendui/commit/2031cbd910062f326d22cd47b73ce18dad94a7df))
* **css:** added display variants ([f5367c1](https://github.com/minimit/xtendui/commit/f5367c1491ccad90e26fd2da25313a3dc41d057a))
* **overlay:** overlay padding from util ([71b6687](https://github.com/minimit/xtendui/commit/71b6687b010a5654e64a719c6fab9e2c1545346e))
* **scrolltoanchor:** added options.preventHash and revision demos ([456c37e](https://github.com/minimit/xtendui/commit/456c37e2f090f0a74569cd6dbdae1c527a4f4136))


### fi

* **media:** removed overflow hidden ([3b681e0](https://github.com/minimit/xtendui/commit/3b681e062e9964292b321b528a9cacb4ff2bcec0))


### BREAKING CHANGES

* **media:** use the classe overflow-hidden on xt-media-container if you need it
* **toggle:** now by default unique and grouped elements have not linked activation, to have linked activation on elements use options.groupElements: true
* reset styles manually for disabled components and slider-expand
* **scrolltoanchor:** fixed xt-sticky class use this class for scroll sticky elements
* **button:** use justify-between on xt-button where you need it
* use z-above instead of z-top
use z-below on tooltip xt-arrow

# [1.0.0-beta.5](https://github.com/minimit/xtendui/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2021-02-22)


### Bug Fixes

* fixed body scrollbar padding and refactor toggle appendto ([937f3c8](https://github.com/minimit/xtendui/commit/937f3c8e58689f9163b77bf5a857de2a52eb300a))
* **overlay:** fix backdrop over scrollbar ([0d79e62](https://github.com/minimit/xtendui/commit/0d79e621538aa19902319a619049c10c9bccc16f))
* **scroll:** changed classes ([dff16f3](https://github.com/minimit/xtendui/commit/dff16f33519743621f150f5c38ae9194f8214c46))
* refactor multiple mode and mouse events and default elements options ([4ab41c9](https://github.com/minimit/xtendui/commit/4ab41c9a9cdec27cc70bca326d3f5a2390f6dc7c))
* **css:** refactor drop and tooltip arrow ([d627897](https://github.com/minimit/xtendui/commit/d6278976463438b182d209e46ef4c8029b8fa047))
* **toggle:** refactor direction and classes before instead of left and after instead of right ([7fb0dc9](https://github.com/minimit/xtendui/commit/7fb0dc9289d01cfcd30897b9cc8c2386697689ba))
* **toggle:** removed xt-block ([c348dde](https://github.com/minimit/xtendui/commit/c348dde049d6ada86927c570e46fa8f0e0f0a1f1))


### Features

* refactor instant named queue and inverted values ([605cb98](https://github.com/minimit/xtendui/commit/605cb985601744fb4d8039288af0c0f4e8709fd4))
* refactor xt-backdrop now with tailwind classes and no more by javascript and added closeDeep ([e07f6c1](https://github.com/minimit/xtendui/commit/e07f6c123f1f0fbc654ef553092dee31aef5c70b))
* **js:** refactor direction js and css + refactor initStatus + fixed destroy classes + docs fixes ([5304f2c](https://github.com/minimit/xtendui/commit/5304f2cf1e05afc2abba3f1ac35372d7b768adef))
* **toggle:** running checks to prevent multiple activation/deactivation with delay ([a9433f4](https://github.com/minimit/xtendui/commit/a9433f457e3f23791dee178c2255676b352076cb))


### BREAKING CHANGES

* now you have to include xt-backdrop on the markup see demos
closeInside renamed to closeDeep and added new option closeInside that matches selectors inside but not deep
* **scroll:** use xt-sticky instead of xt-scroll-sticky
* **toggle:** use direction-before and direction-after instead of
direction-left and direction-rigt
* **js:** removed .inverse class use .direction-left and .direction-right instead
* **css:** assign xt-drop and xt-tooltip padding, removed nospace xt-arrow with classes instead of xt-drop-arrow and xt-tooltip-arrow

# [1.0.0-beta.4](https://github.com/minimit/xtendui/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2021-02-17)


### Bug Fixes

* **css:** refactor no apply in cssinjs ([20706af](https://github.com/minimit/xtendui/commit/20706af477678267777affc746f8a8fc97170f18))
* **css:** respectPrefix false because we apply xtendui classes ([3077eab](https://github.com/minimit/xtendui/commit/3077eabdbde669d68c2f1bbd30ad0714ec4ab994))
* **toggle:** enable fix ([98a99a1](https://github.com/minimit/xtendui/commit/98a99a1aae7073a2822c3d9ce423b72767498f4d))
* **toggle:** fix do not enable if already disabled ([038079e](https://github.com/minimit/xtendui/commit/038079e4a3187fe711cf396f75f4e0942c0036b4))
* **toggle:** nav no force to respect options.loop ([849a37a](https://github.com/minimit/xtendui/commit/849a37ae51fefc1378948a9659501a7a5a589395))
* **toggle:** refactor activation event status ([f442e05](https://github.com/minimit/xtendui/commit/f442e051ebf9a3ea87af5eeeb4c555372a73dfc4))


### Features

* **css:** primary instead of accent for colors ([c725383](https://github.com/minimit/xtendui/commit/c7253831af3007f2eb53d78f0b1feeb20fec086b))
* **css:** refactor all classes with xt- prefix ([5d6ea38](https://github.com/minimit/xtendui/commit/5d6ea38d0116ae2e5ee3718d27cc9e7aebab85d6))
* revisited font size 3xs 2xs xs ([ccfdf3a](https://github.com/minimit/xtendui/commit/ccfdf3a663d0a99e8b00e125623d3f7b9c95c6ea))


### BREAKING CHANGES

* **css:** use primary instead of accent
* text-xs is one pixel bigger use text-2xs for the same font size

# [1.0.0-beta.3](https://github.com/minimit/xtendui/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2021-02-10)


### Bug Fixes

* refactor icons name with icon + refactor links-inverse + remove code styles ([066e394](https://github.com/minimit/xtendui/commit/066e39420081c3af710d2a1f551c1190834da969))
* **button:** div button cursor inherit ([40d2057](https://github.com/minimit/xtendui/commit/40d2057a9bf0d3d3d9f0633ff8f21d32720e1411))
* **card:** card size with tailwind classes ([d12aad0](https://github.com/minimit/xtendui/commit/d12aad07be3a336473f8f21973f308a836a01c8b))
* **css:** container fluid option default true ([b0007d9](https://github.com/minimit/xtendui/commit/b0007d9e2f7293c7294c859b25e0608e0e223363))
* **css:** default animation out instead of in-out ([00be37b](https://github.com/minimit/xtendui/commit/00be37b79b84aec421211b98682f1f8d097d8d6c))
* **css:** refactor button and badge sizes and styles with no defaults ([2ee7972](https://github.com/minimit/xtendui/commit/2ee7972bae6a3397acbf7109b94a700f15a3adce))
* **css:** refactor icons size and row and list child with flex ([5b96cd4](https://github.com/minimit/xtendui/commit/5b96cd4d3abb9d2b97266bbbcb4453bedfe868ef))
* **css:** refactor list and row spacing values ([7785d9a](https://github.com/minimit/xtendui/commit/7785d9ab9bf6794fa27c6cfa92cd29d10dc618d7))
* **css:** revision btn close tag and revert list and row display flex ([dd45280](https://github.com/minimit/xtendui/commit/dd45280f821b8a4ef173fd85be20fdd734add1f7))
* **js:** added double raf firefox and appenTo fix ([8a0accd](https://github.com/minimit/xtendui/commit/8a0accd1a7875ff09a34f135d4a687205b60a961))
* **js:** medialoaded delay false ([38970de](https://github.com/minimit/xtendui/commit/38970dec41d50e4add2ef537c29fb2afdda0b391))
* **js:** refactor self.direction and fix bug with sequential interactions with queueStart ([0dfa04b](https://github.com/minimit/xtendui/commit/0dfa04b2d7f6a68a1fa46ab68ad6812eecb49066))
* **js:** refactor self.direction and fix bug with sequential interactions with queueStart ([7c39d37](https://github.com/minimit/xtendui/commit/7c39d37b3281a8461aaad572ccbccc3e9412f27b))
* **js:** removed double raf firefox fix and refactor self.direction with 0 ([4fde26a](https://github.com/minimit/xtendui/commit/4fde26a64e73d54ff133f0da0aec44e8ff05c4d2))
* **loader:** loader classes with tailwind ([66678b1](https://github.com/minimit/xtendui/commit/66678b1ae7795a553a95e5d35e8f94273978b7f8))
* **navsides:** navsides styles with tailwind classes ([47e4b0e](https://github.com/minimit/xtendui/commit/47e4b0ec2c11e295b772dd80c612583626684bdc))
* **overlay:** overlay disabled zindex ([7da7fba](https://github.com/minimit/xtendui/commit/7da7fba691a5be702beb43d560f7735ab1b594c9))
* **overlay:** refactor xt-scrollbar to not jump position fixed ([5371a8c](https://github.com/minimit/xtendui/commit/5371a8ce4fb46aa13e74711c6ff87bb8efb7eb29))
* **slider:** slider styles with tailwind classes ([39d0eed](https://github.com/minimit/xtendui/commit/39d0eeda658e6e90da5272493b636ea291bd28e7))
* **toggle:** fix js errors when using delay and destoying ([7703dc9](https://github.com/minimit/xtendui/commit/7703dc92d90658dac2ac6f0c9bf5df916dcac189))
* **toggle:** fixed instant toggle if no duration and removed toggle-inverse it has problems ([bb3d281](https://github.com/minimit/xtendui/commit/bb3d2815ed81472b07b133aeb958c46bca40cd6e))
* **toggle:** toggle .out with pointer event none and .in with zindex active ([d5a86ad](https://github.com/minimit/xtendui/commit/d5a86ad0e81e7ddf1d218658b7e4ae5ccfd7364f))
* **tooltip:** refactor tooltip sizes with tailwind classes ([30d23a6](https://github.com/minimit/xtendui/commit/30d23a6f62e770b7ba66c170812d25ccc9ddfa86))
* **typography:** headers tags styled only if no class attribute and demos custom headers styles ([e45bd03](https://github.com/minimit/xtendui/commit/e45bd037d13f4c80fda7be34579e3977817e3bf1))
* refactor base font size no more responsive and refactor icon size see commit [#826830](https://github.com/minimit/xtendui/issues/826830)ab3a ([6fc0515](https://github.com/minimit/xtendui/commit/6fc0515c900a5e0f79753d123865eaa2c2584de8)), closes [#826830ab3](https://github.com/minimit/xtendui/issues/826830ab3)
* refactor z-index ([b22da0c](https://github.com/minimit/xtendui/commit/b22da0c131adb76919b38c39f048f4e811a51da5))
* removed media background ([b76e7a0](https://github.com/minimit/xtendui/commit/b76e7a0965244a974b9a901ab874ce4026f5d97a))


* form styles some with tailwind classes ([b5e9a71](https://github.com/minimit/xtendui/commit/b5e9a71123189680b46799da8ecc99dbe0df10c0))
* table styles with tailwind classes ([1cf55b7](https://github.com/minimit/xtendui/commit/1cf55b7d8011b150fc6bae6cb1ae9647a3eab6c9))


### Features

* toggle-absolute for animating instantly ([cb2bfba](https://github.com/minimit/xtendui/commit/cb2bfba92ec779078b49ace805112e56d30b954e))


### BREAKING CHANGES

* icons to icon component name
* use tailwind classes see docs
* use tailwind classes for tables see docs
* **navsides:** use tailwind classes for styling navsides see docs
* **loader:** all styles of loader with tailwind classes see docs
* **slider:** for slider pagination and navigation use tailwind classes and use the class .slider-ui on slider-pagination and slider-navigation
* **card:** use tailwind classes for card size
* **tooltip:** use tailwind classes for tooltip size
* **typography:** if you had headers with class you need to use headers class
* **css:** no more icon size use tailwind font size classes instead
* **css:** no more default styles for button fonts and sizes, use tailwind classes instead
* **css:** removed container-fluid, use container instead
* **js:** now direction retain direction on deactivation and resets to 0 after a raf frame
* **js:** now direction retain direction on deactivation and resets to 0 after a raf frame
* **css:** double the list-<number> and row-<number> to have the same spacing because values now are half

# [1.0.0-beta.2](https://github.com/minimit/xtendui/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2021-01-23)


### Bug Fixes

* **slider:** fix change drag when changing direction mid drag ([a440748](https://github.com/minimit/xtendui/commit/a44074849b8d6ae457834d010d4f8aef3634c32f))
* **slider:** fix drag direcion resets when dragging back ([c36a064](https://github.com/minimit/xtendui/commit/c36a064001fbc6f5ecaaf82163db05e5e06574ed))
* **slider:** fix multiple activations removed force ([dd5dd9d](https://github.com/minimit/xtendui/commit/dd5dd9d08c4c6296a241734039c54e47370d412a))
* **slider:** little refactor and fix slider reset ([9dd78a6](https://github.com/minimit/xtendui/commit/9dd78a659dbe2b2a595cd9f592af0effe0c011df))
* **slider:** little refactor and fix slider reset ([f92deb1](https://github.com/minimit/xtendui/commit/f92deb1feeb3c1894149b76f945e687d2bda25ac))
* **slider:** mode absolute slider for computations ([c56945f](https://github.com/minimit/xtendui/commit/c56945f34f4cab0d318b31c67af828e4b15a1402))
* **slider:** refactor negative margin fix ([af29678](https://github.com/minimit/xtendui/commit/af296785460e90c60ee368c27c0f74edf08a8786))
* **slider:** removed slider friction ([cf154ab](https://github.com/minimit/xtendui/commit/cf154abe6ef739b05fb4dd613e1adff31e1fd1df))
* **slider:** slider activation during drag ([6c461fc](https://github.com/minimit/xtendui/commit/6c461fcbcf23680e1cb3eac34d17f2217696ff0d))
* **slider:** slider behaviour on drag activation ([a4d78e8](https://github.com/minimit/xtendui/commit/a4d78e8d5930b1cc575f9773ffedec50f426c9b3))
* demos scrolltrigger function position ([4ad820b](https://github.com/minimit/xtendui/commit/4ad820bfdf4355ec582bc5d7cfc09089226131ca))
* **slider:** slider behaviour on drag activation ([2a60b4f](https://github.com/minimit/xtendui/commit/2a60b4fcf74f1b0cea3693def3894bfaee4072f5))
* **slider:** slider behaviour on drag activation ([c751f03](https://github.com/minimit/xtendui/commit/c751f03482735dced506e7ac5c51f4a906caa181))
* **slider:** slider behaviour on drag activation ([9795e1c](https://github.com/minimit/xtendui/commit/9795e1c13b313c0b83fd82c16cafcba975dab2be))
* **toggle:** remove classes on initStart only if not savecurrents ([342dd2c](https://github.com/minimit/xtendui/commit/342dd2c9d72fb5618b793f348aefbb0cf9d0327f))
