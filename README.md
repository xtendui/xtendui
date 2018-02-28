
# Under development

# Installation

You can install with one of the following:
* download: [latest release.](https://github.com/minimit/xtend-library/releases/latest)
* git: `git clone https://github.com/minimit/xtend-library.git`
* yarn: `yarn add xtend-library --save`
* npm: `npm install xtend-library --save`
* composer: `composer require minimit/xtend-library`

### Theming

You need to copy xtend-library **/dist** to customize the files.

If you install with **yarn** or **npm**:
```
mkdir -p xtend-library/
cp -r node_modules/xtend-library/dist/ xtend-library/
```

If you install with **composer**:
```
mkdir -p xtend-library/
cp -r vendor/minimit/xtend-library/dist/ xtend-library/
```

After in `xtend.less` put the right path for the **@imports**.

# Copyright

Copyright © 2017-2018 Riccardo Caroli. Licensed under [MIT license](http://www.opensource.org/licenses/mit-license.php).

