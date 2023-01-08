const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://imdb.com",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    viewportHeight: 720,
    viewportWidth: 1280,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json"
    },
    retries: {
      runMode: 1,
      openMode: 0
    },
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    videoUploadOnPasses: false,
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 60000
  }
});
