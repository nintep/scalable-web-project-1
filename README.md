# Designing and Building Scalable Web Applications / Course Project I

Provides an endpoint for grading programming assignments. Has the functionality needed to create a grader image based on grader-image and to copy source code and test code to the image.

The application is divided into four main components and the database. The components are:

- Programming-ui:
  A system that controls the browser UI and allows user input. When a user creates a submission, programming-ui sends it to programming-api as a POST request.
  After submitting an assignment, programming-ui sends a GET request for submission feedback to programming-api every second until feedback is received.

- Programming-api:
  A system that receives user submissions and provides programming-ui with the correct assignments and submission feedback for each user. 
  Programming-api communicates with the database for saving user submissions and grader results and fetching assignments.
  When receiving new submission, programming-api checks if they need to be graded, and sends the submission to grader-api as a POST request if grading is needed.

- Grader-api:
  A system that receives ungraded submissions and sends them to grader-image one at a time.
  When grading is done in grader-image, grader-api sends the results as a ping on a channel that is listened to by programming-api. This is done with a Reids client.

- Grader-image: 
  An image that takes a program submission, runs it and compares the result to a model solution, and provides feedback on if the submission was correct or not.

##Running

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
