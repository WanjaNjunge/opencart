import LoginLocators from '../locators/LoginLocators';


class LoginFunctions {
  

  launch_login_modal(launchURL) {
    cy.visit(launchURL);
    cy.get(LoginLocators.accountBtn).click();
    cy.get(LoginLocators.loginModal).click();
  }

  type_email(email) {
    cy.wait(1000);
    cy.get(LoginLocators.emailInput).type(email).should('have.value', email);
  }

  type_password(password) {
    cy.get(LoginLocators.passwordInput)
      .clear()
      .type(password)
      .invoke('val')
      .should('have.length.gte', 4)
      .should('have.length.lte', 20);
  }

  click_login_button() {
    cy.get(LoginLocators.loginButton).click();
  }



  verify_successul_login() {
    cy.get(LoginLocators.loginButton).should('not.exist');
    cy.get(LoginLocators.logoutButton).should('exist');
  }


  login_as_existing_user() {
    
    const registeredEmail = Cypress.env('registeredEmail');
    const registeredPassword = Cypress.env('registeredPassword')
    // if (!registerFunctions.type_email(registeredEmail)) {
    //   throw new Error('No registered email available. Please run register_as_new_user first.');
    // }

    this.launch_login_modal(Cypress.env('baseUrl'));
    this.type_email(registeredEmail);
    this.type_password(registeredPassword);
    this.click_login_button();
    this.verify_successul_login();
  };



}

export default LoginFunctions;