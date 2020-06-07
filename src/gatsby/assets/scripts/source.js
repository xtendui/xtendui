const cssSource = (demo, nameOverride, type = '.less') => {
  if (demo.type !== 'addons') {
    return require(`!!raw-loader!xtend-library/src/${demo.type}/${demo.component}/${nameOverride ? nameOverride : demo.name}${type}`).default
  } else {
    return `@import '/src/${demo.type}/${demo.component}/${nameOverride ? nameOverride : demo.name}${type}';`
  }
}

const jsSource = (demo, nameOverride, type = '.js') => {
  if (demo.type !== 'addons') {
    return require(`!!raw-loader!xtend-library/src/${demo.type}/${demo.component}/${nameOverride ? nameOverride : demo.name}${type}`).default
  } else {
    return `import 'xtend-library/src/${demo.type}/${demo.component}/${nameOverride ? nameOverride : demo.name}${type}'`
  }
}

const jsxSource = (demo, nameOverride, type = '.jsx') => {
  if (demo.type !== 'addons') {
    return require(`!!raw-loader!xtend-library/src/${demo.type}/${demo.component}/${nameOverride ? nameOverride : demo.name}${type}`).default
  } else {
    return `import 'xtend-library/src/${demo.type}/${demo.component}/${nameOverride ? nameOverride : demo.name}${type}'`
  }
}

export { cssSource, jsSource, jsxSource }
