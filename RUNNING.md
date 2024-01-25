Before running the build, run the following
    `docker build -t grader-image .` (in the `grader-image` folder)
    `npm install` (in the `programming-ui` folder)

The development build can be started with the commands
    `docker compose up`

The production build can be started with the command
    `docker compose -f docker-compose.prod.yml up -d`
and removed with the command
    `docker compose down`
    
When it's running, the application can be accessed at http://localhost:7800/

The playwright end to end tests can be run with the command
    `docker compose run --entrypoint=npx e2e-playwright playwright test && docker-compose rm -sf`
Note: the maximum timeout for an expect-request is set to 20 seconds. Usually this is enough to get the grading result for a submission, but
sometimes grading is slower so it might be necessary to run the tests multiple times to get all of them to pass at once. The timeouts can be increased in `e2e-playwright/playwright.config.js`, but it might require rebuilding the container for the changes to take effect.

The k6 performance tests can be run with the following commands. The server must be running during the tests.
    `k6 run load-page-performance-test.js`          (in the `k6` folder)
    `k6 run submit-assignment-performance-test.js`  (in the `k6` folder)
