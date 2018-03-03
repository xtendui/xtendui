
# Under development

# Installation

You can install with one of the following:
* download: [latest release](https://github.com/minimit/xtend-library/releases/latest)
* clone: `git clone https://github.com/minimit/xtend-library.git`
* [yarn](https://yarnpkg.com/): `yarn add xtend-library --save`
* [npm](https://www.npmjs.com/): `npm install xtend-library --save`
* [composer](https://getcomposer.org/): `composer require minimit/xtend-library`

### Theming

You need to copy xtend-library **/dist** to customize the files.

If you installed with **yarn** or **npm**:
```
mkdir -p xtend-library/
cp -r node_modules/xtend-library/dist/ xtend-library/
```

If you installed with **composer**:
```
mkdir -p xtend-library/
cp -r vendor/minimit/xtend-library/dist/ xtend-library/
```

After in `xtend.less` put the right path for the **@imports**.

# Acknowledgements

* Icons: [feather icons](https://github.com/feathericons/feather).

# Copyright

Licensed under [MIT license](https://github.com/minimit/xtend-library/blob/master/LICENSE).

