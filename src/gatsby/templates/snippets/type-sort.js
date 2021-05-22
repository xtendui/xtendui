export const typeSort = (a, b) => {
  let first = 0
  let last = 0
  if (b.title === 'Introduction') {
    // a is less than b by some ordering criterion
    first += 30
  }
  if (b.title === 'Global') {
    // a is less than b by some ordering criterion
    first += 20
  }
  if (b.title === 'Interaction') {
    // a is less than b by some ordering criterion
    first += 10
  }
  if (a.title === 'By Component') {
    // a is less than b by some ordering criterion
    first += 10
  }
  if (a.title === 'Introduction') {
    // a is greater than b by the ordering criterion
    last += 30
  }
  if (a.title === 'Global') {
    // a is greater than b by the ordering criterion
    last += 20
  }
  if (a.title === 'Interaction') {
    // a is greater than b by the ordering criterion
    last += 10
  }
  if (b.title === 'By Component') {
    // a is greater than b by the ordering criterion
    last += 10
  }
  // a must be equal to b
  return first >= last ? 1 : -1
}
