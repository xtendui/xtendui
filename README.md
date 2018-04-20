
# Under development

# Installation

You can install with one of the following:
* download: [latest release](https://github.com/minimit/xtend-library/releases/latest)
* clone: `git clone https://github.com/minimit/xtend-library.git`
* [yarn](https://yarnpkg.com/): `yarn add xtend-library --save`
* [npm](https://www.npmjs.com/): `npm install xtend-library --save`

### Theming

You need to copy xtend-library **/dist** to customize the files.

If you installed with **yarn** or **npm**:
```
mkdir -p xtend-library/
cp -r node_modules/xtend-library/dist/ xtend-library/
```

After in `xtend.less` put the right path to the `@import` of core and theme.

### Compilation

We use gulp to compile and watch files. **If you want to recompile the library**:

* Install required npm packages with ```npm install```
* Use ```npm run build``` or ```npm run watch```

### Documentation

We use jekyll to serve the docs. **If you want to serve the docs locally**:

* You need to [install jekyll](https://jekyllrb.com/docs/installation/) on your local machine

* Use ```npm run serve```, docs will be served to ```http://127.0.0.1:4000/```

# Acknowledgements

* Documentation with [jekyll](https://jekyllrb.com/).
<!--
* Icons by [feather icons](https://github.com/feathericons/feather).
-->

# Copyright

Licensed under [MIT license](https://github.com/minimit/xtend-library/blob/master/LICENSE).
Docs licensed under [CC BY 3.0](https://github.com/minimit/xtend-library/blob/master/LICENSE-DOCS).
