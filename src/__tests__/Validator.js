import Validator from "../Validator";

describe("validator module", () => {
  test ("default case", () => {
    expect(Validator.validateUserName("laba")).toBe(true);
  });
  test ("contains free digits", () => {
    expect(Validator.validateUserName("laba888laba")).toBe(false);
  });
  test ("begins with digit", () => {
    expect(Validator.validateUserName("8laba")).toBe(false);
  });
  test ("begins with underscore", () => {
    expect(Validator.validateUserName("_laba")).toBe(false);
  });
  test ("begins with dash", () => {
    expect(Validator.validateUserName("-laba")).toBe(false);
  });
  test ("ends with digit", () => {
    expect(Validator.validateUserName("laba8")).toBe(false);
  });
  test ("ends with underscore", () => {
    expect(Validator.validateUserName("laba_")).toBe(false);
  });
  test ("ends with dash", () => {
    expect(Validator.validateUserName("laba-")).toBe(false);
  });
});