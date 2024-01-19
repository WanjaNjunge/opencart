import LoginFunctions from "../../functions/LoginFunctions";
import RegisterFunctions from "../../functions/RegisterFunctions";

describe("Verify Forgot Password", () => {
  const loginFunctions = new LoginFunctions();
  const registerFunctions = new RegisterFunctions();

  before(() => {
    // Run the registration logic before each login test
    cy.registerAsNewUserAndSaveEmail();
  
  });

  it("validates forgot password functionality", () => {
    registerFunctions.logout();

    
    loginFunctions.forgot_password();
  });
});