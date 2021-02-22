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
