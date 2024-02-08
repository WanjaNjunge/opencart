# OpenCart Project Setup and End-to-end Testing with Docker

This directory contains an OpenCart project set up with Docker, along with end-to-end testing using GitHub Actions workflows.

## Setup

### Prerequisites

- Docker Desktop installed on your machine
- Git installed on your machine

### Clone the Repository

Clone this repository to your local machine and navigate to the repo:

```bash
git@github.com:WanjaNjunge/opencart.git
```
### Using Bitnami's OpenCart Package
- This project utilizes the Bitnami package for OpenCart. Bitnami packages provide a reliable and secure way to deploy popular open-source software applications.

### Installation
- To use Bitnami's OpenCart package, you can run the following Docker command to get the docker-compose.yml file:
```bash
docker run --name opencart bitnami/opencart:latest
```

### Start Docker Containers
- In the same directory, start the Docker containers using Docker Compose:
```bash
docker-compose up -d
```
- This command will start the MariaDB and OpenCart services defined in the docker-compose.yml file.

### Access OpenCart
Once the containers are up and running, you can access OpenCart in your web browser:

- Storefront: http://localhost:8080
- Admin Panel: http://localhost:8080/admin



### End-to-end Testing with GitHub Actions
The repository includes e2e automated testing suite for the [OpenCart Demo](https://demo.opencart.com/). The tests are written in JS and they run in Cypress.
- It also includes GitHub Actions workflows for running end-to-end tests using Cypress.

### Workflow Configuration
- The workflow is triggered on pushes to the master branch and pull requests being opened or synchronized.
- The workflow configuration is defined in the .github/workflows/end-to-end-testing.yml file. It sets up services for MariaDB and OpenCart using Docker containers and then runs Cypress tests.

### Running the Workflow
- Push your changes to the master branch or open a pull request.
- GitHub Actions will automatically trigger the End-to-end tests workflow.
- The workflow will start Docker containers for MariaDB and OpenCart, wait for them to be ready, and then run Cypress tests.

### Viewing Test Results
After the workflow completes, you can view the test results in the Actions tab of your GitHub repository.



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

## Getting Set Up for running tests

### Installation
- Requires node v18+
- Navigate to the e2e-testing directory and run:

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

### Contributing
If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

Happy coding!

