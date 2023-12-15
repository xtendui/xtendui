function url() {
  return 'http://localhost:8080/hidden/test/'
}

async function action(page) {
  await page.click('[href="/hidden/test/animation-test/"]')
}

async function back(page) {
  await page.click('[href="/hidden/test/"]')
}

module.exports = { action, back, url }
