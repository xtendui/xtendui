// USAGE:
// const spinner = require('components/snippets/spinner').default
// ${spinner({})}

export default function({ width = 120, height = 120, radius = 100, dash = 628 }) {
  return `<svg viewBox="0 0 250 250"><circle cx="${width}" cy="${height}" r="${radius}" stroke-dasharray="${dash}" stroke-dashoffset="${dash}" pathLength="${dash}"/></svg><svg viewBox="0 0 250 250" preserveAspectRatio="xMinYMin meet"><circle cx="${width}" cy="${height}" r="${radius}" stroke-dasharray="${dash}" stroke-dashoffset="${dash}" pathLength="${dash}"/></svg>`
}
