# JS automation tests with Cypress framework

<!-- ## Test statuse badge: ![](https://github.com/Kryvchenko/imdb-task-cypress.git/workflows/Cypress_AutomationTest_IMDB/badge.svg) -->

## This repository purpose is to perform test automation on IMDB.com website with the following scenarios:

1. Go to IMDb.com, search for Nicolas Cage and access his profile; then sort filmography by Rating, and
   include only Feature Film. (**imdb.actor_filmography.cy.js** file)

2. Go to IMDb.com, click on the 2nd item on the Top box office list; then click on the Rate, set 5 stars
   Rating and click on the Rate button. (**imdb.top_box_office.cy.js** file)

3. Go to IMDb.com, click on the Menu button, and navigate to the Top 250 TV Shows section; then click
   on Breaking Bad, go to the Photos, display only Danny Trejo's photos, and then click on the 2nd photo in the list. (**imdb.top250_tv_shows.cy.js** file)

## If you want to use another parameters in the test ('actor', 'TV show actor' and 'TV show name') please change actorName, tvShowActorName, tvShowTitle, tvShowfoto, topBoxFilm, filmRate variables in cypress.config.js, or pass with --env flag through the command line (dot separated). For example "npx cypress run --env actorName=Billy.Bob.Thornton,tvShowActorName=Billy.Bob.Thornton,tvShowTitle=Fargo,tvShowFoto=1,topBoxFilm=3".

## Report page (available if repository is public) https://valiantsin2021.github.io/Cypress-Automation_Task_IMBD/

## Job done:

### Cypress

1. Page Object Model and Environment variables
2. Constants in a separate file
3. Mochawesome report (mochawesome-report dir)
4. Github Actions yml file
5. Jenkiinsfile with pipeline script to run tests in docker container
6. DockerFile to run in docker container
7. All methods are made universal for reusability reason with the different test scenarios (depends on "film actor name", "TV show", "TV show actor name")
8. Cypress dashboard connected
9. Precommit hook to run Prettier/Eslint for auto code formatting before commit
10. Add data driven test suite (use data file to dynamically create test cases)
11. Add allure report ( to generate HTML report - "npm run allure")

## Setup:

1. Clone this repository
2. Navigate to the folder of cloned repository and run terminal
3. Install dependencies with "npm install"
4. To run tests headless with report generated - "npm test"
5. To run tests using the Launchpad - "npx cypress open"
6. To run only data driven test suite - "npm run test:dd"
7. To run in free mode with allure reporter - "npx cypress run --env allure=true --spec <path to spec file or folder>"
8. To run env_driven test suite axample "npx cypress run --env actorName=<Billy.Bob.Thornton>,tvShowActorName=<Billy.Bob.Thornton>,tvShowTitle=<Fargo>,tvShowFoto=<1>,topBoxFilm=<3>"
9. To run env suite with dashboard - "npm run cy:dashboard"
10. To make history allure report run "mkdir allure-results/history || echo "history folder already in place...continuing :)" && cp allure-report/history/\* ./allure-results/history && echo "Allure trends updated!" allure generate allure-results --clean -o allure-report && allure open allure-report"
11. To generate Allure HTML report - "npm run allure"
