import RegisterFunctions from "../../functions/RegisterFunctions";

describe("Register as new User", () => {
  const registerFunctions = new RegisterFunctions();

  it("Registers as new user", () => {
    registerFunctions.register_as_new_user();
  });
});