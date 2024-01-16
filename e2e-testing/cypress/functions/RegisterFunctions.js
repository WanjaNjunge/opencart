const randomData = require('../fixtures/randomData');
import RegisterLocators from '../locators/RegisterLocators';

class RegisterFunctions {
  // Generate random values for firstname, lastname, email, and password
  generateRandomUserData() {
    return randomData.generateRandomUserData();
  }

  launch_register_modal(launchURL) {
    cy.visit(launchURL);
    cy.get(RegisterLocators.accountBtn).click();
    cy.get(RegisterLocators.registerModal).click();
  }

  type_first_name(firstname) {
    cy.wait(1000);
    cy.get(RegisterLocators.firstNameInput).type(firstname).should('have.value', firstname);
  }

  type_last_name(lastname) {
    cy.get(RegisterLocators.lastNameInput).type(lastname).should('have.value', lastname);
  }

  type_email(email) {
    cy.get(RegisterLocators.emailInput).type(email).should('have.value', email);
  }

  type_password(password) {
    cy.get(RegisterLocators.passwordInput)
      .clear()
      .type(password)
      .invoke('val')
      .should('have.length.gte', 4)
      .should('have.length.lte', 20);
  }

  click_newsletter_toggle() {
    cy.get(RegisterLocators.newsletterToggle).click();
  }

  click_privacy_toggle() {
    cy.get(RegisterLocators.privacyToggle).click();
  }

  click_continue_button() {
    cy.get(RegisterLocators.continueButton).click();
  }



  verify_registration() {
    cy.get(RegisterLocators.logoutButton).should('exist');
  }

  register_as_new_user() {
    const { firstName, lastName, email, password } = this.generateRandomUserData();

    this.launch_register_modal(Cypress.env('baseUrl'));
    this.type_first_name(firstName);
    this.type_last_name(lastName);
    this.type_email(email);
    this.type_password(password);
    this.click_newsletter_toggle();
    this.click_privacy_toggle();
    this.click_continue_button();
    this.verify_registration();
  }
}

export default RegisterFunctions;