const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://imdb.com",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    excludeSpecPattern: "cypress/e2e/2-advanced-examples/*.{js,jsx,ts,tsx}",
    viewportHeight: 720,
    viewportWidth: 1280,
    retries: {
      runMode: 1,
      openMode: 0
    },
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    videoUploadOnPasses: false,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 60000
  }
});
