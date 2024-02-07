const randomData = require('../fixtures/randomData');
import RegisterLocators from '../locators/RegisterLocators';

class RegisterFunctions {
  constructor() {
    this.registeredEmail = null; // Initialize the registered email+password properties
    this.registeredPassword = null;
  }

  

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

  verify_new_user_registration() {
    cy.get(RegisterLocators.logoutButton).should('exist');
  }

  verify_existing_email_alert() {
    cy.get(RegisterLocators.errorMessage).should('contain', 'E-Mail Address is already registered');
  }

  logout() {
    cy.get(RegisterLocators.accountBtn).click();
    cy.get(RegisterLocators.logoutButton).click();
    cy.get(RegisterLocators.logoutButton).should('not.exist')
    cy.reload();
    
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
    this.verify_new_user_registration();
  
    
  
    // Store the registered email for later use
    this.registeredEmail = email;
    this.registeredPassword = password;
    
  
    
  }
  
  getRegisteredEmail() {
    return this.registeredEmail;
  }

  getRegisteredPassword() {
    return this.registeredPassword
  }

  

  register_with_existing_email() {
    const { firstName, lastName } = this.generateRandomUserData();
    
    const registeredEmail = Cypress.env('registeredEmail');
    const registeredPassword = Cypress.env('registeredPassword') || 'Password123'

    if (!registeredEmail) {
      throw new Error('No registered email available. Please run registerAsNewUserAndSaveEmail first.');
    }

  
    this.launch_register_modal(Cypress.env('baseUrl'));
    this.type_first_name(firstName);
    this.type_last_name(lastName);
    this.type_email(registeredEmail);
    this.type_password(registeredPassword);
    this.click_newsletter_toggle();
    this.click_privacy_toggle();
    this.click_continue_button();
    this.verify_existing_email_alert();

    
  }
}

export default RegisterFunctions;