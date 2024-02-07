import LoginFunctions from "../../functions/LoginFunctions";
import RegisterFunctions from "../../functions/RegisterFunctions";


describe("Login", () => {
  const loginFunctions = new LoginFunctions();
  const registerFunctions = new RegisterFunctions();

  before(() => {
    // Run the registration logic before each login test
    cy.registerAsNewUserAndSaveEmail();
  });

  it("validates successful login", () => {
    // logout
    registerFunctions.logout();

    loginFunctions.login_as_existing_user();
  });
});