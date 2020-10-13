// const spinner = require('components/snippets/spinner').default
// ${spinner({})}

export default ({ dimension = 120, radius = 100, dash = 628 }) => {
  return `<svg viewBox="0 0 ${dimension * 2} ${
    dimension * 2
  }"><circle cx="${dimension}" cy="${dimension}" r="${radius}" stroke-dasharray="${dash}" stroke-dashoffset="${dash}" pathLength="${dash}" class="stroke-current"/></svg><svg viewBox="0 0 ${
    dimension * 2
  } ${
    dimension * 2
  }" preserveAspectRatio="xMinYMin meet"><circle cx="${dimension}" cy="${dimension}" r="${radius}" stroke-dasharray="${dash}" stroke-dashoffset="${dash}" pathLength="${dash}" class="stroke-current opacity-25"/></svg>`
}
