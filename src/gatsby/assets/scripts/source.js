const cssSource = function(demo, nameOverride, type = '.less') {
  if (demo.type === 'demos') {
    return require(`!!raw-loader!xtend-library/src/${demo.type}/${demo.component}/${nameOverride ? nameOverride : demo.name}${type}`).default
  } else {
    return `@import '~xtend-library/src/${demo.type}/${demo.component}/${nameOverride ? nameOverride : demo.name}${type}';`
  }
}

const jsSource = function(demo, nameOverride, type = '.js') {
  if (demo.type === 'demos') {
    return require(`!!raw-loader!xtend-library/src/${demo.type}/${demo.component}/${nameOverride ? nameOverride : demo.name}${type}`).default
  } else {
    return `import 'xtend-library/src/${demo.type}/${demo.component}/${nameOverride ? nameOverride : demo.name}${type}'`
  }
}

const jsxSource = function(demo, nameOverride, type = '.jsx') {
  if (demo.type === 'demos') {
    return require(`!!raw-loader!xtend-library/src/${demo.type}/${demo.component}/${nameOverride ? nameOverride : demo.name}${type}`).default
  } else {
    return `import 'xtend-library/src/${demo.type}/${demo.component}/${nameOverride ? nameOverride : demo.name}${type}'`
  }
}

export { cssSource, jsSource, jsxSource }
