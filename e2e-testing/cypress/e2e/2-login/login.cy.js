import LoginFunctions from "../../functions/LoginFunctions";

describe("Login as Admin", () => {
  const loginFunctions = new LoginFunctions();

  it("Logs in as existing user", () => {
    loginFunctions.login_as_user();
  });
});