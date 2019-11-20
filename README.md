# Setup

## Installation

You can install with one of the following:
* download: [latest release](https://github.com/minimit/xtend-library/releases/latest)
* clone: `git clone https://github.com/minimit/xtend-library.git`
* [yarn](https://yarnpkg.com/): `yarn add xtend-library --save`
* [npm](https://www.npmjs.com/): `npm install xtend-library --save`

## Usage

### Css

@TODO css usage

### Js

@TODO js usage

<!---
You need to add [core-js](https://github.com/zloirock/core-js):

```Shell
import 'core-js'
import 'regenerator-runtime/runtime'
```

Add the required scripts to your html:

```
import 'xtend-library/src/polyfill.js'
import 'xtend-library/src/polyfill-old.js' // optional, use this only if you need old browsers support: ie11
import { Xt } from 'xtend-library'
import 'xtend-library/src/xtend-core.js' // optional, you can import xtend-library/src/core one by one
import 'xtend-library/src/xtend-addons.js' // optional, you can import xtend-library/src/addons one by one
import 'xtend-library/src/xtend-extensions.js' // optional, you can import xtend-library/src/extension one by one
```

@TODO linkare a https://github.com/minimit/xtend-theme-vanilla per webpack resolve e forkare css e js e https://github.com/minimit/xtend-theme-vanilla/blob/master/.browserslistrc

```Less
```

### Animation

This library uses [gsap](https://github.com/greensock/GreenSock-JS) and [bezier-easing](https://github.com/gre/bezier-easing) for javascript animations.

With npm install and import [gsap](https://www.npmjs.com/package/gsap) and [bezier-easing](https://www.npmjs.com/package/bezier-easing):

```
$ npm install gsap
$ npm install bezier-easing
```

```
import gsap from 'gsap'
import 'bezier-easing';
```

With cdn include [cdn](https://cdnjs.com/libraries/gsap) and [bezier-easing](https://www.jsdelivr.com/package/npm/bezier-easing):

```
@TODO gsap 3 cdn
<script src="//cdn.jsdelivr.net/npm/bezier-easing@2.1.0/dist/bezier-easing.min.js"></script>
```

-->

## Browser Usage

With this method you can't modify the styles or the javascript. Use the recommended [Usage](#usage) instead.

Copy the `/dist` folder in your project.

Add the required styles to your html:

```HTML
<link rel="stylesheet" href="dist/xtend.min.css"/>
```

Add the required scripts to your html:

```HTML
<script src="dist/xtend.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/core-js/2.6.9/shim.min.js"></script>
```

# Prepare

* Install required npm packages with `npm install`
* Use `npm run prepare` to compile the `/dist` folder

# Documentation

We use gatsby to serve the docs:

* Install required npm packages with `npm install`
* Use `npm run build` to build the docs in `/public`
* Use `npm run dev` to serve a develop version, docs will be served to `http://127.0.0.1:8888/`
* Use `npm run serve`to serve a production version, docs will be served to `http://127.0.0.1:8888/`

## Browser support

Supported browsers are as follow: explorer 12, firefox 38, opera 25, safari 10, chrome 38.

# Acknowledgements

* Icons with [feather icons](https://github.com/feathericons/feather)
<!--
* Images with [picsum](https://picsum.photos/)
<img class="full" src="https://picsum.photos/1200" alt=""/>
-->
# Copyright

Licensed under [MIT license](https://github.com/minimit/xtend-library/blob/master/LICENSE).
Docs licensed under [CC BY 3.0](https://github.com/minimit/xtend-library/blob/master/LICENSE-DOCS).
