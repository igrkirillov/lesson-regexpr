export default class Validator {
  static validateUserName(userName) {
    const validSymbolsAndBeforeAfterCheck = /^[^_\-\d][a-zA-Z0-9_\-]+$(?<![_\-\d])/.test(userName);
    const interSymbolsCheck = !/\d{3}/.test(userName);
    return validSymbolsAndBeforeAfterCheck && interSymbolsCheck;
  }
}