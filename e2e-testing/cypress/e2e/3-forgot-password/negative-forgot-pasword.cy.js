import LoginFunctions from "../../functions/LoginFunctions";

describe("Verify Invalid Email on Forgot Password", () => {
  const loginFunctions = new LoginFunctions();

  it("Logs in with invalid email", () => {
    loginFunctions.verify_negative_forgot_password();
  });
});