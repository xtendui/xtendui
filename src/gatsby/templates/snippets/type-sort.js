export const typeSort = (a, b) => {
  let first = 0
  let last = 0
  if (b.title === 'Info') {
    // a is less than b by some ordering criterion
    first += 30
  }
  if (a.title === 'By Component') {
    // a is less than b by some ordering criterion
    first += 10
  }
  if (a.title === 'Info') {
    // a is greater than b by the ordering criterion
    last += 30
  }
  if (b.title === 'By Component') {
    // a is greater than b by the ordering criterion
    last += 10
  }
  // a must be equal to b
  return first >= last ? 1 : -1
}
