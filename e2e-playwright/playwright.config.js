module.exports = {
  timeout: 10000,
  retries: 0,
  reporter: "list",
  workers: 5,
  use: {
    baseURL: "http://localhost:7800",
    headless: true,
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: "e2e-headless-chromium",
      use: {
        browserName: "chromium",
      },
    },
  ],
  expect: {
    // Maximum time expect() should wait for the condition to be met.
    timeout: 20000,
  },
};
