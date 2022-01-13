export const typeSort = (a, b) => {
  let first = 0
  let last = 0
  if (a.title === 'By Component') {
    // a is less than b by some ordering criterion
    first += 100
  }
  if (b.title === 'Global') {
    // a is less than b by some ordering criterion
    first += 100
  }
  if (b.title === 'Toggle') {
    // a is less than b by some ordering criterion
    first += 60
  }
  if (b.title === 'Scroll') {
    // a is less than b by some ordering criterion
    first += 50
  }
  if (b.title === 'Design') {
    // a is less than b by some ordering criterion
    first -= 100
  }
  if (b.title === 'By Component') {
    // a is greater than b by the ordering criterion
    last += 100
  }
  if (a.title === 'Global') {
    // a is greater than b by the ordering criterion
    last += 100
  }
  if (a.title === 'Toggle') {
    // a is greater than b by the ordering criterion
    last += 60
  }
  if (a.title === 'Scroll') {
    // a is greater than b by the ordering criterion
    last += 50
  }
  if (a.title === 'Design') {
    // a is greater than b by the ordering criterion
    last -= 100
  }
  // a must be equal to b
  return first >= last ? 1 : -1
}
