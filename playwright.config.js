// @ts-check
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  workers:1,
  timeout: 30 * 1000,
  expect:{
    timeout:5000
  }, 
  
  reporter: 'html',
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  projects: [
    {
      name: 'safari',
      use: {
        browserName: 'webkit',
        headless: true,
        screenshot: "off",
        trace: 'on',
      }
    },
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: "on",
        trace: 'on',
      }
    },
    {
      name: 'chromeViewport',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: "on",
        trace: 'on',
        viewport :{width: 720, height:720}
      }
    },
    {
      name: 'chromeMobileDevices',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: "on",
        trace: 'on',
        ...devices['iPhone 12 Mini']
      }
    }
  ]

 
});

