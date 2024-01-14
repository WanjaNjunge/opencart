import LoginLocators from '../locators/LoginLocators';

class LoginFunctions {
  launch_login_modal(launchURL) {
    cy.visit(launchURL);
    
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



  verify_login() {
    cy.get(LoginLocators.loginButton).should('not.exist');
    cy.get(LoginLocators.logoutButton).should('exist');
  }

  login_as_user() {
    this.launch_login_modal();
    this.type_email();
    this.type_password();
    this.click_login_button();
    this.verify_login();
  }
}

export default LoginFunctions;