const cssSource = (demo, nameOverride, type = '.less') => {
  return require(`!!raw-loader!xtend-library/src/${demo.type}/${demo.component}/${nameOverride ? nameOverride : demo.name}${type}`).default
}

const jsSource = (demo, nameOverride, type = '.js') => {
  return require(`!!raw-loader!xtend-library/src/${demo.type}/${demo.component}/${nameOverride ? nameOverride : demo.name}${type}`).default
}

const jsxSource = (demo, nameOverride, type = '.jsx') => {
  return require(`!!raw-loader!xtend-library/src/${demo.type}/${demo.component}/${nameOverride ? nameOverride : demo.name}${type}`).default
}

export { cssSource, jsSource, jsxSource }
