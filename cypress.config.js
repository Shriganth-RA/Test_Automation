import { defineConfig } from "cypress";
// cypress.config.js
import { isCI } from 'ci-info';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // console.log('Running in CI:', isCI);
      // return config;
    },
    // baseUrl: 'https://demo.automationtesting.in/',
  },
});
