import RegisterFunctions from "../../functions/RegisterFunctions";

describe("Register with Existing Email", () => {
  const registerFunctions = new RegisterFunctions();
  

  before(() => {
    // Register a new user and save the email
    cy.registerAsNewUserAndSaveEmail();
    
  });

  it("should handle registration with an existing email", () => {
    // Logout and attempt to register with the existing email
    
    registerFunctions.logout();
    
    registerFunctions.register_with_existing_email();
  });
});
