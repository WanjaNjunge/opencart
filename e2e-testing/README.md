<!--
- CI status
- installation
https://github.com/projectcypress/cypress
https://github.com/cypress-io/cypress-example-todomvc
- contributing - linked to a doc contributing.md
    - code of conduct - done
    - https://github.com/cypress-io/cypress-documentation/blob/main/CONTRIBUTING.md
    - committing code
-->

## CI Status

This is the e2e automated testing suite for the [OpenCart Demo](https://demo.opencart.com/). The tests are written in JS and they run in Cypress.

## File Naming And Structure

Test files are named according to the functionality covered. Login covers login steps, roles covers roles, surveys covers surveys and so on and so forth.
Each file is put into its own respectively named folder, and each folder prefixed with a number in ascending order. This is so that the folders are arranged in order starting from 1 in the test runner. When all the tests are run, they will run in this order.

## Tests Structure

Each main test file has two associated files:

### Locator file
Named to match the associated test file.
Locators folder has files that have custom element selectors. Locator files sit here.

### Functions file
Named to match the associated test file. Functions file has the core functions for the tests. The main test file calls from from the functions file located in the Functions folder.

## Getting Set Up

### Installation
Requires node v18+

```bash
npm install
``` 
will install the current cypress version the tests are written and running in. 

Check out [Cypress.io](cypress.io) for more information

### Running the tests
Once cypress is set up and running, simply open the runner and click on individual tests to run.
Tests can be run in headless mode in the terminal using the default command:

```bash
npx cypress run
```

To launch the cypress test runner, use the command:
```bash
npm run cy:open
```
This will launch the test runner laying out available tests, and individual tests can be run on a browser on a visual interface.



