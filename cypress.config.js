const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'd4b2fy',
  viewportWidth: 1280,
  viewportHeight: 800,
  retries: 2,
  scrollBehavior: 'center',
  screenshotOnRunFailure: false,
  video: false,
  fixturesFolder: 'tests/cypress/fixtures',
  screenshotsFolder: 'tests/cypress/screenshots',
  videosFolder: 'tests/cypress/videos',
  downloadsFolder: 'tests/cypress/downloads',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./tests/cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:8080',
    specPattern: 'tests/cypress/integration/**/*.{js,jsx,ts,tsx}',
    supportFile: 'tests/cypress/support/index.js',
  },
})
