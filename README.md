
# Under development

# Installation

You can install with one of the following:
* download: [latest release](https://github.com/minimit/xtend-library/releases/latest)
* clone: `git clone https://github.com/minimit/xtend-library.git`
* [yarn](https://yarnpkg.com/): `yarn add xtend-library --save`
* [npm](https://www.npmjs.com/): `npm install xtend-library --save`

# Css

You need to copy xtend-library **/dist** to customize the files.

```
$ mkdir -p xtend-library/
$ cp -r node_modules/xtend-library/dist/ xtend-library/
```

After in `styles/xtend.less` set `@theme-path` (usually `theme/`) and `@core-path` (usually `../../node_modules/xtend-library/src/styles/core`).

# Js

#### Polyfill

For supporting older browsers you need to add [babel polyfill](https://babeljs.io/docs/en/babel-polyfill/)

With npm install and import [babel polyfill](https://www.npmjs.com/package/@babel/polyfill):

```
$ npm install @babel/polyfill
```

```
import '@babel/polyfill/dist/polyfill';
```

With cdn include [babel polyfill](https://cdnjs.com/libraries/babel-polyfill):

```
<script src="//cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.2.5/polyfill.min.js"></script>
```

#### Animation

This library uses [gsap](https://github.com/greensock/GreenSock-JS) and [bezier-easing](https://github.com/gre/bezier-easing) for javascript animations.

With npm install and import [gsap](https://www.npmjs.com/package/gsap) and [bezier-easing](https://www.npmjs.com/package/bezier-easing):

```
$ npm install gsap
$ npm install bezier-easing
```

```
import 'gsap/TweenMax';
import 'gsap/ScrollToPlugin';
import 'bezier-easing';
```

With cdn include [cdn](https://cdnjs.com/libraries/gsap) and [bezier-easing](https://www.jsdelivr.com/package/npm/bezier-easing):

```
<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/plugins/ScrollToPlugin.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/bezier-easing@2.1.0/dist/bezier-easing.min.js"></script>
```

#### Library

With npm import [xtend-library](https://www.npmjs.com/package/xtend-library):

```
import 'xtend-library';
```

With **script** include **xtend.js**:

```
<script src="xtend-library/scripts/xtend.js"></script>
```

# Compilation

We use gulp to compile and watch files.

* Install required npm packages with `npm install`
* Use `npm run build` or `npm run dev` to compile **xtend** css and js
* Use `npm run build:doc` or `npm run dev:docs` to compile **also docs** css and js

# Documentation

We use jekyll to serve the docs.

* You need to [install jekyll](https://jekyllrb.com/docs/installation/) on your local machine
* Use `bundle install` to install jekyll's bundles
* Use `npm run serve:docs`, docs will be served to `http://127.0.0.1:4000/`

# Acknowledgements

* Documentation with [jekyll](https://jekyllrb.com/)
* Javascript with [babel](https://babeljs.io/)
* Icons with [feather icons](https://github.com/feathericons/feather)
* Polyfills:
  * [closest](https://github.com/jonathantneal/closest/)
  * [:scope](https://github.com/jonathantneal/element-qsa-scope/)
  * [prepend](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend)
  * [append](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append)
  * [before](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before)
  * [findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
  * [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent)
  * [scrollingElement](https://github.com/yangg/scrolling-element)

# Copyright

Licensed under [MIT license](https://github.com/minimit/xtend-library/blob/master/LICENSE).
Docs licensed under [CC BY 3.0](https://github.com/minimit/xtend-library/blob/master/LICENSE-DOCS).
