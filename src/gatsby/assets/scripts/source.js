let cssSource = function(demo, type = 'less') {
  if (demo.type === 'demos') {
    return require(`!!raw-loader!xtend-library/src/${demo.type}/${demo.component}/${demo.name}.${type}`).default
  } else {
    return `@import '~xtend-library/src/${demo.type}/${demo.component}/${demo.name}';`
  }
};

let jsSource = function(demo, type = 'js') {
  if (demo.type === 'demos') {
    return require(`!!raw-loader!xtend-library/src/${demo.type}/${demo.component}/${demo.name}.${type}`).default
  } else {
    return `import 'xtend-library/src/${demo.type}/${demo.component}/${demo.name}'`
  }
};

export {cssSource, jsSource};
