const cssSource = function (demo, type = '.less') {
  if (demo.type === 'demo') {
    return require(`!!raw-loader!xtend-library/src/${demo.type}/${demo.component}/${demo.name}${type}`).default
  } else {
    return `@import '~xtend-library/src/${demo.type}/${demo.component}/${demo.name}${type}';`
  }
}

const jsSource = function (demo, type = '.js') {
  if (demo.type === 'demo') {
    return require(`!!raw-loader!xtend-library/src/${demo.type}/${demo.component}/${demo.name}${type}`).default
  } else {
    return `import 'xtend-library/src/${demo.type}/${demo.component}/${demo.name}${type}'`
  }
}

export { cssSource, jsSource }
