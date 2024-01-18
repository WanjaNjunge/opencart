

describe("Register New User", () => {

  it("should handle registration of new user", () => {
    cy.registerAsNewUserAndSaveEmail();
  });
});
