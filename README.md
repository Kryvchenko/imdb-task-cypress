# Test Automation Framework with Cypress

<a href="https://www.imdb.com/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="IMDb" width="300" height="140"/> </a>

## This repository's purpose is to perform test automation on the IMDB.com website with the following scenarios:

1. Go to IMDb.com, search for the actor page (random actors from data.js file) and access his/her profile; then sort filmography by Rating, and include only Feature Film. (**actor.cy.js** file)

2. Go to IMDb.com, click on the 1st item on the Top box office list; then click on the Rate, set 5 stars
   Rating and click on the Rate button. (**top-box.cy.js** file)

3. Go to IMDb.com, click on the Menu button, and navigate to the Top 250 TV Shows section; then click
   on the tv-show page (random tv-show from data.js file), go to the Photos, display only (random actors from
   data.js file) photos, and then click on the 2nd photo in the list. (**tv-show.cy.js** file)

### For this task next methods and techniques being used

1. Page Object Model
2. Constants in a separate file
3. Mochawesome report (mochawesome-report dir)
4. Jenkiinsfile with pipeline script to run tests
5. All methods are made universal for reusability reasons with the different test scenarios (depends on "film actor name", "TV show", "TV show actor name")
6. Pre-commit hook to run Prettier for auto code formatting before commit
7. Added data-driven test suite (use the data file to dynamically create test cases)
8. Github Actions yml file

## Setup:

1. Clone this repository
2. Navigate to the folder of cloned repository and run terminal
3. Install dependencies with `npm install`
4. To run all tests headless with the report generated - `npm run triggerAllTests-headless`
5. To run tests using the Launchpad - `npx cypress open`
6. To clean all reports and run regression test - `npm run cypress-regression-pack`
7. To trigger individual test case scenarios headless:
   - `npm run triggerTVShowPageTests`
   - `npm run triggerActorPageTests`
   - `npm run triggerTopBoxPageTests`
8. To run pre-commit hook with prettier formated document `npm test`
