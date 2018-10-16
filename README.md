
# Under development

# Installation

You can install with one of the following:
* download: [latest release](https://github.com/minimit/xtend-library/releases/latest)
* clone: `git clone https://github.com/minimit/xtend-library.git`
* [yarn](https://yarnpkg.com/): `yarn add xtend-library --save`
* [npm](https://www.npmjs.com/): `npm install xtend-library --save`

### Theming

You need to copy xtend-library **/dist** to customize the files.

```
mkdir -p xtend-library/
cp -r node_modules/xtend-library/dist/ xtend-library/
```

### Compilation

We use gulp to compile and watch files.

* Install required npm packages with `npm install`
* Use `npm run build` or `npm run watch` (with watch you need also jekyll)

### Documentation

We use jekyll to serve the docs.

* You need to [install jekyll](https://jekyllrb.com/docs/installation/) on your local machine
* Use `bundle install` to install jekyll's bundles
* Use `npm run serve`, docs will be served to `http://127.0.0.1:4000/`

# Acknowledgements

* Documentation with [jekyll](https://jekyllrb.com/)
* Javascript with [babel](https://babeljs.io/)
* Polyfills:
  * [closest](https://github.com/jonathantneal/closest/)
  * [:scope](https://github.com/jonathantneal/element-qsa-scope/)
  * [prepend](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend)
  * [append](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append)
  * [before](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before)
  * [findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
  * [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent)
  * [scrollingElement](https://github.com/yangg/scrolling-element)
<!--
* Icons by [feather icons](https://github.com/feathericons/feather)
-->

# Copyright

Licensed under [MIT license](https://github.com/minimit/xtend-library/blob/master/LICENSE).
Docs licensed under [CC BY 3.0](https://github.com/minimit/xtend-library/blob/master/LICENSE-DOCS).
